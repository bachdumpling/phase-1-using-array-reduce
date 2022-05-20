const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 0);

// function totalBatteries(array, combine, start) {
//     let sum = start
//     for (let element of array) {
//         sum = combine(sum, element)
//     }
//     return sum;
// }

// console.log(totalBatteries(batteryBatches, (a, b) => a + b, 0));

