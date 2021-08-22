const express = require("express");
const app = express();
const cors = require('cors');

require('./config/mongoose.config');

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true}));


const AllpetRoutes = require('./routes/pet.routes');
AllpetRoutes(app);


app.listen(8000, () => console.log("The server is ready on port 8000"));