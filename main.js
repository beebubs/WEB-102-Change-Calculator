// Write your JavaScript here

var dollars;
var cents;
var quarters;
var dimes;
var nickels;
var changeLeft;
var pennies;

function calculateChange(amountReceived, amountDue){
    //how much total change should be given
    let change;
    change = amountReceived - amountDue;
    console.log("change", change);

    //how many dollars in change
    dollars = parseInt(change);
    console.log("dollars", dollars);

    //output for how many dollars in change after button is clicked 
    let dollarsChange = document.querySelector("#dollars-output");
    dollarsChange.innerHTML = (dollars);

    //how much cents total in change
    cents = change - dollars;
    cents = Math.round(100*cents)/100;
    console.log("cents", cents);

    //how many quarters in change
    quarters = parseInt(cents/.25);
    console.log("quarters", quarters);

    //output for how many quarters in change after button is clicked 
    let quartersChange = document.querySelector("#quarters-output");
    quartersChange.innerHTML = (quarters);

    //remainder of cents after quarters is subracted
    changeLeft = Math.round(100*(cents%.25))/100;
    console.log("change left", changeLeft);

    //how many dimes in change
    dimes = parseInt(changeLeft/.1);
    console.log("dimes", dimes);

    //output for how many dimes in change after button is clicked 
    let dimesChange = document.querySelector("#dimes-output");
    dimesChange.innerHTML = (dimes);
    
    //remainder of cents after dimes is subracted
    changeLeft = Math.round(100*(changeLeft%.1))/100;
    console.log("change left", changeLeft);

    //how many nickels in change
    nickels = parseInt(changeLeft/.05);
    console.log("nickels", nickels);

    //output for how many nickels in change after button is clicked 
    let nickelsChange = document.querySelector("#nickels-output");
    nickelsChange.innerHTML = (nickels);

    //remainder of cents after nickels is subracted
    changeLeft = Math.round(100*(changeLeft%.05))/100;
    console.log("change left", changeLeft);

    //how many pennies in change
    pennies = parseInt(changeLeft/.01);
    console.log("pennies", pennies);

    //output for how many pennies in change after button is clicked 
    let penniesChange = document.querySelector("#pennies-output");
    penniesChange.innerHTML = (pennies);

    //input amount due for sale and amount recieved from customer
    //output amount of change in dollars (whole integer) and cents rounded to nearest tenth decimal place
    //amount of change in quarters (cents/.25), nickels(remainder of cents/.05), dimes(remainder of cents/.1), and pennies(ramainder of cents/.01)


}

function handleClickEvent(e) {
   
    // Create a variable called amountReceived and assign value of amount received. 
    var amountReceived = document.getElementById("amount-received").value;
    

    // Create a variable called amountDue and assign the value of the amount due. 
    var amountDue = document.getElementById("amount-due").value;

   // Create a variable called result and assign the value of the new calculated weight. 
   //shows output in console
   var result = calculateChange(amountReceived, amountDue);

   // Shows result once button is clicked 
   document.getElementById("calculate-change").click();

   //var myButtons = document.querySelectorAll('.button');
   
} 
