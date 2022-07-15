import { PartialType } from '@nestjs/mapped-types';
import { CreateBancobrasilBoletoRegistroDto } from './create-bancobrasil-boleto-registro.dto';

export class UpdateBancobrasilBoletoRegistroDto extends PartialType(CreateBancobrasilBoletoRegistroDto) {}
