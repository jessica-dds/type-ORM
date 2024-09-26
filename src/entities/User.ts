import { BaseEntity, Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Address } from './Adress'
import { Role } from './Role'

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
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number | undefined

    @Column({ nullable: true })
    name: string | undefined

    @Column({ unique: true })
    email: string | undefined

    @Column()
    password: string | undefined

    // @OneToOne(() => Address, (address) => address.user)
    //address: Address | undefined
    @OneToMany(() => Address, (address) => address.user)
    addresses: Address[] | undefined

    @ManyToMany(() => Role, role => role.users)
    roles!: Role[]


    // utilizando o Active record para métodos personalizados
    static async findByName(name: string) {
        return this.find({ where: { name } })
    }
}
