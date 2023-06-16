function stringFunction(input) {
    let reversedNumber = ''
    let numberAsString = ''
    for (let i = 0; i < input.length; i++) {
        numberAsString = input[i].toString();
        reversedNumber = numberAsString.split('').reverse().join('');
        if (numberAsString === reversedNumber){
            console.log('true');
        } else{
            console.log('false')

        }
    }
}
stringFunction([123, 323, 421, 121])