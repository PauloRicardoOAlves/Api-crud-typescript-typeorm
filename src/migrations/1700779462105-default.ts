import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1700779462105 implements MigrationInterface {
    name = 'Default1700779462105'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "cpf" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "cpf" integer NOT NULL`);
    }

}
