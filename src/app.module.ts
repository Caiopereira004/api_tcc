import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsuariosModule } from './usuario/usuario.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModule } from './produto/produto.module.js';
import { TutorialModule } from './tutorial/tutorial.module.js';
import { FavoritosTutorialModule } from './favoritos_tutorial/favoritos_tutorial.module.js';
import { CategoriaProdutoModule } from './categoria_produto/categoria_produto.module.js';
import { CategoriaTutorialModule } from './categoria_tutorial/categoria_tutorial.module.js';
import { CarrinhoModule } from './carrinho/carrinho.module.js';
import { PedidoModule } from './pedido/pedido.module.js';
import { PedidoItemModule } from './pedido_item/pedido_item.module.js';
import { CarrinhoItemModule } from './carrinho_item/carrinho_item.module.js';
import { CartaoModule } from './cartao/cartao.module.js';


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

  CategoriaProdutoModule,

  CategoriaTutorialModule,

  CarrinhoModule,

  PedidoModule,

  PedidoItemModule,

  CarrinhoItemModule,

  CartaoModule,
],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
