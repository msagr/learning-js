// Final implementation of ice-cream business using async/await

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true

function time(ms){
    return new Promise((resolve, reject) => {
        if(is_shop_open){
            setTimeout(resolve, ms)
        }
        else{
            reject(console.log("shop is closed"))
        }
    })
}

async function kitchen(){
    try{
        await time(2000) // to wait for 2 seconds
        console.log(`${stocks.fruits[0]}`)

        await time(0) // the production will start immediately
        console.log("Start the production")

        await time(2000) // it will take 2 seconds to cut the fruit
        console.log("cut the fruit")

        await time(1000) // it will take 1 second to add liquid
        console.log(`${stocks.holder[0]} and ${stocks.holder[1]} are added`)

        await time(1000) // it will take 1 second to start the machine
        console.log("start the machine")

        await time(2000) // it will take 2 second to select container
        console.log(`ice-cream placed on ${stocks.holder[0]}`)

        await time(3000) // it will take 3 second to add toppings
        console.log(`${stocks.toppings[0]} was selected as topping`)

        await time(2000) // it will take 2 second to serve ice-cream
        console.log("serve ice-cream")
        
    }
    catch(error){
        console.log("customer left", error)
    }
    finally{
        console.log("Day ended, shop is closed")
    }
}

kitchen()