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
const nodemailer_1 = __importDefault(require("nodemailer"));
const mail_1 = require("../../config/mail");
class Mail {
    constructor(name, phone, email, subject, message) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
    emailBody() {
        return `
            Nome: ${this.name}
            Telefone/WhatsApp: ${this.phone}
            E-mail: ${this.email}
            Assunto: ${this.subject}
            Mensagem: ${this.message}
        `;
    }
    sendMail() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let mailOptions = {
                    from: mail_1.MAIL_FROM,
                    to: mail_1.MAIL_TO,
                    subject: this.subject,
                    text: this.emailBody()
                };
                const transporter = nodemailer_1.default.createTransport({
                    host: mail_1.MAIL_HOST,
                    port: mail_1.MAIL_PORT,
                    auth: {
                        user: mail_1.MAIL_USERNAME,
                        pass: mail_1.MAIL_PASSWORD
                    }
                });
                transporter.sendMail(mailOptions, (error) => {
                    return (!error) ? resolve(true) : reject(false);
                });
            });
        });
    }
}
exports.default = Mail;
