import { MigrationInterface, QueryRunner } from "typeorm";

export class deletePasswordFromContact1684956218823 implements MigrationInterface {
    name = 'deletePasswordFromContact1684956218823'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "password" character varying NOT NULL`);
    }

}
