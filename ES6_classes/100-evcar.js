import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const carInstance = new Car();
    
    carInstance._brand = this._brand;
    carInstance._motor = this._motor;
    carInstance._color = this._color;
    
    return carInstance;
  }
}
