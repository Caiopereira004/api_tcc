import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity.js';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
    ){}

    findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find();
    }

    create(dados: Partial<Usuario>): Promise<Usuario> {
        const novoUsuario = this.usuarioRepository.create(dados);
        return this.usuarioRepository.save(novoUsuario);
    }
}
