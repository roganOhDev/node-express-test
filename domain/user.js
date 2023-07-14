import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
    constructor(
        firstName: string,
        lastName: string,
        age: string) {
    }

    @PrimaryGeneratedColumn('uuid')
    private uuid: {
        type: string,
        required: true,
        unique: true
    }

    @Column()
    private firstName: {
        type: string,
        required: true
    }

    @Column()
    private lastName: {
        type: string,
        required: true
    }

    @Column()
    private age: {
        type: string,
        required: true
    }

    getId(): number {
        return this.id
    }

    getFirstName(): string {
        return this.firstName
    }

    getLastName(): string {
        return this.lastName
    }

    getAge(): string {
        return this.age
    }
}