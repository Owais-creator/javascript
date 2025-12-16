function doSomeFunctionAdd(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let sum = Number(num1) + Number(num2);
    console.log("Sum:", sum);
    let h1Result = document.getElementById("result");
    h1Result.innerText = "The sum is: " + sum;  
}
function doSomeFunctionSub(){
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    let sum = Number(num3) - Number(num4);
    console.log("Difference:", sum);
    let h2Result = document.getElementById("result");
    h2Result.innerText = "The difference is: " + sum;
}
function doSomeFunctionMul(){
    let num5 = document.getElementById("num5").value;
    let num6 = document.getElementById("num6").value;
    let sum = Number(num5) * Number(num6);
    console.log("Product:", sum);
    let h3Result = document.getElementById("result");
    h3Result.innerText = "The product is: " + sum;
}
function doSomeFunctionDiv(){
    let num7 = document.getElementById("num7").value;
    let num8 = document.getElementById("num8").value;
    let sum = Number(num7) / Number(num8);
    console.log("Quotient:", sum);
    let h4Result = document.getElementById("result");
    h4Result.innerText = "The quotient is: " + sum;
}







