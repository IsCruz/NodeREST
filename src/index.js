const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const routes = require('./routes/index.js');
const routest = require('./routes/task.js');


//setting port

app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');


//middleware
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(cors());
//routes
app.use(routes);
app.use('/api', routest);

//static files
//app.use(express.static(path.join(__dirname, 'dist')));



app.listen(app.get('port'), () => {
  console.log('server on port 3000');
});
