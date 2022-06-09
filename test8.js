const certification = {
    _id: '3567798099455779',
    name: 'Marios',
    age: 45,
    year: 2005,
    grade: 8,
}

const result = certification.hasOwnProperty('_id')

console.log(result);
const result2 = Object.keys(certification).includes('_id')
console.log(result2);