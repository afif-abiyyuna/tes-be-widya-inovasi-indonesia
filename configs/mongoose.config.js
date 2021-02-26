const mongoose = require ("mongoose");
const dbConfig = {HOST: "localhost",PORT: 27017, DB: "DB_Tes_Widya_Inovasi_Indonesia"}


module.exports = () => {
    mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Successfully connect to MongoDB.");
    })
    .catch(err=>{
        console.error("Connection error", err);
        process.exit();
    });
}