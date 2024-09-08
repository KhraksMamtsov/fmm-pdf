import { Module } from '@nestjs/common';
import { PdfService } from './pdf.service.js';
import { PdfController } from './pdf.controller.js';
import { PuppeteerModule } from '../../puppeteer/puppeteer.module.js';

@Module({
  imports: [PuppeteerModule],
  controllers: [PdfController],
  providers: [PdfService],
})
export class PdfModule {}
