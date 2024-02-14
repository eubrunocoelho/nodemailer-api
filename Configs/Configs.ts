import dotenv from 'dotenv';

dotenv.config();

class Configs {
    public mailHost: string = process.env.MAIL_HOST;
    public mailPort: number = parseInt(process.env.MAIL_PORT);
    public mailUsername: string = process.env.MAIL_USERNAME;
    public mailPassword: string = process.env.MAIL_PASSWORD;
    public mailFrom: string = process.env.MAIL_FROM;
    public mailTo: string = process.env.MAIL_TO;
}

export default new Configs;