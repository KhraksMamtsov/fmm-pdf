import { PartialType } from '@nestjs/mapped-types';
import { CreatePdfDto } from './create-pdf.dto.js';

export class UpdatePdfDto extends PartialType(CreatePdfDto) {}
