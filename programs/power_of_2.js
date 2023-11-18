let power = Number(prompt("Enter power - "));
let count = 0, ans = 1;

while(count < power){
    ans = ans*2;
    count++;
}

console.log("2 to the power " + power + " is " + ans);
