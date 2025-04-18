function loadMenu(language) {
    if (language="en"){
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
    }
    else if (language="el"){
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
    }
}
loadMenu(document.documentElement.lang);