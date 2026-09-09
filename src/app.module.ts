import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsuariosModule } from './usuario/usuario.module.js';
import { UsuarioService } from './usuario/usuario.service.js';

@Module({
  imports: [UsuariosModule],
  controllers: [AppController],
  providers: [AppService, UsuarioService],
})
export class AppModule {}
