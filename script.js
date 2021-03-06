// eventlistener for plus button of both class
document.getElementById("plusBtnFirstClass").addEventListener("click", function(){
    productQuantity(true, "FirstClass");
    grandTotal();
})
document.getElementById("plusBtnEconomy").addEventListener("click", function(){
    productQuantity(true, "Economy");
    grandTotal();
})

// eventlistener for minus button of both class
document.getElementById("minusBtnFirstClass").addEventListener("click", function(){
    productQuantity(false, "FirstClass");
    grandTotal();
})
document.getElementById("minusBtnEconomy").addEventListener("click", function(){
    productQuantity(false, "Economy");
    grandTotal();
})

//function for handling product quantity
function productQuantity(isIncrease, className){
    const getInput = parseFloat(document.getElementById("inputField"+className).value);
    let getQuantity = 0;
    if (isIncrease == true){
        getQuantity = getInput + 1;
    }
    else if (isIncrease == false && getInput>0){
        getQuantity = getInput - 1;
    }
    document.getElementById("inputField"+className).value = getQuantity;
}

//function for calculating subtotal vat and grandtotal
function grandTotal(){

    const firstQuantity = parseFloat(document.getElementById("inputFieldFirstClass").value);
    const secondQuantity = parseFloat(document.getElementById("inputFieldEconomy").value);

    //calculating subtotal and showing into subtotal area
    const subTotal = (firstQuantity*150)+(secondQuantity*100);
    document.getElementById("subTotal").innerText = subTotal;

    //calculating vat and showing into vat area
    const vat = (subTotal*10)/100;
    document.getElementById("totalVat").innerText = vat;
    
    //calculating Grand Total and showing into Total area
    const grandTotal = subTotal + vat;
    document.getElementById("grandTotal").innerText = grandTotal;
}

// eventlistener for book now button
document.getElementById("bookNow").addEventListener("click", function(){
    
    //for showing first class tickets quantity
    const firstTickets = parseFloat(document.getElementById("inputFieldFirstClass").value);
    document.getElementById("firstTickets").innerText = firstTickets;

    //for showing second class tickets quantity
    const secondTickets = parseFloat(document.getElementById("inputFieldEconomy").value);
    document.getElementById("secondTickets").innerText = secondTickets;

    //for showing total tickets quantity
    const totalTickets = firstTickets+secondTickets;
    document.getElementById("totalTickets").innerText = totalTickets;

    //for showing total cost
    const totalFinal = parseFloat(document.getElementById("grandTotal").innerText);
    document.getElementById("grandBook").innerText = totalFinal;

    //displaying confirmation section
    document.getElementById("beforeBook").style.display = "none";
    document.getElementById("afterBook").style.display = "block";
})