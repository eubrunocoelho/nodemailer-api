import nodemailer from 'nodemailer';
import { MAIL_HOST, MAIL_PORT, MAIL_USERNAME, MAIL_PASSWORD, MAIL_FROM, MAIL_TO } from '../../config/mail';

class Mail {
    public constructor(
        public name?: string,
        public phone?: string,
        public email?: string,
        public subject?: string,
        public message?: string
    ) { }

    private emailBody() {
        return `
            Nome: ${this.name}
            Telefone/WhatsApp: ${this.phone}
            E-mail: ${this.email}
            Assunto: ${this.subject}
            Mensagem: ${this.message}
        `;
    }

    public async sendMail() {
        let mailOptions = {
            from: MAIL_FROM,
            to: MAIL_TO,
            subject: this.subject,
            text: this.emailBody()
        };

        const transporter = nodemailer.createTransport({
            host: MAIL_HOST,
            port: MAIL_PORT,
            auth: {
                user: MAIL_USERNAME,
                pass: MAIL_PASSWORD
            }
        });

        await transporter.sendMail(mailOptions, (error) => {
            // tratar
            if (!error) return 'success';
            else return 'error';
        });
    }
}

export default Mail;