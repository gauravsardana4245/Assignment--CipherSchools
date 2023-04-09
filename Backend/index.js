const express = require('express');
const app = express();
const port = 6000;
var cors = require('cors')
const connectToMongo = require("./db.js");
var multer = require('multer');

app.use(express.json());

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({ storage: storage });

// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', "https://inotebook-gaurav.netlify.app/");
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.append('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

app.use(cors())
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/followers', require('./routes/followers.js'))
app.use('/api/interests', require('./routes/interests.js'))
app.listen(port, () => {
    console.log(`Example app listening at port ${port}`);
})
connectToMongo();