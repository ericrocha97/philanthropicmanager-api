import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMember1643072877675 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "member",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false
          },
          {
            name: "CID",
            type: "varchar",
            isNullable: false
          },
          {
            name: "address",
            type: "varchar"
          },
          {
            name: "CEP",
            type: "varchar"
          },
          {
            name: "phone",
            type: "varchar"
          },
          {
            name: "birthday",
            type: "date"
          },
          {
            name: "level",
            type: "int",
            isNullable: false
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()"
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("member");
  }
}
