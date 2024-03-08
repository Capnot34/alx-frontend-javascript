export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Speecies = this.constructor[Symbol.speecies];
    return Object.create(CarClass.prototype);
  }
}
