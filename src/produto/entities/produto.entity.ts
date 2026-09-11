import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('produto'){
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column('decimal', {precision: 10, scale: 2})
    valor: number;

    @Column({nullable: true})
    descricao: string;

    @Column()
    categoria_produto_id: number;

    @Column()
    marca: string;

    @Column()
    quantidade: number;
}
}