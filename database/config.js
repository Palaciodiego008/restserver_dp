import mongoose from "mongoose"


const dbConnection = async () => {
    const URI = process.env.MONGODB_CNN;
    try {
       await mongoose.connect (URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('Database online')

    } catch (error) {
        console.log(error);
        throw new Error('Error to start the database')
    }
}


export {
    dbConnection
}