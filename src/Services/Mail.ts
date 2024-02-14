import nodemailer from 'nodemailer';
import Configs from '../../Configs/Configs';

class Mail {
    constructor(
        public name?: string,
        public phone?: string,
        public email?: string,
        public subject?: string,
        public message?: string
    ) { }

    sendMail() {
        let mailOptions = {
            from: Configs.mailFrom,
            to: Configs.mailTo,
            subject: `${this.name} - ${this.subject}`,
            text: `
            Nome: ${this.name}
            Telefone/WhatsApp: ${this.phone}
            E-mail: ${this.email}
            Assunto: ${this.subject}
            Mensagem: ${this.message}
            `
        };

        const transporter = nodemailer.createTransport({
            host: Configs.mailHost,
            port: Configs.mailPort,
            auth: {
                user: Configs.mailUsername,
                pass: Configs.mailPassword
            }
        });

        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                return error;
            } else {
                return 'Success';
            }
        });
    }
}

export default new Mail;