function show() {
    var buttontxt = document.getElementById("buttontxt");
    
    if (buttontxt.style.display === "block") {
        buttontxt.style.display = "none";
    }
        else {
            buttontxt.style.display = "block";
        }
}