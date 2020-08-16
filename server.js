const express = require('express');
const bodyParser = require("body-parser");
const app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



require("./routes/task.routes")(app);

app.listen(3000, function() {
    console.log('listening on 3000')
  })

//   app.get('/', function(req, res) {
//     res.send("tasks")
//   })