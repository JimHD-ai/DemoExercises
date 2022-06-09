const y = {
    0: {
        id: "123",
        name: "Achilleas"
    },
    1: {
        id: "133",
        name: "Ioanna"
    }
};

//Η απάντηση σας να είναι της μορφής 

// const result =
//     Object.entries(y).find(([key, value]) => value.id === "133")
const result = Object.entries(y).find((item) => item[1].id === "133")
console.log('result', result);

//Should log ["1", {"id":"133","name":"Ioanna"}]