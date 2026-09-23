import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('categoria_tutorial')
export class CategoriaTutorial {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;
}
