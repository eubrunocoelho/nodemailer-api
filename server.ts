import App from './src/App';
import dotenv from 'dotenv';

dotenv.config();

const PORT: number = parseInt(process.env.SERVER_PORT) || 3030;

App.express.listen(PORT, () => console.log(`Server listening on port ${PORT}`));