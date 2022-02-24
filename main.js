class Car {
  constructor(
    licensePlate,
    color,
    year,
    type,
    doors,
    mileage,
    chassis,
    rentalValue,
    model,
    brand,
    isRented
  ) {
    this.licensePlate = licensePlate; // placa (AAA1A11) - string
    this.color = color; // cor (red) - string
    this.year = year; // ano de fabricação (2000) - number
    this.type = type; // tipo (sedan) - string
    this.doors = doors; // quantidade de portas (2) - string
    this.mileage = mileage; // quilometragem (0) - number
    this.chassis = chassis; // número de chassi (123456789) - number
    this.rentalValue = rentalValue; // valor de locação (R$ 100) - string
    this.model = model; // modelo (modelo 1) - string
    this.brand = brand; // marca (marca 1) - string

    this.isRented = { // - object
      isRented: isRented.isRented, // se está alugado (true, false) - boolean
      rentedBy: isRented.rentedBy || undefined, // quem está alugando (nome do cliente) - string
      rentalDate: isRented.rentalDate || undefined, // data de aluguel (dd/mm/aaaa:hh:mm) - string
      returnedDate: isRented.returnedDate || undefined, // data de devolução (dd/mm/aaaa:hh:mm) - string
      mileageTravelled: isRented.mileageTravelled || undefined, // quilometragem percorrida (0, 100, etc) - number
    }; // se está alugado ou não
  }

  // método para alugar o carro
  /**
   * @param {any} clientName
   */
  set rent(clientName, rentalDate) {
    this.isRented.isRented = true; // bool  
    this.isRented.rentedBy = clientName; // string
    this.isRented.rentalDate = rentalDate; // string
  }

  // método para devolver o carro
  /**
   * @param {any} returnedDate
   */
  set returned(returnedDate) {
    this.isRented.isRented = false; // bool
    this.isRented.returnedDate = returnedDate; // string
    this.isRented.mileageTravelled =
      this.mileage + this.isRented.mileageTravelled; // number
  }

  // método para mostrar os dados do carro
  get data() {
    return {
      licensePlate: this.licensePlate,
      color: this.color,
      year: this.year,
      type: this.type,
      doors: this.doors,
      mileage: this.mileage,
      chassis: this.chassis,
      rentalValue: this.rentalValue,
      model: this.model,
      brand: this.brand,
      isRented: this.isRented,
    };
  }

  get brandAndModel() {
    return `${this.brand} ${this.model}`;
  }
}

const cars = [
  {
    licensePlate: "AAA1A11",
    color: "red",
    year: 2000,
    type: "sedan",
    doors: 4,
    mileage: 0,
    chassis: "123456789",
    rentalValue: 100,
    model: "modelo 1",
    brand: "marca 1",
    isRented: {
      isRented: false,
    },
  },
  {
    licensePlate: "AAA1A12",
    color: "blue",
    year: 2001,
    type: "sedan",
    doors: 4,
    mileage: 0,
    chassis: "987654321",
    rentalValue: 200,
    model: "modelo 2",
    brand: "marca 2",
    isRented: {
      isRented: true,
      rentedBy: "João",
      rentedDate: "01/01/2020:00:00",
      returnedDate: "01/01/2020:00:00",
      mileageTravelled: 100,
    },
  },
  {
    licensePlate: "AAA1A13",
    color: "black",
    year: 2002,
    type: "hatch",
    doors: 2,
    mileage: 0,
    chassis: "123456789",
    rentalValue: 300,
    model: "modelo 3",
    brand: "marca 3",
    isRented: {
      isRented: false,
    },
  },
];

cars.forEach((car) => {
  const newCar = new Car(
    car.licensePlate,
    car.color,
    car.year,
    car.type,
    car.doors,
    car.mileage,
    car.chassis,
    car.rentalValue,
    car.model,
    car.brand,
    car.isRented
  );

  console.log(newCar.data);
});
