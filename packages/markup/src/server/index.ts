// import path from "node:path";
// import url from "node:url";
// import puppeteer from "puppeteer";
// import { Writable } from "node:stream";
// import { TeamPageDataTest } from "../page/team/Team.data.ts";
// import http from "node:http";

// const host = "localhost";
// const port = 8000;

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const filePath = "file://" + path.resolve(__dirname, "../../dist/index.html");

// async function loadLocalFile() {
//   const browser = await puppeteer.launch({
//     headless: true,
//     args: [
//       "--allow-file-access-from-files",
//       "--allow-file-access",
//       "--allow-cross-origin-auth-prompt",
//       "--window-size=1920,1080",
//     ],
//     // defaultViewport: null,
//     defaultViewport: {
//       width: 1920,
//       height: 1080,
//     },
//   });

//   http
//     .createServer(async (_request, response) => {
//       console.log("генерация pdf");
//       if (response.closed) {
//         console.log("Генерация прервана до открытия страницы");
//         return;
//       }
//       const page = await browser.newPage();
//       // Устанавливаем размеры страницы для A4
//       // await page.setViewport({ width: 2480, height: 3508 }); // Это A4 в пикселях при 300 DPI

//       if (response.closed) {
//         await page.close();
//         console.log("Генерация прервана после открытия страницы");
//         return;
//       }

//       await page.goto(filePath, {
//         waitUntil: "networkidle0", // Wait for all non-lazy loaded images to load
//       });

//       if (response.closed) {
//         await page.close();
//         console.log("Генерация прервана после открытия pdf");
//         return;
//       }
//       await page.evaluate(async (data) => {
//         console.log(data);
//         // window.__FFM_PDF_DATA = {
//         //   team: data,
//         //   template: "team",
//         // };

//         return window.__FFM_PDF_RUN_APP();
//       }, TeamPageDataTest);

//       if (response.closed) {
//         await page.close();
//         console.log("Генерация прервана после рендеринга pdf");
//         return;
//       }

//       const pdfStream = await page.createPDFStream({
//         preferCSSPageSize: true,
//         waitForFonts: true,
//       });

//       if (response.closed) {
//         await pdfStream.cancel();
//         console.log("Генерация прервана после создания pdf");
//       } else {
//         await pdfStream.pipeTo(Writable.toWeb(response));
//       }

//       await page.close();
//       console.log("генерация pdf завершена");
//     })
//     .on("close", () => {
//       browser.close();
//     })
//     .listen(port, host, () => {
//       console.log(`Server is running on http://${host}:${port}`);
//     });
// }

// loadLocalFile();
