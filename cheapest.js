const phones = [
    {name: 'Samsung', camera: '34', storage: '32gb', price: 33000, color: 'black'},
    {name: 'walton', camera: '12', storage: '32gb', price: 12000, color: 'white'},
    {name: 'iphone', camera: '32', storage: '32gb', price: 123000, color: 'black'},
    {name: 'xaomi', camera: '54', storage: '32gb', price: 23000, color: 'black'},
    {name: 'vivo', camera: '76', storage: '32gb', price: 2000, color: 'black'}
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(i = 0; i< phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);