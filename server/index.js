const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const questionRoutes = require('./routes/questionRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(() => console.log('\n\"Connected to MongoDB!\"\n'))
.catch(err => console.log("\"MongoDB Connection Error!\"", err));

// "/api/questions" is a logical path
app.use("/api/questions", questionRoutes);

app.listen(3001, () => {
    console.log("\n\"Server is running on http://127.0.0.1:3001/\"");
});