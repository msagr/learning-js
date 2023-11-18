switch(prompt("What's the day like ?")){
    case "rainy":
        console.log("Remember to bring umbrella");
        break;
    case "sunny":
        console.log("Dress lightly");
    case "cloudy":
        console.log("Go outside");
        break;
    default:
        console.log("Unknown weather type");
        break;
}