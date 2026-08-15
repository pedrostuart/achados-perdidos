import { Controller, Body, Post, Get, Param, ParseIntPipe, Put, Delete } from '@nestjs/common';
import { CreateObjetoDto } from './dto/create-objeto.dto';
import { ObjetosService } from './objetos.service';
import { ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateObjetoDto } from './dto/update-objeto.dto';

@ApiTags('objetos')

@Controller('objetos')
export class ObjetosController {
    constructor (private readonly objetoService: ObjetosService){}

    @Post()

    @ApiOperation({
        summary: "Cadastrar objeto"
    })
    @ApiResponse({
        status: 201,
        description: "Objeto cadastrado com sucesso"
    })
    @ApiResponse({
        status: 404,
        description: "Não foi possivel cadastrar o objeto"
    })
    adicionar(@Body() createObjetoDto: CreateObjetoDto){
        return this.objetoService.adicionar(createObjetoDto)
    }



    @Get()
    @ApiOperation({
        summary: "Exibir objetos"
    })
    @ApiResponse({
        status: 201,
        description: "Objetos exibidos com sucesso"
    })
    @ApiResponse({
        status: 404,
        description: "Não foi possivel exibir os objetos"
    })
    exibir(){
        return this.objetoService.exibir()
    }


    @Get(':id')
    @ApiOperation({
        summary: "Exibir objetos por id"
    })
    @ApiResponse({
        status: 201,
        description: "Objetos exibidos por id com sucesso"
    })
    @ApiResponse({
        status: 404,
        description: "Não foi possivel exibir os objetos por id"
    })
    buscarPorID(@Param('id', ParseIntPipe) id: number){
        return this.objetoService.buscarPorId(id)
    }
    @Put(':id')
    @ApiOperation({
        summary: "Atualizar objetos por id"
    })
    @ApiResponse({
        status: 201,
        description: "Objeto atualizado por id com sucesso"
    })
    @ApiResponse({
        status: 404,
        description: "Não foi possivel atualizar o objeto por id"
    })
    atualizar(@Param('id', ParseIntPipe) id: number, @Body() updateObjetoDto: UpdateObjetoDto){
        return this.objetoService.atualizar(id, updateObjetoDto)
    }
    @Delete(':id')

    @ApiOperation({
        summary: "Deletar objetos por id"
    })
    @ApiResponse({
        status: 201,
        description: "Objeto deletado por id com sucesso"
    })
    @ApiResponse({
        status: 404,
        description: "Não foi possivel deletado o objeto por id"
    })
    deletar(@Param('id', ParseIntPipe) id:number){
        return this.objetoService.deletar(id)
    }
}
