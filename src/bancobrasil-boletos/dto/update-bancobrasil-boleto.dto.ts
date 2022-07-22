import { PartialType } from '@nestjs/mapped-types';
import { CreateBancobrasilBoletoDto } from './create-bancobrasil-boleto.dto';

export class UpdateBancobrasilBoletoDto extends PartialType(CreateBancobrasilBoletoDto) {}
