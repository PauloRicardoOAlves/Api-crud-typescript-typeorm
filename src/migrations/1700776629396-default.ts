import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1700776629396 implements MigrationInterface {
    name = 'Default1700776629396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "cpf" integer NOT NULL, "adress" text, "age" integer, "sex" text, "profession" text, CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
