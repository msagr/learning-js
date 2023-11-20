/* Promises

    The structure of callback hell is very messy and confusing, this
    is where promises comes to rescue.

        A promise is made --> Pending --> Resolve --> .then --> .then --> finally
                                 |                                             ^                         
                                 |                                             |                  
                                 |------> Reject -----------> .catch --------->|
                    
            Pending stage :- Nothing is happening here.
            Resolve       :- We will resolve the promise. (i.e. step by step do the process ---> .then(), .then(), .then(), ________  to resolve promise)
            Reject        :- We will reject the promise and pass a note in .catch() function.
            .finally()    :- It will always run whether or not the promise is rejected or resolved.
*/

/* Need to understand four more things first :- 

    1.  Relationship between time and work.
    2.  Promise chaining.
    3.  Error handling. (.catch)
    4.  The .finally handler.
*/

// Ice-cream business (using promises)

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true

// relationship between time and work
let order = (time, work) => {

    // First we take order and then we make promise
    
    return new Promise((resolve, reject)=>{
        if(is_shop_open){ // if shop is open we will resolve your promise.
            
            setTimeout(()=>{
                resolve(work())
            }, time)
            
        }
        else{
            reject(console.log("shop is closed"))
        }

    })
}

order(2000, ()=>console.log(`${stocks.fruits[0]} was selected`))

.then(()=>{
    return order(0, ()=>console.log("Production has started"))
})

.then(()=>{
    return order(2000, ()=>console.log("The fruit was chopped"))
})

.then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added`))
})

.then(()=>{
    return order(1000, ()=>console.log("start the machine"))
})

.then(()=>{
    return order(2000, ()=>console.log(`ice-cream placed on ${stocks.holder[0]}`))
})

.then(()=>{
    return order(3000, ()=>{console.log(`${stocks.toppings[0]} was added`)})
})

.then(()=>{
    return order(2000, ()=>console.log("Serving ice-cream, enjoy!!"))
})

// Error handling (it will work only when the promise is rejected i.e. when shop is closed)
.catch(()=>{
    console.log("The customer has left")
})

// finally works every time
.finally(()=>{
    console.log("Day ended. Shop is closed.")
})