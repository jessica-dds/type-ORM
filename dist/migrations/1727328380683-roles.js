"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles1727328380683 = void 0;
class Roles1727328380683 {
    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: 'roles',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true,
                },
                {
                    name: 'role',
                    type: 'text',
                },
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('roles');
    }
}
exports.Roles1727328380683 = Roles1727328380683;
