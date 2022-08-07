import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePatrimonyTable1659894394957 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "patrimony",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "neighborhood",
            type: "varchar",
          },
          {
            name: "street",
            type: "varchar",
          },
          {
            name: "number",
            type: "varchar",
          },
          {
            name: "coordinates",
            type: "varchar",
          },
          {
            name: "owner",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "tumbling_date",
            type: "",
          },
          {
            name: "tumbling_number",
            type: "varchar",
          },
          {
            name: "patrimony_type",
            type: "varchar",
          },
          {
            name: "conservation",
            type: "",
            isNullable: true,
          },
          {
            name: "security_condition",
            type: "",
            isNullable: true,
          },
          {
            name: "historical_data",
            type: "",
            isNullable: true,
          },
          {
            name: "images",
            type: "",
            isNullable: true,
          },
          {
            name: "details",
            type: "",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
