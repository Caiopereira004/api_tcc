import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service.js';
import { Usuario } from './usuario.entity.js';

@Controller('usuario')
export class UsuarioController {
    constructor(
        private readonly usuarioService: UsuarioService,
    ){}

    @Get()
        buscarTodos(): Promise<Usuario[]> {
            return this.usuarioService.findAll();
        }
        
    @Post()
    criar(@Body() dados: Partial<Usuario>): Promise<Usuario> {
        return this.usuarioService.create(dados);
        }
}
