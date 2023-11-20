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