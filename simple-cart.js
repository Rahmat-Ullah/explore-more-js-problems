const shoppingCart = [
    {name: 'Shoe', price: '1200'},
    {name: 'shirt', price: '1300'},
    {name: 'pant', price: '1200'},
    {name: 'belt', price: '300'},
]

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;
        console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log(expense);