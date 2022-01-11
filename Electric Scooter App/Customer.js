class Customer {
    //properties
    name;
    password;
    age;
    address;
    number;
    
     
    constructor (name,age){
    this.name = name;
    this.age = age;
    }
}
const customer = new customer(18)
console.log(customer.age)// 18

module.exports = Customer //export