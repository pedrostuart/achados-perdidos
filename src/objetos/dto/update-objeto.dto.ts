import { IsString, IsNumber, IsOptional, IsDate } from "class-validator";
export class CreateObjetoDto{
    @IsString()
    @IsOptional()
    nome: string;
    @IsString()
    @IsOptional()
    descricao: string;
    @IsString()
    @IsOptional()
    local_encontrado: string;
    @IsDate()
    @IsOptional()
    data_encontrado: Date;
    @IsString()
    @IsOptional()
    status_objeto: string;
}