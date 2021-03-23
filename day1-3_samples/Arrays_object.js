// _____Arrays____
// var data=[1,2,3,4]
// console.log(data)

// _____object_____
// var information={
//     name:"vidya",
//     phone:"123456789",
//     email:"vidya @ gmail.com"
// }
// // console.log(information)

// var methods={
//      name:"shannu",
//      class:"2nd",
//      section:"B",
//      school:"Dps",
//      Area:"whitefeild",
//      City:"bengalore",
//      phone:"123456789",
//      email:"shannu @ gmail.com"
// }
// console.log(methods)

// _______updation_____
// methods.name="mani-medhamsh"
// console.log(methods)

// ______insertion_______
// methods.name2="shannu"
// console.log(methods)

// ___nested object_____

var information={
    country:{
        name:"india",
         state:{
             name:"karnataka",
             city:{
                 name:"bengalore",
                area:{
                  name:"whitefeild",
                  adress:{
                      name:"sreevidya"
                  }
                 }
             }
            }
        
        
    }
}

console.log(information.country.state.city.area.adress)
console.log(information.country.state.city)
console.log(information.country.state)
console.log(information.country.state.city.area)




