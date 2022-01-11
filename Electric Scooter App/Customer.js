class Customer {
    //properties
    name;
    password;
    age;
    address;
    number;
    
     
    constructor (name,passportNumber,seatNumber){
    super(name);// calling super in constructor methods from super parent class Traveller
    this.name = name;
    this.passportNumber =passportNumber;
    this.seatNumber = seatNumber;
    this.bags =[] //Empty Array 
    }