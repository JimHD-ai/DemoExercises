const cars = [{
        brand: 'audi',
        year: 2000
    },
    {
        brand: 'fiat',
        year: 2002
    }
];

const newCars = cars.map(car => ({...car, serviced: 'true' }));

console.log("newcars", newCars);