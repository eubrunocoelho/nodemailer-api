"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const validationMiddleware_1 = __importDefault(require("./Middlewares/validationMiddleware"));
const express_validator_1 = require("express-validator");
const Mail_1 = __importDefault(require("./Services/Mail"));
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.express.use((0, cors_1.default)());
        this.express.use(express_1.default.json());
        this.routes();
    }
    routes() {
        this.express.route('/send').post(validationMiddleware_1.default, (req, res) => {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ error: 'Internal error in request.' });
            }
            const { name, phone, email, subject, message } = req.body;
            const mailInstance = new Mail_1.default(name, phone, email, subject, message);
            mailInstance.sendMail()
                .then((result) => {
                res.status(200).json({ status: 'Your email has been sent successfully.' });
            })
                .catch((error) => {
                res.status(500).json({ error });
            });
        });
    }
}
exports.default = new App;
