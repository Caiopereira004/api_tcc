import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('categoria_produto')
export class CategoriaProduto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;
}
