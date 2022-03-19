import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEntityPreferences1647673483156
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "entity_preferences",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "administration",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "leader1",
            type: "uuid",
          },
          {
            name: "leader2",
            type: "uuid",
          },
          {
            name: "leader3",
            type: "uuid",
          },
          {
            name: "treasurer",
            type: "uuid",
          },
          {
            name: "clerk",
            type: "uuid",
          },
          {
            name: "president_work",
            type: "uuid",
          },
          {
            name: "president_philanthropy",
            type: "uuid",
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

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("entity_preferences");
  }
}
