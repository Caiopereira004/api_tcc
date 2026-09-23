import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { Usuario } from "../../usuario/usuario.entity.js";
import { Produto } from "../../produto/entities/produto.entity.js";

@Entity('pedido')
export class Pedido {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario_id: number;
    @ManyToOne(() => Usuario)
    @JoinColumn({name: 'id'})
    usuario: Usuario

    @Column()
    produto_id: number;
    @ManyToOne(() => Produto)
    @JoinColumn({name: 'id'})
    produto: Produto
    
}
