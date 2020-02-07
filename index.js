const dotenv = require('dotenv'); //imports dotenv
dotenv.config(); //runs the function to connect the env to the index.js
const express =require('express'); //imports express
const massive = require('massive'); //import massive 
const controller = require('./controller'); //imports controller functions
const app = express(); //sets up our express server
const {CONNECTION_STRING} = process.env;


app.use(express.json()); //creates req.body

massive(CONNECTION_STRING)  //connects to the heroku db 
.then(db => {
app.set("db", db); //saves the db argument in App under the name 'db'
console.log('DB Connected:)'); //lets you know the server started
})
.catch(() => {
    console.log('Error happend while trying to connect to the DB'); //lets you know there was an error connecting to the db.
});

app.post('/api/dogs', controller.addDog); //controller.addDogs connects to function in controller
app.get('/api/dogs', controller.getDogs);

app.listen(process.env.SERVER_PORT, () => console.log('Bat is back')); //starts out server and provides feedback when it starts successfully 