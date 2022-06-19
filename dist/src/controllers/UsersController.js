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
const UsersService_1 = __importDefault(require("../services/UsersService"));
class UsersController {
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, name } = req.body;
            const user = yield UsersService_1.default.create({
                email,
                password,
                name,
            });
            if (!user.id) {
                res.status(400).json(user);
            }
            return res.json(user);
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const login = yield UsersService_1.default.authenticate(email, password);
            if (!login.token) {
                return res.status(401).json(login);
            }
            return res.json(login);
        });
    }
}
exports.default = new UsersController();
