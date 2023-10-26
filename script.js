const button1 = document.querySelector("#button1");
const output1 = document.querySelector("#result1");
console.log(button1);
console.log(output1);
button1.addEventListener("click",function(){
    const cost = document.querySelector(".input1");
    console.log(cost.value *0.15);
    let tip = (cost.value *0.15).toFixed(2);
    let subtotal = (cost.value *1).toFixed(2);
    console.log(subtotal)
    let temp = `<h2>You should tip $${tip} on $${subtotal}.</h2>`;
    output1.innerHTML = temp;
})

const button2 = document.querySelector("#button2");
const output2 = document.querySelector("#result2");
button2.addEventListener("click",function(){
    const cost = document.querySelector(".input2");
    let tip = (cost.value *0.18).toFixed(2);
    let subtotal = (cost.value *1).toFixed(2);
    let temp = `<h2>You should tip $${tip} on $${subtotal}.</h2>`;
    output2.innerHTML = temp;
})

const button3 = document.querySelector("#button3");
const output3 = document.querySelector("#result3");
button3.addEventListener("click",function(){
    const cost = document.querySelector(".input3");
    let tip = (cost.value *0.2).toFixed(2);
    let subtotal = (cost.value *1).toFixed(2);  
    let temp = `<h2>You should tip $${tip} on $${subtotal}.</h2>`;
    output3.innerHTML = temp;
})