(function () {
  function openTab(event, tabIndex) {
    event.preventDefault();

    const tabButtons = document.querySelectorAll(".nav-button");
    const tabContents = document.querySelectorAll(".tabcontent");

    const switchTab = (tabIndex) => {
      tabContents.forEach((tabContent) => {
        tabContent.style.display = "none";
      });

      tabButtons.forEach((tabButton) => {
        tabButton.classList.remove("active");
      });

      tabContents[tabIndex].style.display = "block";
      tabButtons[tabIndex].classList.add("active");
    };

    tabButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        switchTab(index);
      });
    });

    switchTab(tabIndex);
  }

  window.openTab = openTab;
})();
