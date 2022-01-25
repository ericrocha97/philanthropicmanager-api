import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUserAddAdmin1643076280983 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "user",
      new TableColumn({
        name: "admin",
        type: "boolean",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("user", "admin");
  }
}
