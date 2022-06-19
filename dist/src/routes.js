"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = __importDefault(require("./controllers/UsersController"));
const router = (0, express_1.Router)();
router.post("/create", UsersController_1.default.store);
router.post("/authenticate", UsersController_1.default.login);
exports.default = router;
