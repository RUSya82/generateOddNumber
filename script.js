function generateOddNumber(x, y) {
    let min = (x > y) ? y : x;
    let max = (x > y) ? x : y;
    let number;
    do{
        number = Math.random() * (max - min + 1) + min;
        number = number^0;
    }while (number%2 == 0)

    return number;
}
console.log(generateOddNumber(1, 100));
console.log(generateOddNumber(0, -10));
console.log(generateOddNumber(-7, -3));
console.log(generateOddNumber(-100, 100));
console.log(generateOddNumber(1, -1));