const numbers = [12, 23, 34, 45, 56, 59];

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }

for (const number of numbers) {
    // console.log(number);
}

const products = [
    { id: 1, name: 'iphone', price: 119000 },
    { id: 2, name: 'Samsung phone', price: 119000 },
    { id: 3, name: 'Nokia', price: 119000 },
    { id: 4, name: 'Xaomi', price: 119000 },
    { id: 5, name: 'Vivo phone', price: 119000 },
    { id: 6, name: 'oppo', price: 119000 },
    { id: 7, name: 'lonovo', price: 119000 },
    { id: 7, name: 'Phone one+', price: 119000 },
];
for (const product of products) {
    // console.log(product);
}

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'Phone');
console.log(result);

