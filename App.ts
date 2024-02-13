import express, { Express, Request, Response } from 'express';

class App {
    public app: Express;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.routes();
    }

    routes() {
        this.app.route('/').get((req: Request, res: Response) => { 
            res.send('Olá, mundo!');
        });
    }
}

export default new App;