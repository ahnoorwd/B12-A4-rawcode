function totalFine(fare) {
     // You have to write your code here
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }
    let fine = fare + (fare * 0.20) + 30;
    return fine;
}

//console.log(totalFine("gorib tai katinai")); 

function onlyCharacter(str) {
     // You have to write your code here
    if (typeof str !== "string") {
        return "Invalid";
    }
    let result = str.split(" ").join("").toUpperCase();

    return result;
}

//console.log(onlyCharacter("  h e llo wor   ld"));       // HELLOWORLD
                

function bestTeam(player1, player2) {
     // You have to write your code here
    if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null) {
        return "Invalid";
    }
    let total1 = player1.foul + player1.cardY + player1.cardR;
    let total2 = player2.foul + player2.cardY + player2.cardR;

    if (total1 < total2) {
        return player1.name;
    } else if (total2 < total1) {
        return player2.name;
    } else {
        return "Tie";
    }
}

// console.log(bestTeam(
// { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
// { name: "Argentina", foul: 7, cardY: 0, cardR: 0 })); 

function isSame(arr1,arr2) {
      // You have to write your code here
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
//console.log(isSame({data: [2 , 5 , 6] } , [2 , 5 , 6]));

function resultReport(marks) {
     // You have to write your code here
    if (!Array.isArray(marks)) {
    return "Invalid";
 }

    if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }

    let total = 0;
    let passCount = 0;
    let failCount = 0;

    for (let mark of marks) {
        total += mark;
        if (mark >= 40) {
            passCount++;
        } else {
            failCount++;
        }
    }

    let average = Math.round(total / marks.length);
    return {
        finalScore: average,
        pass: passCount,
        fail: failCount
    };
}
//console.log(resultReport(100));



