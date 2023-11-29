class Car {
    name;
    model;
    year;

    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    introduce() {
        console.log(`hello. i am ${this.make}`)
    }
}

class ElectricCar extends Car{
    batteryLife;
    #year;

    constructor(name, model, batteryLife, year) {
        super(name, model);
        this.batteryLife = batteryLife;
        this.#year = year;
    }

    introduce() {
        console.log(`I am ${this.name} and my battery power is ${this.batteryLife} hrs`);
    }

    getYear() {
        return this.#year;
    }
}

const myCar = new Car("BMW","3","2013",);
myCar.introduce();
const myECar = new ElectricCar("Tesla","Model M",5, "2022");
//myECar.introduce();
console.log(myECar.year);
console.log(myECar.getYear());