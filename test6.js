const cars = [{
        brand: "Audi",
        year: 1999,
        price: 12222
    },
    {
        brand: "Nissan",
        year: 2003,
        price: 24222
    }
];

//Η απάντηση σας να είναι της μορφής 

const transform = (cars, idProp) =>
    cars.reduce((acc, cur) =>
        ({...acc,
            [cur[idProp]]: Object.fromEntries(Object.entries(cur).filter(([key, value]) =>
                key !== 'brand'))
        }), {});

const transformedCars = transform(cars, "brand");

console.log("transformedCars", transformedCars);
// Object.entries(cars).reduce((acc, cur) => (acc, [idProp[cur]] = cur), {})
//output της μορφης
//{Audi: {year: 1999, price:12222}, Nissan: {...}}