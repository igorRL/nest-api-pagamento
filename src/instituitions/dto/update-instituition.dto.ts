import { PartialType } from '@nestjs/mapped-types';
import { CreateInstituitionDto } from './create-instituition.dto';

export class UpdateInstituitionDto extends PartialType(CreateInstituitionDto) {
    finsfin_nome_fantasia:string
    finsfin_razao_social:string
    finsfin_code_banco:string
    finsfin_logo:string
    finsfin_cnpj:string
    finsfin_status:string
}
