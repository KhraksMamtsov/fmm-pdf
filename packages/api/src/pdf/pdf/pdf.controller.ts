import { Controller, Post, Body } from '@nestjs/common';
import { PdfService } from './pdf.service.js';
import { CreatePdfDto } from './dto/create-pdf.dto.js';
import { UpdatePdfDto } from './dto/update-pdf.dto.js';
import { Writable } from 'node:stream';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Post()
  async generate(@Body() createPdfDto: CreatePdfDto) {
    const checkContinue = () => true;
    const pdfStream = await this.pdfService.generatePDF({
      checkContinue,
    });

    if (checkContinue()) {
      await pdfStream?.cancel();
      console.log('Генерация прервана после создания pdf');
    } else {
      await pdfStream?.pipeTo(Writable.toWeb(response));
    }
  }
}
