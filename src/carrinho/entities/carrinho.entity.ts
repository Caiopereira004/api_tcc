import { Entity,PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { Usuario } from "../../usuario/usuario.entity.js";

@Entity('carrinho')
export class Carrinho {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario_id: number;
    @ManyToOne(() => Usuario)
    @JoinColumn({name: 'id'})
    usuario: Usuario

    @Column()
    status: string;

    @Column()
    criado_em: Date;

    @Column()
    atualizado_em:Date;
}
