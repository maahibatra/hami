accept.addEventListener("click", function() {
    msg.style.display = "block";
    confirmation.style.display = "none";
    pls.style.display = "none";
    check.style.display = "none";
});

deny.addEventListener("click", function() {
    pls.style.display = "block";
    check.style.display = "none";
})

deets.addEventListener("click", function() {
    pls.style.display = "none";
    check.style.display = "block";
})