import QuoteModel from "./../models/quoteModel"

function openTab(evt, tabName) {
  var i, tabcontent, navbutton;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  navbutton = document.getElementsByClassName("nav-button");
  for (i = 0; i < navbutton.length; i++) {
      navbutton[i].style.backgroundColor = "";
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.style.backgroundColor = "#007bff";
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').addEventListener('submit', async function(e) {
      e.preventDefault();

      var gallons = document.getElementById('gallons').value;
      var address = document.getElementById('address').value;
      var deliveryDate = document.getElementById('delivery-date').value;
      var suggestedPrice = document.getElementById('suggested-price').value;
      var totalDue = gallons * suggestedPrice;

      document.getElementById('total-due').value = totalDue.toFixed(2);
      addToHistory(gallons, suggestedPrice, totalDue);

      try {
          const response = await fetch('/fuelPredictionData', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  gallons,
                  address,
                  deliveryDate,
                  suggestedPrice,
                  totalDue
              }),
          });
          /*let quoteItem ={
            gallons: gallons,
            deliveryAddress: address,
            deliveryDate: deliveryDate,
            suggestedPrice: suggestedPrice,
            totalCost: totalDue
          };
          let quote = await QuoteModel.createNew(quoteItem)
          resolve(quote.sucess)*/

          const data = await response.json();
          if (!data.success) {
              console.error('Error storing data:', data.message);
          }
      } catch (error) {
          console.error('Fetch error:', error);
      }
  });
});

function addToHistory(gallons, pricePerGallon, totalDue) {
  var table = document.querySelector("#History tbody");
  var row = table.insertRow();
  row.insertCell(0).innerText = gallons;
  row.insertCell(1).innerText = document.getElementById('address').value;
  row.insertCell(2).innerText = document.getElementById('delivery-date').value;
  row.insertCell(3).innerText = `$${pricePerGallon}`;
  row.insertCell(4).innerText = `$${totalDue.toFixed(2)}`;
}

/*inState: in-state or out-of-state boolean for client location
isCustomer: boolean, does the customer have previous purchaces?(fuel quote history)
gallons: amount of gallons being requested by client, int, pull from fuel quote form
profitMargin: further details later, as this likely needs to be calculated with information we dont have*/
function calcPrice(inState, isCustomer, gallons, profitMargin){
    //temp price
    let suggestedPrice=0;
    //various calculations to find suggested price based on parameters
    return suggestedPrice;
  }