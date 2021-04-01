function fn(){
    // took the reference of Elements
    var nameRef=document.getElementById("name")
    var passwordRef=document.getElementById("password")
    var emailRef=document.getElementById("email") 
    var cityRef=document.getElementById("city")

    // took the values of each input element
      var nameVal= nameRef.value
      var passwordVal= passwordRef.value
      var emailVal = emailRef.value
      var cityVal = cityRef.value

    // console.log(nameVal,passwordVal,emailVal,cityVal)

  // here create table element by using "create element"
  var tableElementRef=document.getElementById("details")
  if(tableElementRef==undefined){
    tableElementRef = document.createElement("table")    
    tableElementRef.setAttribute("id","details")
    createTable(tableElementRef)
    tableElementRef.setAttribute('border','1')
    document.querySelector('body').appendChild(tableElementRef)
    addRow(tableElementRef,nameVal,passwordVal,emailVal,cityVal )
  }else{
    addRow(tableElementRef,nameVal,passwordVal,emailVal,cityVal )
  }

  
     
}
function createTable(tableElementRef){
  
  // here create th element by using "create element"
  var th1ElementRef = document.createElement("th")
  var th2ElementRef = document.createElement("th")
  var th3ElementRef = document.createElement("th")
  var th4ElementRef = document.createElement("th")
  
  // here we r appendthe content into the element
  th1ElementRef.append("NAME")
  th2ElementRef.append("PASSWORD")
  th3ElementRef.append("EMAIL")
  th4ElementRef.append("CITY")    

  var tr1ElementRef=document.createElement("tr") 

 tr1ElementRef.appendChild(th1ElementRef)
 tr1ElementRef.appendChild(th2ElementRef)
 tr1ElementRef.appendChild(th3ElementRef)
 tr1ElementRef.appendChild(th4ElementRef)
 tableElementRef.appendChild(tr1ElementRef)
}
function addRow(tableElementRef,nameVal,passwordVal,emailVal,cityVal ){
// here create 4 td
var td1ElementRef=document.createElement("td")
var td2ElementRef=document.createElement("td")
var td3ElementRef=document.createElement("td")
var td4ElementRef=document.createElement("td")
td1ElementRef.append(nameVal)
td2ElementRef.append(passwordVal)
td3ElementRef.append(emailVal)
td4ElementRef.append(cityVal)
tr1ElementRef=document.createElement("tr")

 
tr1ElementRef.appendChild(td1ElementRef)
tr1ElementRef.appendChild(td2ElementRef)
tr1ElementRef.appendChild(td3ElementRef)
tr1ElementRef.appendChild(td4ElementRef)
tableElementRef.appendChild(tr1ElementRef)
} 
// var x = tableElementRef
// function f1({
//   if (x.style.display === "none") {
//      x.style.display = "block";
//   }else{
//     x.style.display="none";
//   }
// }

