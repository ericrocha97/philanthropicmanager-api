import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCalendar1642821111355 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "calendar",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "title",
            type: "varchar",
            isNullable: false
          },
          {
            name: "extra",
            type: "varchar",
            isNullable: false
          },
          {
            name: "date",
            type: "date",
            isNullable: false
          },
          {
            name: "description",
            type: "varchar",
            isNullable: false
          },
          {
            name: "type",
            type: "varchar",
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
    await queryRunner.dropTable("calendar");
  }
}
