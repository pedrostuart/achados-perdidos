import { IsString, IsNumber, IsNotEmpty, IsDate } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateObjetoDto{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "Garrafa de agua",
        description: "Nome do objeto"
    })
    nome: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "Garrafa azul de 500ml",
        description: "Descrição do objeto"
    })
    descricao: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "Encontrado na sala",
        description: "Lugar onde foi encontrado o objeto"
    })
    local_encontrado: string;
    @IsDate()
    @IsNotEmpty()
    @ApiProperty({
        example: "2026-08-14",
        description: "Data na qual foi encontrado o objeto"
    })
    data_encontrado: Date;
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "Encontrado",
        description: "Status do objeto"
    })
    status_objeto: string;
}