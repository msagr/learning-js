/* Ice-cream business :-

1.  order from customer
2.  fetch ingredients
3.  start production
4.  serve

                        Time (seconds)

1. Place Order              2 sec.
2. Cut fruit                2 sec.
3. Add water and ice        1 sec.
4. Start machine            1 sec.
5. Select container         2 sec.
6. Select toppings          3 sec.
7. Serve Ice-cream          2 sec.

Let's code this out using JS callbacks.
*/

/* Analogy

    store room --> back-end (To store raw materials)
    kitchen    --> front-end (Where ice-cream is made)

*/

let stocks = { // object
    fruits: ["strawberry", "grapes", "banana", "apple"], // fruit array
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

// to access 2nd element of fruit array which is part of object stocks.
//console.log(stocks.fruits[2])

// everytime we get order we call production.

// forming this relationship between the functions.
let order = (fruit_name, call_production) => {
    //console.log("order placed, please call production")
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruit_name]} was selected`)
        call_production()
    }, 2000) //2 second to place order

    //call_production()
};

let production = () => {
    //console.log("order received, starting production")

    // callback hell.
    setTimeout(() => {
        console.log("production has started")


        // chopping fruit
        /* Note :- its written inside above setTimeout() function because this step will come
                   after production has started. */
        setTimeout(()=>{
            console.log("fruit has been chopped")

            // selecting liquid
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
            
                // starting machine
                setTimeout(()=>{
                    console.log("The machine was started")

                    // selecting container (let's say we are selecting cone)
                    setTimeout(()=>{
                        console.log(`ice-cream was placed on ${stocks.holder[0]}`)
                        
                        // selecting topping (let's say chocolate)
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was added as topping`)

                            // serving ice-cream
                            setTimeout(()=>{
                                console.log("serving icecream, enjoy!!")

                            }, 2000)

                        }, 3000)

                    }, 2000)

                }, 1000)
            
            }, 1000) // it would take 1 sec. to select liquid.

        }, 2000) // it will take 2 second to chop fruit.

    }, 0) 

    /* output when call_production function call is outside the 
       setTimeout() function in order() function. 
        
        Output :-
        
            production has started
            strawberry was selected
       
        strawberry was selected is printed after production has started
        because the former has a waiting time of 2 sec.
    */

    /* output when call_production function call is inside the setTimeout() function in
       order() function. 
       
            Output :-
            
            strawberry was selected
            production has started
    */
}

order(0 ,production)
