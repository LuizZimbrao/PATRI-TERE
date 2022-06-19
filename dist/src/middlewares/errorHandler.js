"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (error, req, res, next) => {
    res.sendStatus(500);
    console.log(error);
    next();
};
