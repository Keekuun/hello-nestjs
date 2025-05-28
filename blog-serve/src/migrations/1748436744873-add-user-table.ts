import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserTable1748436744873 implements MigrationInterface {
    name = 'AddUserTable1748436744873'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createTime" TIMESTAMP NOT NULL DEFAULT now(), "updateTime" TIMESTAMP NOT NULL DEFAULT now(), "isDelete" boolean NOT NULL DEFAULT false, "version" integer, "username" character varying(100) NOT NULL, "password" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "nickname" character varying(100), "avatar" character varying(255), "roles" text, "status" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
