import { Controller, Body, Post } from '@nestjs/common';
import { CreateObjetoDto } from './dto/create-objeto.dto';
import { ObjetosService } from './objetos.service';

@Controller('objetos')
export class ObjetosController {
    constructor (private readonly objetoService: ObjetosService){}

    @Post()
    adicionar(@Body() createObjetoDto: CreateObjetoDto){
        return this.objetoService.adicionar(createObjetoDto)
    }

}
