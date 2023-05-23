import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Contact } from "./contacts.entities";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @CreateDateColumn({type: 'date'})
    createdAt: string;

    @UpdateDateColumn({ type: 'date' })
	updatedAt: string;

	@DeleteDateColumn({ type: 'date' })
	deletedAt: string;

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts: Contact[]

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const passwordIsEncrypted = getRounds(this.password)
        if (!passwordIsEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }
}
