import { IsString, IsNumber, IsOptional, IsDate } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";
export class CreateObjetoDto{
    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: "Encontrado",
        description: "Status do objeto"
    })
    nome: string;
    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: "Garrafa azul de 500ml",
        description: "Descrição do objeto"
    })
    descricao: string;
    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: "Encontrado na sala",
        description: "Lugar onde foi encontrado o objeto"
    })
    local_encontrado: string;
    @IsDate()
    @IsOptional()
    @ApiPropertyOptional({
        example: "2026-08-14",
        description: "Data na qual foi encontrado o objeto"
    })
    data_encontrado: Date;
    @IsString()
    @IsOptional()
    @ApiPropertyOptional({
        example: "Encontrado",
        description: "Status do objeto"
    })
    status_objeto: string;
}