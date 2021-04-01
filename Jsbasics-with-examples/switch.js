function fn(a){

switch(a){
    case "GM":
        console.log("says good morning")
    break;
    
    case"GA":
        console.log("says good afternoon")
    break;
    
    case"GE":
         console.log("says goodevening")
    break;
    
    case"GN":
         console.log("says goodnight")

       default:
           console.log("no case has been matched")
}
}

fn("GM")