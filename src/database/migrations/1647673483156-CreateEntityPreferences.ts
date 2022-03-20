import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEntityPreferences1647673483156
  implements MigrationInterface {
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
            isNullable: false,
          },
          {
            name: "leader2",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "leader3",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "treasurer",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "clerk",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "president_work",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "president_philanthropy",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "current",
            type: "boolean",
            isNullable: false,
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
        foreignKeys: [
          {
            name: "FKMemberLeader1",
            columnNames: ["leader1"],
            referencedTableName: "member",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKMemberLeader2",
            columnNames: ["leader2"],
            referencedTableName: "member",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKMemberLeader3",
            columnNames: ["leader3"],
            referencedTableName: "member",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKMemberTreasurer",
            columnNames: ["treasurer"],
            referencedTableName: "member",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKMemberClerk",
            columnNames: ["clerk"],
            referencedTableName: "member",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKMemberPresident_work",
            columnNames: ["president_work"],
            referencedTableName: "member",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKMemberPresident_philanthropy",
            columnNames: ["president_philanthropy"],
            referencedTableName: "member",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("entity_preferences");
  }
}
