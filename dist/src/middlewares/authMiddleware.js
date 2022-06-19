"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiddleware(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.sendStatus(401);
    }
    const token = authorization.replace('Bearer', '').trim();
    try {
        dotenv_1.default.config();
        const secret = JSON.stringify(process.env.SECRETSTRING);
        jsonwebtoken_1.default.verify(token, secret);
        return next();
    }
    catch (error) {
        return res.sendStatus(401);
    }
}
exports.default = authMiddleware;
