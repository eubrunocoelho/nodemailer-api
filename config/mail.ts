import dotenv from 'dotenv';

dotenv.config();

const MAIL_HOST: string = process.env.MAIL_HOST;
const MAIL_PORT: number = parseInt(process.env.MAIL_PORT);
const MAIL_USERNAME: string = process.env.MAIL_USERNAME;
const MAIL_PASSWORD: string = process.env.MAIL_PASSWORD;
const MAIL_FROM: string = process.env.MAIL_FROM;
const MAIL_TO: string = process.env.MAIL_TO;

export { MAIL_HOST, MAIL_PORT, MAIL_USERNAME, MAIL_PASSWORD, MAIL_FROM, MAIL_TO };