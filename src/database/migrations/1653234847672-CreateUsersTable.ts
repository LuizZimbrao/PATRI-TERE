import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1653234847672 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "users",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true,
        },
        {
          name: "email",
          type: "varchar",
          isUnique: true,
        },
        {
          name: "password",
          type: "varchar",
        },
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "admin",
          type: "boolean",
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }

}
