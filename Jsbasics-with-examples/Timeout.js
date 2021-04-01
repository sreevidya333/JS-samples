// function fn(){
//     setTimeout(function (){
//         console.log("Its execute after 2sec")
//     },2000)

// }
// fn()
function fn(){

  var interval1=  setInterval(function (){
        console.log("Its execute every 2sec when we stop that")
    },3000)

    setTimeout (function (){
            clearInterval(interval1)
    },10000)
}
