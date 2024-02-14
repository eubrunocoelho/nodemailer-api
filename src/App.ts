import express, { Express, Request, Response } from 'express';
import validationMiddleware from './Middlewares/validationMiddleware';
import { validationResult } from 'express-validator';

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

                res.send('Olá, mundo!');
            });
    }
}

export default new App;