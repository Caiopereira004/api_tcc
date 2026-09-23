import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { Usuario } from "../../usuario/usuario.entity.js";


@Entity('cartao')
export class Cartao {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario_id: number;
    @ManyToOne(() => Usuario)
    @JoinColumn({name: 'id'})
    usuario: Usuario

    @Column()
    ultimos_digitos: string;

    @Column()
    nome_titular: string;

    @Column()
    validade: string;

    @Column()
    gateway_token: string;

    @Column()
    bandeira: string;
}
