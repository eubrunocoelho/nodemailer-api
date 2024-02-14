import express, { Express, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

class App {
    public express: Express;

    constructor() {
        this.express = express();
        this.express.use(express.json());
        this.routes();
    }

    routes(): void {
        this.express.route('/send').post([
            body('name').notEmpty().isLength({ min: 3, max: 128 }),
            body('phone').notEmpty().matches(/^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/),
            body('email').notEmpty().isLength({ max: 128 }).isEmail(),
            body('subject').notEmpty().isLength({ min: 8, max: 128 }),
            body('message').notEmpty().isLength({ min: 20, max: 1200 })
        ], (req: Request, res: Response) => {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.json({ errors: errors.array() });
            }

            res.send('Olá, mundo!');
        });
    }
}

export default new App;