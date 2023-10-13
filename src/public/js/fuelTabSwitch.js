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
}
