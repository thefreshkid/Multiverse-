class Plane{
//properties
type;
passenger;
/** constructs a new instance of the plane class
* @param {Number}type
*/

constructor (type,passenger){
this.type = type;
this.passenger = passenger;
}
}
//Method to add passenger
addpassenger (passenger) {
    this.passenger.push (passenger)
}
