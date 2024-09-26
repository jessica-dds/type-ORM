"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoles1727328962368 = void 0;
const typeorm_1 = require("typeorm");
class UserRoles1727328962368 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'user_role',
            columns: [
                {
                    name: 'user_id',
                    type: 'integer'
                },
                {
                    name: 'role_id',
                    type: 'integer'
                },
            ],
        }));
        await queryRunner.createForeignKeys('user_role', [
            new typeorm_1.TableForeignKey({
                columnNames: ['user_id'],
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
            }),
            new typeorm_1.TableForeignKey({
                columnNames: ['role_id'],
                referencedTableName: 'roles',
                referencedColumnNames: ['id'],
            }),
        ]);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('user_role');
    }
}
exports.UserRoles1727328962368 = UserRoles1727328962368;
