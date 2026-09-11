import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsuariosModule } from './usuario/usuario.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModule } from './produto/produto.module.js';


@Module({
  imports: [
  TypeOrmModule.forRoot ({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_app_becare',
    autoLoadEntities: true,
    synchronize: false,
  }),

  UsuariosModule,

  ProdutoModule,
],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
