const Customer = require('./Customer') //import
class Payment extends Customer{
    //properties
    customername;
    customercarddetails;
    costoofrental;
    
     
    constructor (name,cardeetails,costofrental){
    super(name);// calling super in constructor methods from super parent class Customer
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