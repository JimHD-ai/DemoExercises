const cars = [{
        brand: 'audi',
        year: 2000
    },
    {
        brand: 'fiat',
        year: 2002
    },
    {
        brand: 'toyota',
        year: 2002

    }
];

const carsAfter2001 = cars.filter((value) => value.year > 2001);

console.log("carsAfter2001", carsAfter2001);