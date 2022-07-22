import { IsString } from "class-validator"

export class CreateInstituitionDto {
     @IsString()
     finsfin_nome_fantasia:string

     @IsString()
     finsfin_razao_social:string

     @IsString()
     finsfin_code_banco:string

     @IsString()
     finsfin_logo:string

     @IsString()
     finsfin_cnpj:string

     @IsString()
     finsfin_status:string
}
