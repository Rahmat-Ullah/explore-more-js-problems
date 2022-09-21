const shoppingCart = [
    {name: 'pant', price: '1200', quantity: 5},
    {name: 'belt', price: '300', quantity: 7},
    {name: 'Shoe', price: '1200', quantity: 2},
    {name: 'shirt', price: '1300', quantity: 3},
]

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
        // console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log(expense);