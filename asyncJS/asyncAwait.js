// Ice-cream business (using async/await)

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true

/*  Promise chaining


let order = ()=>{
    return new Promise((resolve, reject) => {

        if(true){
            resolve()
        }
        else{
            reject()
        }

    })
}


order()
.then()
.then()
.then()
.then()
.then()
.catch()
.finally()
*/


/*
// async await
async function order(){
    // try - catch - finally
    try{
        await abc;
    }
    catch(error){
        console.log("abc doesn't exist", error)
    }
    finally{
        console.log("runs code anyway")
    }
}


// we can use the system {order().then().then().catch().finally()} outside async/await also
order().then(()=>{
    console.log("Just testing")
})
*/

let toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(console.log("Which topping would you like? "))
        }, 3000)
    })
}

async function kitchen(){
    console.log(" A ") // step 1
    console.log(" B ") // step 2
    console.log(" C ") // step 3

    // now, we forget to ask about toppings, so we go out of kitchen to ask for toppings
    await toppings_choice()

    console.log(" D ") // step 4
    console.log(" E ") // step 5
}

kitchen()


// it will run meanwhile we ask customers about toppings.
console.log("Doing the dishes")
console.log("Cleaning the tables")
console.log("Taking others orders")