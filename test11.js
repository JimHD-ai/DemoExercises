const users = [{
        name: "Maria",
        age: 24,
        country: "Greece",
        points: 100
    },
    {
        name: "Kostas",
        age: 50,
        country: "Italy",
        points: 2000
    },
    {
        name: "John",
        age: 30,
        country: "France",
        points: 20
    },
    {
        name: "James",
        age: 30,
        country: "United Kingdom",
        points: 1400
    },
    {
        name: "Jennifer",
        age: 28,
        country: "United Kingdom",
        points: 3000
    }
];



const result = users.sort((a, b) => b.points - a.points).slice(0, 3); //I need to sort the users by points in descending order and take the first 3 users

console.log(result);

const result2 = users.filter(user => user.country === "United Kingdom").sort((a, b) =>
    b.points - a.points).slice(0, 3); //I need to filter the users that are from United Kingdom and sort them by points in descending order and take the first 3 users

console.log(result2);