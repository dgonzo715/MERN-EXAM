const mongoose = require('mongoose');
const db_name = "petdb";

mongoose.connect("mongodb://localhost/" + db_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established a connection to the " + db_name + " database"))
  .catch((err) => console.log("Fail to connect to the database", + db_name + ": " + err));