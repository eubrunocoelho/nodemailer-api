import express, { Express, Request, Response } from 'express';
import validationMiddleware from './Middlewares/validationMiddleware';
import { validationResult } from 'express-validator';
import Mail from './Services/Mail';

class App {
    public express: Express;

    constructor() {
        this.express = express();
        this.express.use(express.json());
        this.routes();
    }

    routes(): void {
        this.express.route('/send').post(
            validationMiddleware,
            (req: Request, res: Response) => {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    return res.status(422).json({ error: 'Internal error in request.' });
                }

                const { name, phone, email, subject, message } = req.body;

                const mailInstance = new Mail(name, phone, email, subject, message);
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

export default new App;