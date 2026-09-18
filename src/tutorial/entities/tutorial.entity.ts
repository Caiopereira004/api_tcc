import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity('tutorial')
export class Tutorial {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    url: string;

    @Column()
    categoria_tutorial_id: number;
    @ManyToOne(() => Tutorial)
    @JoinColumn({name: 'categoria_tutorial_id'})
    tutorial: Tutorial;
}
