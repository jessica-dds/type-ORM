import { table } from "console";
import { Column, MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Address1727325153848 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'addresses',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true
                },
                {
                    name: 'user_id',
                    type: 'integer',
                },
                {
                    name: 'zipcode',
                    type: 'text',
                },
                {
                    name: 'street',
                    type: 'text',
                    isNullable: true
                },
                {
                    name: 'number',
                    type: 'text',
                    isNullable: true
                },
            ],
        })
        )
        await queryRunner.createForeignKey('addresses', new TableForeignKey({
            columnNames: ['user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id']
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('addresses')
    }
}
