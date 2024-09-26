"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const Adress_1 = require("./Adress");
const Role_1 = require("./Role");
// Utilizando o Active Record 
// @Entity('users')
// export class User extends BaseEntity {
//     @PrimaryGeneratedColumn()
//     id!: number
//     @Column({ nullable: true })
//     name!: string
//     @Column({ unique: true })
//     email!: string
//     @Column()
//     password!: string
// }
// Utilizando o Data Mapper - repository pattern
let User = class User extends typeorm_1.BaseEntity {
    // utilizando o Active record para métodos personalizados
    static async findByName(name) {
        return this.find({ where: { name } });
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", Object)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Object)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Adress_1.Address, (address) => address.user),
    __metadata("design:type", Object)
], User.prototype, "addresses", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Role_1.Role, role => role.users),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
