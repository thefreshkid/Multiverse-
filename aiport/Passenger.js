const Traveller = require('./Traveller') //import
class Passenger extends Traveller {
    //properties
    passportNumber;
    seatNumber;
    bags;
    
     
    constructor (name,passportNumber,seatNumber){
    super(name);// calling super in constructor methods from super parent class Traveller
    this.name = name;
    this.passportNumber =passportNumber;
    this.seatNumber = seatNumber;
    this.bags =[] //Empty Array 
    }
    //Method to add bag
    addbag(bag) {
        this.bags.push (bag)
    }
    }
    //test code
    const yemi = new Passenger ('Yemi','A123456','159');
    const yemitrunk = new Bag(22);
    yemi.addbag(yemitrunk)

    module.exports = Passenger //export