import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

// Utilizando o Active Record 

// @Entity('users')
// export class User extends BaseEntity {
//     @PrimaryGeneratedColumn()
//     id!: number

//     @Column({ nullable: true })
//     name!: string

//     @Column({ unique: true })
//     email!: string

//     @Column()
//     password!: string
// }


// Utilizando o Data Mapper - repository pattern

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ nullable: true })
    name!: string

    @Column({ unique: true })
    email!: string

    @Column()
    password!: string
}