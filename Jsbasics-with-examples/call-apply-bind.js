var obj={
    c=5
}
function fn(){
    var a= 2
    var b= 4

  return a+b+this.c

}

console.log(fn.call(obj))