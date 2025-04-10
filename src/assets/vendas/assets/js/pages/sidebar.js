// assets/js/loadSidebar.js
document.addEventListener("DOMContentLoaded", function () {
  const sidebarElement = document.querySelector("#sidebar");
  if (sidebarElement) {
    // Ajuste o caminho relativo para o arquivo sidebar.html
    fetch("../../partials/sidebar.html")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        sidebarElement.innerHTML = data;
      })
      .catch(error => console.error('Error loading the sidebar:', error));
  } else {
    console.error('Sidebar element not found');
  }
});
