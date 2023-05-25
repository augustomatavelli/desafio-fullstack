import { MigrationInterface, QueryRunner } from "typeorm";

export class insertUpdateAndDeleteColumnInContactEntity1685031020934 implements MigrationInterface {
    name = 'insertUpdateAndDeleteColumnInContactEntity1685031020934'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "deletedAt" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "updatedAt"`);
    }

}
