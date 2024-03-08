export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const CarClass = this.constructor[Symbol.carType];
    return Object.create(CarClass.prototype);
  }
}
