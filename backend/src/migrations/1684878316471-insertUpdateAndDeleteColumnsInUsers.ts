import { MigrationInterface, QueryRunner } from "typeorm";

export class insertUpdateAndDeleteColumnsInUsers1684878316471 implements MigrationInterface {
    name = 'insertUpdateAndDeleteColumnsInUsers1684878316471'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
    }

}
