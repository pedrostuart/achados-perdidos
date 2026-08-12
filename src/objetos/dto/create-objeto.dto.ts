import { IsString, IsNumber, IsNotEmpty, IsDate } from "class-validator";
export class CreateObjetoDto{
    @IsString()
    @IsNotEmpty()
    nome: string;
    @IsString()
    @IsNotEmpty()
    descricao: string;
    @IsString()
    @IsNotEmpty()
    local_encontrado: string;
    @IsDate()
    @IsNotEmpty()
    data: Date;
    @IsString()
    @IsNotEmpty()
    status_objeto: string;
}