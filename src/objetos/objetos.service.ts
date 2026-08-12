import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { ResultSetHeader } from 'mysql2';
import { CreateObjetoDto } from './dto/create-objeto.dto';
@Injectable()
export class ObjetosService {
    constructor (private readonly databaseService: DatabaseService){}

    async adicionar (createObjetoDto : CreateObjetoDto){
        const {nome, descricao, local_encontrado, data, status_objeto} = createObjetoDto

        const sql = 
        `
        INSERT INTO objetos
        (nome, descricao, local_encontrado, data, status_objeto)
        VALUES(?,?,?)
        `
        const resultado = await this.databaseService.query(sql, [nome, descricao, local_encontrado, data, status_objeto]) as ResultSetHeader

        return{
            mensagem: 'Objeto cadastrado com sucesso',
            objeto:{
                id: resultado.insertId,
                nome,
                descricao,
                local_encontrado,
                data,
                status_objeto
            }
        }
    }

}
