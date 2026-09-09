import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity.js';
import { UsuarioService } from './usuario.service.js';
import { UsuarioController } from './usuario.controller.js';

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [UsuarioService],
    controllers: [UsuarioController],
})
export class UsuariosModule {}
