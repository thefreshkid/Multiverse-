const express = require('express'); //import dependency
const Handlebars = require('handlebars')
const {engine} = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const { Restaurant } = require('./restaurant'); //import dependency
const { Menu } = require('./menu');
const {MenuItem} = require ('./menuItem');
const { sequelize } = require('./sequelize_index');
const { check, validationResult } = require('express-validator');


//create a web server
const app = express();
//specify thr port on which the web server will run 
const port = 3002;

//setup our templating engine for handlebars 
const handlebars = engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})

//Set Handlebars Middleware
app.engine('handlebars', handlebars)
app.set('view engine', 'handlebars')

// support the parsing of incoming requests with urlencoded payloads (e.g. form POST)
app.use(express.urlencoded({ extended: true }));
// support the parsing of incoming requests with json payloads
app.use(express.json());

//server us static content e/g web pages from the / public directory
app.use(express.static('public'));
//server will look at http body 
app.use(express.json());

// this route returns HTML for a single restaurant
app.get('/restaurants/:id', async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id)
    res.render('restaurant', { restaurant })

    app.listen(port, () => {
        console.log(`Server listening at http://localhost:3002`)
    })
})

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
    res.render("restaurantsview",{restaurants})
})
// start the web server listening 

app.post('/restaurants', async (req, res) => {
    const result = await Restaurant.create(
        req.body
    )
    res.send(result)

})
app.put("/restaurants/:id", async (req, res) => {
    const result = await Restaurant.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.send(result)
})

app.delete("/restaurants/:id",async (req, res) => {
    const result = await Restaurant.destroy({
        where: {
            id: req.params.id
        }
    });
    res.sendStatus(200)
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

app.get('/menu', async (req, res) => {
    const menu = await Menu.findAll() 
    res.send(menu)
})
// start the web server listening 

// run start and log any errors
start()
    .then(() => console.log('Sequelize connected'))
    .catch((e) => console.log(`Caught error: ${e}`));


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
