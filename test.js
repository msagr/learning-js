let obj = {
    name: 'Mehul',
    getName: function(){
        console.log(this.name);
    }
}

console.log(obj.getName());

this.name = 'mehul';
console.log(this.name);