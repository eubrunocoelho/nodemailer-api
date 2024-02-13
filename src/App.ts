import express, { Express, Request, Response } from 'express';

class App {
    public express: Express;

    constructor() {
        this.express = express();
        this.express.use(express.json());
        this.routes();
    }

    routes(): void {
        this.express.route('/').get((req: Request, res: Response) => {
            res.send('Olá, mundo!');
        });
    }
}

export default new App;