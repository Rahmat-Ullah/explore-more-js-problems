const names = ['babul', 'abul', 'kabul', 'habul', 'chabul', 'babul', 'abul', 'kabul', 'habul', 'chabul', 'rahmat', 'ullah', 'sayed'];

function removeDuplicateNames(names){
    const unique = [];
    for(let i = 0; i< names.length; i++){
        const name = names[i];
        // console.log(name);
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicateNames(names);
console.log(uniqueNames);