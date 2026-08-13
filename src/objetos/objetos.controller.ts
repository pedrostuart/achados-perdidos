import { Controller, Body, Post, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CreateObjetoDto } from './dto/create-objeto.dto';
import { ObjetosService } from './objetos.service';

@Controller('objetos')
export class ObjetosController {
    constructor (private readonly objetoService: ObjetosService){}

    @Post()
    adicionar(@Body() createObjetoDto: CreateObjetoDto){
        return this.objetoService.adicionar(createObjetoDto)
    }
    @Get()
    exibir(){
        return this.objetoService.exibir()
    }
    @Get(':id')
    buscarPorID(@Param('id', ParseIntPipe) id: number){
        return this.objetoService.buscarPorId(id)
    }
}
