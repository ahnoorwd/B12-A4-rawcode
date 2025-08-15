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


console.log(resultReport(100));

