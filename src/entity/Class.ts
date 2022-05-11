import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm"
import { Category } from "./Category"
import { Tag } from "./Tag"

@Entity("classes")
export class Class {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column({
        nullable: true,
    })
    category_id: number

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category: Category

    @ManyToMany(() => Tag, {
        cascade: true
    })
    @JoinTable()
    tags: Tag[]
}
