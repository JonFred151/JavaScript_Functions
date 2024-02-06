

// Exercise 1 Section
//function printOdds(count) {
//    for (let i = 1; i <= count; i++) {
//        if (i % 2 != 0) {
//            console.log(i);
//        }
//    }
//}
//printOdds(10); // 1, 3, 5, 7, 9
//printOdds(100); //1, 3, ... 97, 99




// Exercise 2 Section
//function checkAge(userName, age) {
//    if (age >= 16) {
//        console.log(`Congrats! ${userName} you're over 16!`);
//    }
//    else {
//        console.log(`Sorry. ${userName} you're under 16`)
//    }
//}
//checkAge(`Jon`, 26);
//checkAge(`Jake`, 15);

//exercise 3 Quadrants

//function Quadrants(x, y) {
//    if(x === 0 && y === 0){
//        console.log(`(${x},${y}) is at the origin point`);
//    }
//   else if (x === 0 && y !== 0) {
//        console.log(`(${x}, ${y}) is on the y-axis`);
//    }
//    else if (y === 0 && x !== 0) {
//        console.log(`(${x}, ${y}) is on the x-axis`);
//    }
//    else if (x >= 1 && y >= 1) {
//        console.log(`(${x}, ${y}) is in the 1st Quadrants`);
//    }
//    else if (x <= -1 && y >= 1) {
//        console.log(`(${x}, ${y}) is in the 2nd Quadrants`);
//    }
//    else if (x <= -1 && y <= -1) {
//        console.log(`(${x}, ${y}) is in the 3rd Quadrants`);
//    }
//    else {
//        console.log(`(${x}, ${y}) is in the 4th Quadrants`);
//    }
//}
//Quadrants(1, 3);
//Quadrants(-2, 0);
//Quadrants(-4, -5);
//Quadrants(5, -4);
//Quadrants(0, 2);
//Quadrants(0, 0);

// exercise 4
//function isValidTriangle(a, b, c) {
//    return a + b > c || a+c > b || b + c > a
//}
//function checkTriangle(a, b, c) {
//    let isValid = isValidTriangle(a,b,c)
//    if (isValid) {
//        if (a == b && b == c) {
//            return `Equilateral`;
//        } else if (a == b || b == c || a == c) {
//            return `Isosceles`;
//        } else {
//            return `Scalene`;
//        }
//    }
//    else {
//        return `Not a valid triangle`
//    }
//}

//console.log(checkTriangle(3, 1, 5));
//console.log(checkTriangle(5, 5, 5));
//console.log(checkTriangle(2, 2, 5));

//exercise 5


function dataUsageFeedback(planLimit, day, usage) {
    let periodLength = 30;
    console.log(`${day} day(s) used, ${periodLength - day} day(s) remaining`);
    console.log(`Avarage daily use: ${usage / day} GB/day`);
    console.log(`Remaining data plan: ${planLimit - usage}`);
}

dataUsageFeedback(50, 12, 25);
dataUsageFeedback(100, 15, 40);