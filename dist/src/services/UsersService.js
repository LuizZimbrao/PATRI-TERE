"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UsersRepository_1 = __importDefault(require("../repositories/UsersRepository"));
class UsersService {
    authenticate(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = (0, typeorm_1.getCustomRepository)(UsersRepository_1.default);
            const user = yield usersRepository.findOne({ where: { email } });
            if (!user) {
                return { error: 'Usuário não encontrado' };
            }
            const isValidPassword = yield bcryptjs_1.default.compare(password, user.password);
            if (!isValidPassword) {
                return { error: 'Senha inválida' };
            }
            dotenv_1.default.config();
            const secret = JSON.stringify(process.env.SECRETSTRING);
            const token = jsonwebtoken_1.default.sign({ id: user.id }, secret, { expiresIn: '1D' });
            const filteredUserData = user;
            delete filteredUserData.password;
            return { user, token };
        });
    }
    create({ email, password, name }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email) {
                return { error: 'O campo e-mail é obrigatório' };
            }
            if (!password) {
                return { error: 'O campo senha é obrigatória' };
            }
            if (!name) {
                return { error: 'O campo nome é obrigatório' };
            }
            const usersRepository = (0, typeorm_1.getCustomRepository)(UsersRepository_1.default);
            const userExists = yield usersRepository.findOne({ where: { email } });
            if (userExists) {
                return { error: 'E-mail já está em uso' };
            }
            const user = usersRepository.create({
                email,
                password,
                name,
            });
            yield usersRepository.save(user);
            return user;
        });
    }
}
exports.default = new UsersService();
