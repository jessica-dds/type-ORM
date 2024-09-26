"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address1727325153848 = void 0;
const typeorm_1 = require("typeorm");
class Address1727325153848 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
        await queryRunner.createForeignKey('addresses', new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedTableName: 'users',
            referencedColumnNames: ['id']
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('addresses');
    }
}
exports.Address1727325153848 = Address1727325153848;
