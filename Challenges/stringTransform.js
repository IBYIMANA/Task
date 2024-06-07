function transString(inputString) {
    let result = inputString;

    if (inputString.length % 3 === 0) {
        result = result.split('').reverse().join('');
    }
    if (inputString.length % 5 === 0) {
        result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    if (inputString.length % 15 === 0) {
        result = result.split('').reverse().join(''); 
        result = result.split('').map(char => char.charCodeAt(0)).join(' '); 
    }

    return result;
}
console.log(transString("Hamburger")); 
console.log(transString("Pizza"));
console.log(transString("Chocolate Chip Cookie")); 
