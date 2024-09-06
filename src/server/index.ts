import path from "node:path";
import url from "node:url";
import puppeteer from "puppeteer";
import { Writable } from "node:stream";
import { TeamPageDataTest } from "../page/team/Team.data.ts";
import http from "node:http";

const host = "localhost";
const port = 8000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = "file://" + path.resolve(__dirname, "../../dist/index.html");

async function loadLocalFile() {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--allow-file-access-from-files",
      "--allow-file-access",
      "--allow-cross-origin-auth-prompt",
      // "--window-size=1920,1080",
    ],
    defaultViewport: null,
    // defaultViewport: {
    //   width: 1920,
    //   height: 1080,
    // },
  });
  const page = await browser.newPage();
  // Устанавливаем размеры страницы для A4
  // await page.setViewport({ width: 2480, height: 3508 }); // Это A4 в пикселях при 300 DPI

  await page.goto(filePath, {
    waitUntil: "networkidle0", // Wait for all non-lazy loaded images to load
  });

  http
    .createServer(async (request, response) => {
      console.log("генерация pdf");
      await page.evaluate(async (data) => {
        console.log(data);
        // window.__FFM_PDF_DATA = {
        //   team: data,
        //   template: "team",
        // };

        return window.__FFM_PDF_RUN_APP();
      }, TeamPageDataTest);

      const pdfStream = await page.createPDFStream({
        preferCSSPageSize: true,
        waitForFonts: true,
      });

      if (response.closed) {
        await pdfStream.cancel();
      } else {
        await pdfStream.pipeTo(Writable.toWeb(response));
      }
    })
    .on("close", () => {
      browser.close();
    })
    .listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`);
    });
}

loadLocalFile();
