class Passenger {
    //properties
    name;
    passportNumber;
    seatNumber;
    bags;
    
     
    constructor (name,passportNumber,seatNumber){
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
    const yemi = new Passenger ('Yemi','A123456','159');
    const yemitrunk = new Bag(22);
    yemi.addbag(yemitrunk)
