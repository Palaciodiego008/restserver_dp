
import express from 'express';
import cors from 'cors';
import userRoutes from '../routes/user.js';
import { dbConnection } from '../database/config.js';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3001;

        // Connect to the database
        this.connectDB();


        // Middlewares
        this.middlewares();

        // Routes
        this.routes();

    }

    routes() {
        //importing without require because of the type module in package.json
        this.app.use('/api/users', userRoutes);

    }


    async connectDB() {
        await dbConnection();
    } 

    start() {
        // Cors
        this.app.listen(this.port, () => {
            console.log('Server is running on port:', this.port);
        })
    }


    middlewares() {
        // Public directory
        this.app.use(cors());

        // Parse and read body
        this.app.use(express.json());

        this.app.use(express.static('public'));


    }

}

export default Server