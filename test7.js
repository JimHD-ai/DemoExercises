const productsValues = [{
    name: 'apple',
    price: 12
}, {
    name: 'orange',
    price: 32
}, {
    name: 'pen',
    price: 22
}, {
    name: 'notebook',
    price: 89
}, {
    name: 'peach',
    price: 18
}]; //Creating an array of objects with the name of the item and the price of the item

const firstBasket = ['apple', 'apple', 'orange', 'apple', 'apple', 'pen', 'peach', 'apple', 'pen', 'peach', 'notebook', 'notebook', 'orange']; //Creating an array with the items from the first basket

const firstBasketPrice = firstBasket.map(productName => productsValues.find(value => value.name === productName).price).reduce((acc, cur) => acc + cur, 0);
// Checking if the names of the items in the first basket are in the array of objects and if they are i take their value and add it to the total price of the basket

console.log('The sum of the first basket is: ', firstBasketPrice);

const secondBasket = []
    //If i want to calculate the item price of the offers when we are checking its item i need to create an empty array so that i can push its item and check if there is an offer
const scanItem = (basket, itemName) => {
    const item = Object.assign({}, productsValues.find(value => value.name === itemName)); //Assigning boolean value to the item and then pushing it in the second basket
    item.useInOffer = false;
    //Function to scan the item push it in the second basket and check if there is an offer
    if (itemName === 'apple') { //The item apple has an offer of 1+1 meaning that if i have already an apple in the basket i don't need to add the next one
        let appleNotUsedInOffer = basket.find(item => item.name === 'apple' && item.useInOffer === false); //I need a boolean to check if i have already an apple in the basket and if i already used the offer
        if (appleNotUsedInOffer) {
            appleNotUsedInOffer.useInOffer = true;
            return;
        }
    } else if (itemName === 'orange') { //The item orange has an offer of 2+1 meaning that if i have 2 oranges in the basket i don't need to add the next one
        let orangesNotUsedInOffer = basket.filter(item => item.name === 'orange' && item.useInOffer === false); //I need a boolean to check if i have already 2 oranges in the basket and if i already used the offer
        if (orangesNotUsedInOffer.length === 2) {
            orangesNotUsedInOffer.forEach(orange => orange.useInOffer = true);
            return;
        }
    }
    basket.push(item);
}

scanItem(secondBasket, 'apple');
scanItem(secondBasket, 'apple');
scanItem(secondBasket, 'orange');
scanItem(secondBasket, 'apple');
scanItem(secondBasket, 'orange');
scanItem(secondBasket, 'orange');
scanItem(secondBasket, 'apple');
scanItem(secondBasket, 'apple');

console.log(secondBasket);

const secondBasketPrice = secondBasket.map(productsValues => productsValues.price).reduce((acc, cur) => acc + cur, 0);
console.log('The sum of the second basket is: ', secondBasketPrice);


// const thirdBasket = ['apple', 'apple', 'orange', 'apple', 'orange', 'orange', 'apple', 'apple']

// const thirdBasketPrice = thirdBasket.map(productName => productsValues.find(value => value.name === productName).price).reduce((acc, cur) => acc + cur, 0);

// console.log('The sum of the third basket is: ', thirdBasketPrice);