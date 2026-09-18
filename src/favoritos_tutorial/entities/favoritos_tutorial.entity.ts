import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../../usuario/usuario.entity.js";
import { Tutorial } from "../../tutorial/entities/tutorial.entity.js";

@Entity('favoritos_tutorial')
export class FavoritosTutorial {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuario_id: number
    @ManyToOne(() => Usuario)
    @JoinColumn({name: "usuario_id"})
    usuario : Usuario;

    @Column()
    tutorial_id: number;
    @ManyToOne(() => Tutorial)
    @JoinColumn({name: 'tutorial_id'})
    tutorial : Tutorial;
}
