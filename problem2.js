function onlyCharacter(str) {
     // You have to write your code here
    if (typeof str !== "string") {
        return "Invalid";
    }
    let result = str.split(" ").join("").toUpperCase();

    return result;
}

//console.log(onlyCharacter("  h e llo wor   ld"));       // HELLOWORLD
                
