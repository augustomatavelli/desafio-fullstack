import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const passwordIsEncrypted = getRounds(this.password)
        if (!passwordIsEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }
}
