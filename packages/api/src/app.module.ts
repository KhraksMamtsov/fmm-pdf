import { Module } from '@nestjs/common';
import { PdfModule } from './pdf/pdf/pdf.module.js';
import { PuppeteerModule } from './puppeteer/puppeteer.module.js';

@Module({
  imports: [PuppeteerModule, PdfModule],
})
export class AppModule {}
