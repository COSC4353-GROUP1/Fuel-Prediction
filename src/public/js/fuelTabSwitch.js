import UserModel from "./../models/quoteModel"

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

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
      var gallons = document.getElementById('gallons').value;
      var suggestedPrice = document.getElementById('suggested-price').value;
      var totalDue = gallons * suggestedPrice;

      document.getElementById('total-due').value = totalDue.toFixed(2);
      addToHistory(gallons, suggestedPrice, totalDue);
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
/*
  //temp till we calculate
  let profitMargin=0;
  //Create form
  let quoteForm = {
    inState: inState,
    existingCustomer: isCustomer,
    gallons: gallons,
    profitMargin: profitMargin,
    quote: calcPrice(inState, isCustomer, gallons, profitMargin)
  };
  //Insert form to db
  const result = quoteModel.createNew(quoteForm);*/
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
/*module.exports = {
  addToHistory: addToHistory
}*/