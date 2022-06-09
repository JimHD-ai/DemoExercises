const cars = [{
        brand: 'audi',
        year: 2000
    },
    {
        brand: 'fiat',
        year: 2002
    }
];

const newCars3 = cars.map((car) => ({
    [car.brand]: car.year
}))

console.log("newCars3 =", newCars3);