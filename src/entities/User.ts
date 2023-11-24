import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('Users')
export class user {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    name: string

    @Column({ type: 'text' })
    email: string

    @Column({ type: 'text' })
    cpf: string

    @Column({ type: 'text', nullable: true })
    adress: string

    @Column({ type: 'integer', nullable: true })
    age: number

    @Column({ type: 'text', nullable: true })
    sex: string

    @Column({ type: 'text', nullable: true })
    profession: string
}