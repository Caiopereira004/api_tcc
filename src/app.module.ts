import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsuariosModule } from './usuario/usuario.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModule } from './produto/produto.module.js';
import { TutorialModule } from './tutorial/tutorial.module.js';
import { FavoritosTutorialModule } from './favoritos_tutorial/favoritos_tutorial.module.js';


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

  TutorialModule,

  FavoritosTutorialModule,
],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
