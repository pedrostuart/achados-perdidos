import { IsString, IsNumber, IsNotEmpty } from "class-validator";
export class CreateObjeto{
    @IsString()
    @IsNotEmpty()
    nome: string
}