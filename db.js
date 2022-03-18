const mongoose = require("mongoose")
module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://FileUploads:FileUploads123@cluster0.3tfnx.mongodb.net/FileUploads123?retryWrites=true&w=majority"
        )
};