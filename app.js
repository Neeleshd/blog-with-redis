const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
require('./database/dbConfig');
require("./routes/index")(app);

const port = 3000;
app.listen(port, () => console.log(`server started on port`, port))