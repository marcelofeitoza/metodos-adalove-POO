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
    this.licensePlate = licensePlate; // placa (AAA1A11)
    this.color = color; // cor (red, blue, black, white, etc)
    this.year = year; // ano de fabricação (2000, 2001, etc)
    this.type = type; // tipo (sedan, hatch, etc)
    this.doors = doors; // quantidade de portas (2, 4, etc)
    this.mileage = mileage; // quilometragem (0, 100, etc)
    this.chassis = chassis; // número de chassi (123456789, 987654321, etc)
    this.rentalValue = rentalValue; // valor de locação (R$ 100, R$ 200, etc)
    this.model = model; // modelo (modelo 1, modelo 2, etc)
    this.brand = brand; // marca (marca 1, marca 2, etc)

    this.isRented = {
      isRented: isRented.isRented, // se está alugado (true, false)
      rentedBy: isRented.rentedBy || undefined, // quem está alugando (nome do cliente)
      rentalDate: isRented.rentalDate || undefined, // data de aluguel (dd/mm/aaaa:hh:mm)
      returnedDate: isRented.returnedDate || undefined, // data de devolução (dd/mm/aaaa:hh:mm)
      mileageTravelled: isRented.mileageTravelled || undefined, // quilometragem percorrida (0, 100, etc)
    }; // se está alugado ou não
  }

  // método para alugar o carro
  /**
   * @param {any} clientName
   */
  set rent(clientName, rentalDate) {
    this.isRented.isRented = true;
    this.isRented.rentedBy = clientName;
    this.isRented.rentalDate = rentalDate;
  }

  // método para devolver o carro
  /**
   * @param {any} returnedDate
   */
  set returned(returnedDate) {
    this.isRented.isRented = false;
    this.isRented.returnedDate = returnedDate;
    this.isRented.mileageTravelled =
      this.mileage + this.isRented.mileageTravelled;
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
