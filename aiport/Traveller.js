const Bag = require('./Bag')
class Traveller{
 //properties
 name;
 bag=[];//empty array

 constructor (name){
 this.name = name;
}
//Method to add bag
addBag(bag) {
    this.bag.push(bag)
}
}
module.exports = Traveller //export


