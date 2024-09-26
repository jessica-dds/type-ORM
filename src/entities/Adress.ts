import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity('addresses')
export class Address {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    zipcode!: string

    @Column({ nullable: true })
    street!: string


    @Column({ nullable: true })
    number!: string

    // @OneToOne(() => User, (user) => user.address)
    @ManyToOne(() => User, user => user.addresses)
    @JoinColumn({ name: 'user_id' })
    user!: User
}