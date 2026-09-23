import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { Pedido } from "../../pedido/entities/pedido.entity.js";
import { Decimal128 } from "typeorm/driver/mongodb/bson.typings.js";

@Entity('pedido_item')
export class PedidoItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pedido_id: number;
    @ManyToOne(() => Pedido)
    @JoinColumn({name: 'id'})
    pedido: Pedido

    @Column()
    quantidade: number;

    @Column({
    name: 'preco_unitario',
    type: 'decimal',
    precision: 10,
    scale: 2,
    transformer: {
        to: (value:number) => value,
        from: (value: string) => parseFloat(value),
    }
    })
    
    preco_unitario: number;
}
