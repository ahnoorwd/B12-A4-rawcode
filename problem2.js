function onlyCharacter(input) {
     // You have to write your code here
    if (typeof input !== "string") {
        return "Invalid";
    }
    let result = input.split(" ").join("").toUpperCase();

    return result;
}

console.log(onlyCharacter("  h e llo wor   ld"));       // HELLOWORLD
                
