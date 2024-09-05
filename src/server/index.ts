import path from "node:path";
import url from "node:url";
import puppeteer from "puppeteer";
import { TeamPageDataTest } from "../page/team/Team.data.ts";

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
  const page = await browser.newPage(); // Устанавливаем размеры страницы для A4
  // await page.setViewport({ width: 2480, height: 3508 }); // Это A4 в пикселях при 300 DPI

  await page.goto(filePath, {
    waitUntil: "networkidle0", // Wait for all non-lazy loaded images to load
  });

  await page.evaluate(async (data) => {
    console.log(data);
    // window.__FFM_PDF_DATA = {
    //   team: data,
    //   template: "team",
    // };

    return window.__FFM_PDF_RUN_APP();
  }, TeamPageDataTest);

  await page.pdf({
    path: "page.pdf", // путь для сохранения файла PDF
    preferCSSPageSize: true,
    waitForFonts: true,
    // format: "A4", // стандартный формат A4
    // printBackground: true, // включает фоновые цвета и изображения
    // margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' } // настроить отступы
  });
  await browser.close();
}

loadLocalFile();
