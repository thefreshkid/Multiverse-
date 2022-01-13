const fsp = require('fs').promises; // Node.js file system module with promises

async function load() {
    console.log('calling load');
    // wait for the file to be read
    const buffer = await fsp.readFile('./restaurantDB.json');
    const restaurants = (JSON.parse(String(buffer)));
    //console.log(restaurants)
    for (let i = 0; i <restaurants.length; i++){//loop through each restaurant 
        //console.log (restaurants[i].name)
        //console.log(restaurants[i].image)
        for (let j = 0; j <restaurants[i].menus.length; j++){ //loop through each menu of each restaurant 
        console.log (restaurants[i].menus[j])
            for (let k = 0; k <restaurants[i])
        }
    }



    //console.log(restaurants);
    //return restaurants;
    //console.log(restaurants[0].menus[0]);

}
load();
