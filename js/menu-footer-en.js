fetch("menu-en.html")
.then(response => response.text())
.then(data => {
    document.getElementById("menu-en").innerHTML = data;
})
.catch(error => console.error("Error loading menu:", error));

fetch("footer-en.html")
.then(response => response.text())
.then(data => {
    document.getElementById("footer-en").innerHTML = data;
})
.catch(error => console.error("Error loading footer:", error));

