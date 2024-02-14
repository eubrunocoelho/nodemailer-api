"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validationMiddleware = [
    (0, express_validator_1.body)('name').notEmpty().isLength({ min: 3, max: 128 }),
    (0, express_validator_1.body)('phone').notEmpty().matches(/^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/),
    (0, express_validator_1.body)('email').notEmpty().isLength({ max: 128 }).isEmail(),
    (0, express_validator_1.body)('subject').notEmpty().isLength({ min: 6, max: 128 }),
    (0, express_validator_1.body)('message').notEmpty().isLength({ min: 20, max: 1200 })
];
exports.default = validationMiddleware;
