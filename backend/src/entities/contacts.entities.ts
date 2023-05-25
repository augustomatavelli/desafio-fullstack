
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./users.entities";

@Entity('contacts')
export class Contact {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    phone: string;

    @CreateDateColumn({type: 'date'})
    createdAt: string;

    @UpdateDateColumn({ type: 'date' })
	updatedAt: string;

	@DeleteDateColumn({ type: 'date' })
	deletedAt: string;

    @ManyToOne(() => User, (user) => user.contacts)
    user: User

}
