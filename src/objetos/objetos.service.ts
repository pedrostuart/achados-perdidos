import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { CreateObjetoDto } from './dto/create-objeto.dto';
import { UpdateObjetoDto } from './dto/update-objeto.dto';
@Injectable()
export class ObjetosService {
    constructor (private readonly databaseService: DatabaseService){}

    async adicionar (createObjetoDto : CreateObjetoDto){
        const {nome, descricao, local_encontrado, data_encontrado, status_objeto} = createObjetoDto

        const sql = 
        `
        INSERT INTO objeto
        (nome, descricao, local_encontrado, data_encontrado, status_objeto)
        VALUES(?,?,?,?,?)
        `
        const resultado = await this.databaseService.query(sql, [nome, descricao, local_encontrado, data_encontrado, status_objeto]) as ResultSetHeader

        return{
            mensagem: 'Objeto cadastrado com sucesso',
            objeto:{
                id: resultado.insertId,
                nome,
                descricao,
                local_encontrado,
                data_encontrado,
                status_objeto
            }
        }
    }

    async exibir(){
        const resultado = await this.databaseService.query('SELECT * FROM objeto') 
        return resultado
    }
    async buscarPorId(id:number){
        const resultado = await this.databaseService.query('SELECT * FROM objeto WHERE id = ?', [id]) as RowDataPacket[]

        if(resultado.length === 0){
            throw new NotFoundException('Id não encontrado')
        }

        return resultado[0]
    }

    async atualizar(id:number, createObjetoDto: UpdateObjetoDto) {
        const {nome, descricao, local_encontrado, data_encontrado, status_objeto} = createObjetoDto

        await this.buscarPorId(id)

        const resultado = await this.databaseService.query('UPDATE objeto SET nome = ?, descricao = ?, local_encontrado = ?, data_encontrado = ?, status_objeto = ? WHERE id = ?',[nome, descricao, local_encontrado, data_encontrado, status_objeto, id])

        return{
            mensagem: 'Atualizado com sucesso',
            objeto:{
                id: id,
                nome: nome,
                descricao: descricao,
                local_encontrado: local_encontrado,
                data_encontrado: data_encontrado,
                status_objeto: status_objeto
            }
        }
    }

    async deletar(id:number){
        await this.buscarPorId(id)

        const resultado = await this.databaseService.query('DELETE FROM objeto WHERE id = ?', [id])

        return {
            mensagem: 'Deletado com sucesso'
        }
    }
}
