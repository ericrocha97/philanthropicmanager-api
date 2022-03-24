import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterMemberAddActive1648098136993 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "member",
      new TableColumn({
        name: "active",
        type: "boolean",
        isNullable: false,
        default: true
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("member", "active");
  }
}
