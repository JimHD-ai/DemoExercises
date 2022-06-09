const users = [{
        _id: "3546565",
        name: "Maria",
        type: "SUPPLIER",
        certifications: [{
                _id: "3565",
                title: "ISO2020",
                type: "ISO",
                status: "Approved"
            },
            {
                _id: "35655",
                title: "FLAG2020",
                type: "FLAG",
                status: "Approved"
            }
        ]
    },
    {
        _id: "355646565",
        name: "Manos",
        type: "SHIPPING_COMPANY"
    },
    {
        _id: "3546565",
        name: "Maria",
        type: "SUPPLIER",
        certifications: [{
            _id: "35654",
            title: "ISO2018",
            type: "ISO",
            status: "Pending"
        }]
    }
];
//Α Ερώτημα
const result = users.filter(user => user.type === "SUPPLIER").reduce((acc, cur) =>
        acc + (cur.certifications.length || 0), 0) //cur.certofications?. για την περίπτωση που το certifications δεν ειναι valid
console.log(result);
//Β Ερώτημα
const result2 = users.filter(user => user.type === "SUPPLIER").reduce((acc, cur) =>
    acc + (cur.certifications.filter(certification =>
        certification.status === "Approved").length || 0), 0); //cur.certofications?. για την περίπτωση που το certifications δεν ειναι valid
console.log(result2);