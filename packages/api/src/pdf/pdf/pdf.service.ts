import { Injectable } from '@nestjs/common';
import { CreatePdfDto } from './dto/create-pdf.dto.js';
import { UpdatePdfDto } from './dto/update-pdf.dto.js';

import { Page } from 'puppeteer';
import { PuppeteerService } from '../../puppeteer/puppeteer.service.js';

@Injectable()
export class PdfService {
  constructor(private readonly puppeteerService: PuppeteerService) {}

  async generatePDF(options: { checkContinue: () => boolean }) {
    const page = await this.puppeteerService.browser.newPage();
    try {
      if (options.checkContinue()) {
        await page.close();
        console.log('Генерация прервана после открытия страницы');
        return;
      }

      await page.goto('filePath', {
        waitUntil: 'networkidle0', // Wait for all non-lazy loaded images to load
      });

      if (options.checkContinue()) {
        await page.close();
        console.log('Генерация прервана после открытия pdf');
        return;
      }
      await page.evaluate(async (data) => {
        console.log(data);
        // window.__FFM_PDF_DATA = {
        //   team: data,
        //   template: "team",
        // };

        // return window.__FFM_PDF_RUN_APP();
      }, 'TeamPageDataTest');

      if (options.checkContinue()) {
        await page.close();
        console.log('Генерация прервана после рендеринга pdf');
        return;
      }

      const pdfStream = await page.createPDFStream({
        preferCSSPageSize: true,
        waitForFonts: true,
      });

      return pdfStream;
    } finally {
      await page.close();
    }
  }
}
