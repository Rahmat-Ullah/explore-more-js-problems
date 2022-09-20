const names = ['babul', 'abul', 'kabul', 'habul', 'chabul', 'babul', 'abul', 'kabul', 'habul', 'chabul', 'rahmat', 'ullah', 'sayed'];

function remoteDuplicate(names){
    const unique = [];
    for(let i = 0; i<names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNames = remoteDuplicate(names);
console.log(uniqueNames);