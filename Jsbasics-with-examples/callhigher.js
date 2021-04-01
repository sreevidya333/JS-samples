function fnHi(a,b){
    a()
    b()
}

fnHi(function(){
    console.log("am first parameter ")
},function(){
    console.log("am second parameter ")
})