import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity.js";
import { Carrinho } from "../../carrinho/entities/carrinho.entity.js";

@Entity('carrinho_item')
export class CarrinhoItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    carrinho_id: number;
    @ManyToOne(() => Carrinho)
    @JoinColumn({name: 'id'})
    carrinho: Carrinho

    @Column()
    produto_id: number;
    @ManyToOne(() => Produto)
    @JoinColumn({name: 'id'})
    produto: Produto

    @Column()
    quantidade: number;

}
