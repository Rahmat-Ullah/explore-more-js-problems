const country = 'angladesh';
const age = 52;
const isIndependence = true;
const student = {id: 12, class: 4, name: 'Ome'};
const friends = [12, 23, 34, 25];
function add(num1, num2){
    return num1+num2;
}
add(23,12);

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependence);
console.log(typeof student);
console.log(typeof add);
check array using array.isArray
console.log(Array.isArray(friends));

//checking something in array using includes.
console.log(friends.includes(13));
console.log(friends.includes(12));