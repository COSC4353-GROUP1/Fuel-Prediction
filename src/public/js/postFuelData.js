
const User = require('../models/userModel');
let originUserInput = {};
let userInput = {};

function getUserInput() {
    $("#gallons").bind("change",function(){
        userInput.gallons = $(this).val();    
    });
    $("#delivery_address").bind("change",function(){
        userInput.delivery_address = $(this).val();
    })
    $("#delivery_date").bind("change",function(){
        userInput.delivery_date = $(this).val();
    })
}
function callPostUserInput() {
    $.ajax({
        url: "/fuelPredictionData",
        type: "post",
        data: userInput,
        success: function(){
            //update origin UserInfo
            originUserInput = Object.assign(originUserInput, userInput);
            console.log(originUserInput);
            
        },
        error: function(error){
            // display error
            console.log(error);
            
        }

    }) 
}

$(function() {
    originUserInput = {
        gallons: $("#gallons").val(),
        delivery_address: $("#delivery_address").val(),
        delivery_date: $("#delivery_date").val(),  
    }
    console.log(originUserInput);
    getUserInput()
    $("#get_quote").bind("click",function(){
        if($.isEmptyObject(userInput)){
            alertify.notify("you need to make some changes before updating your information","error",7);
            return false;
        }

        if(!$.isEmptyObject(userInput)) {
            callPostUserInput();
        }
        
    });

    // $("#get_quote").on("click",function(){

    //    $("#gallons").val(function() {
    //     return originUserInput.gallons})
    //    $("#delivery_address").val(function(){
    //     return originUserInput.delivery_address})
    //    $("#delivery_date").val(function() {
    //     return originUserInput.delivery_date })
    // });
})




// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('form').addEventListener('submit', async function(e) {
//         e.preventDefault();
  
//         var gallons = document.getElementById('gallons').value;
//         var address = document.getElementById('address').value;
//         var deliveryDate = document.getElementById('delivery-date').value;
//         var suggestedPrice = document.getElementById('suggested-price').value;
//         var totalDue = gallons * suggestedPrice;
  
//         document.getElementById('total-due').value = totalDue.toFixed(2);
//         addToHistory(gallons, suggestedPrice, totalDue);
  
//         try {
//             const response = await fetch('/fuelPredictionData', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     gallons,
//                     address,
//                     deliveryDate,
//                     suggestedPrice,
//                     totalDue
//                 }),
//             });
//             /*let quoteItem ={
//               gallons: gallons,
//               deliveryAddress: address,
//               deliveryDate: deliveryDate,
//               suggestedPrice: suggestedPrice,
//               totalCost: totalDue
//             };
//             let quote = await QuoteModel.createNew(quoteItem)
//             resolve(quote.sucess)*/
  
//             const data = await response.json();
//             if (!data.success) {
//                 console.error('Error storing data:', data.message);
//             }
//         } catch (error) {
//             console.error('Fetch error:', error);
//         }
//     });
//   });
  
//   function addToHistory(gallons, pricePerGallon, totalDue) {
//     var table = document.querySelector("#History tbody");
//     var row = table.insertRow();
//     row.insertCell(0).innerText = gallons;
//     row.insertCell(1).innerText = document.getElementById('address').value;
//     row.insertCell(2).innerText = document.getElementById('delivery-date').value;
//     row.insertCell(3).innerText = `$${pricePerGallon}`;
//     row.insertCell(4).innerText = `$${totalDue.toFixed(2)}`;
//   }
  
//   /*inState: in-state or out-of-state boolean for client location
//   isCustomer: boolean, does the customer have previous purchaces?(fuel quote history)
//   gallons: amount of gallons being requested by client, int, pull from fuel quote form
//   profitMargin: further details later, as this likely needs to be calculated with information we dont have*/
//   function calcPrice(inState, isCustomer, gallons, profitMargin){
//       //temp price
//       let suggestedPrice=0;
//       //various calculations to find suggested price based on parameters
//       return suggestedPrice;
//   }