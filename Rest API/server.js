const express = require('express'); //import dependency
const { Restaurant } = require('./restaurant'); //import dependency
const { sequelize } = require('./sequelize_index');


//create a web server
const app = express();
//specify thr port on which the web server will run 
const port = 3002;

//server us static content e/g web pages from the / public directory
app.use(express.static('public'));

//endpoint which returns the date when user navigates to http://localhost:3000/flipcoin
// //app.get("/flipcoin", (request, response) => {
//     const randomseq = math.floor(math.random()*2);
//     if (random === 1){
//         response.send("Heads");
//       } else {
//         response.send('"Tails");
//     }
// });
app.get('/restaurants', async (req, res) => {
    const restaurants = await Restaurant.findAll() //requesting all rows of data from restaurant database and assign it to restaurants variable
    res.send(restaurants)
})
// start the web server listening 

app.post('/restaurants', async (req, res) => {
    // const restaurants = await Restaurant.findAll() //pushing all rows of data from restaurant database and assign it to restaurants variable
    // req.send(restaurants)
})
/**
 * Synchronize all models with db
 */
async function start() {
    await sequelize.sync({
        logging: false, // don't log everything
        // force: true, // drop tables each time
    });
}

// run start and log any errors
start()
    .then(() => console.log('Sequelize connected'))
    .catch((e) => console.log(`Caught error: ${e}`));


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
