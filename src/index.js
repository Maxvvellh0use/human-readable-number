module.exports = function toReadable (number) {
    const digits = {
        d0: ['zero','one','two','three','four','five','six','seven','eight','nine'],
        d1: ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
        d2: ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
        d3: 'hundred'
    };
    let arr = String(number).split('');
    console.log(arr);
    let arrResult = [];
        if (arr.length === 1) {
            arrResult.push(digits.d0[number])
        }
        else if (arr.length === 2 && arr.includes('0') === false && number > 20) {
            arrResult.push(digits.d2[arr[0]-1]);
            arrResult.push(digits.d0[arr[1]]);

        }
        else if (arr.length === 3 && number % 10 === 0 && number % 100 !== 0) {
            arrResult.push(digits.d0[arr[0]]);
            arrResult.push(digits.d3);
            arrResult.push(digits.d2[arr[1]-1]);
        }

        else if (arr.length === 3 && arr.includes('0') === false && (number - Number(arr[0])*100) > 20) {
            arrResult.push(digits.d0[arr[0]]);
            arrResult.push(digits.d3);
            arrResult.push(digits.d2[arr[1]-1]);
            arrResult.push(digits.d0[arr[2]])
        }
        else if (arr.length === 2 && arr.includes('0') === true) {
            arrResult.push(digits.d2[arr[0]-1])
        }
        else if (arr.length === 2 && number < 20) {
            arrResult.push(digits.d1[arr[1]-1])
        }
        else if (number % 100 === 0) {
            arrResult.push(digits.d0[arr[0]]);
            arrResult.push(digits.d3);
        }
        else if (arr.length === 3 && arr.includes('0') === true && (number - Number(arr[0])*100) > 9) {
            arrResult.push(digits.d0[arr[0]]);
            arrResult.push(digits.d3)
        }
        else if (arr.length === 3 && (number - Number(arr[0])*100) < 20 && (number - Number(arr[0])*100) > 9) {
            arrResult.push(digits.d0[arr[0]]);
            arrResult.push(digits.d3);
            arrResult.push(digits.d1[arr[2]-1])
        }
        else if (arr.length === 3 && (number - Number(arr[0])*100) < 20 && (number - Number(arr[0])*100) < 9) {
            arrResult.push(digits.d0[arr[0]]);
            arrResult.push(digits.d3);
            arrResult.push(digits.d0[arr[2]])
        }
        else if (arr.length === 3 && arr[2] === '9') {
            arrResult.push(digits.d0[arr[0]]);
            arrResult.push(digits.d3);
            arrResult.push('nine')
        }

    return arrResult.join(' ');
}

// console.log(toReadable(609));
