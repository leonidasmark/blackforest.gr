fetch("menu-el.html")
.then(response => response.text())
.then(data => {
    document.getElementById("menu-el").innerHTML = data;
})
.catch(error => console.error("Error loading menu:", error));

fetch("footer-el.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer-el").innerHTML = data;
})
.catch(error => console.error("Error loading footer:", error));