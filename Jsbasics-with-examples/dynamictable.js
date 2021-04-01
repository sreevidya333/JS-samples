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
      var tableElementRef=document.createElement("table")
      // here create th element by using "create element"
      var th1ElementRef = document.createElement("th")
      var th2ElementRef = document.createElement("th")
      var th3ElementRef = document.createElement("th")
      var th4ElementRef = document.createElement("th")
      // here create 2 tr
      var tr1ElementRef=document.createElement("tr")
      var tr2ElementRef=document.createElement("tr")
      // here create 4 td
      var td1ElementRef=document.createElement("td")
      var td2ElementRef=document.createElement("td")
      var td3ElementRef=document.createElement("td")
      var td4ElementRef=document.createElement("td")
      //  here create textnode for "th"
     var th1content= document.createTextNode("NAME")
     var th2content= document.createTextNode("PASSWORD")
     var th3content= document.createTextNode("EMAIL")
     var th4content= document.createTextNode("CITY")
 
      // here we r appendthe content into the element
      th1ElementRef.append(th1content)
      th2ElementRef.append(th2content)
      th3ElementRef.append(th3content)
      th4ElementRef.append(th4content)    
 
       td1ElementRef.append(nameVal)
       td2ElementRef.append(passwordVal)
       td3ElementRef.append(emailVal)
       td4ElementRef.append(cityVal)
 

    //  here am attached(append) 2 tr in table
     tableElementRef.appendChild(tr1ElementRef)
     tableElementRef.appendChild(tr2ElementRef)
 
    //  here we r attached(append) th thelements in tr1
     tr1ElementRef.appendChild(th1ElementRef)
     tr1ElementRef.appendChild(th2ElementRef)
     tr1ElementRef.appendChild(th3ElementRef)
     tr1ElementRef.appendChild(th4ElementRef)


    //  here we r attached(append)  td thelements in tr2
     tr2ElementRef.appendChild(td1ElementRef)
     tr2ElementRef.appendChild(td2ElementRef)
     tr2ElementRef.appendChild(td3ElementRef)
     tr2ElementRef.appendChild(td4ElementRef)

     tableElementRef.setAttribute('border','1')
      document.querySelector('body').appendChild(tableElementRef)

}
