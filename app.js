const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));
app.use(express.json);

app.get('/', (req, res) => {
  try {
    console.log('howdy world');
    //res.redirect("/posts");
    res.send('howdy');
  }
  catch (err){
    console.log(err);
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
