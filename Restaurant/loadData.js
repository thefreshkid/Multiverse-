const fsp = require('fs').promises; // Node.js file system module with promises

async function load() {
    console.log('calling load');
    // wait for the file to be read
    const buffer = await fsp.readFile('./restaurantDB.json');
    const restaurants = (JSON.parse(String(buffer)));
    const rName = restaurants[0].image;
    


    //console.log(restaurants);
    //return restaurants;
    console.log(restaurants[0].image);

}
load();
