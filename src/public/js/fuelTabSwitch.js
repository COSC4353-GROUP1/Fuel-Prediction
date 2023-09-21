function openTab(){
    // Get tab container, tab buttons and tab content divs
  const tabButtons = document.querySelectorAll(".nav-button"); 
  const tabContents = document.querySelectorAll(".tabcontent");

  // Function to switch tab
  const switchTab = (tabIndex) => {
    // Hide all tab content divs
    tabContents.forEach(tabContent => {
      tabContent.style.display = "none";
    });
    
    // Remove 'active' class from all buttons
    tabButtons.forEach(tabButton => {
      tabButton.classList.remove("active");
    });

    // Show selected tab content div
    tabContents[tabIndex].style.display = "block";
    
    // Add 'active' class to selected button
    tabButtons[tabIndex].classList.add("active");
  }

  // Add click event to tab buttons
  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      switchTab(index);
    });
  });

  // Show first tab content by default
  switchTab(0);
}