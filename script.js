const testButton = document.getElementById("testButton");
const message = document.getElementById("message");

testButton.addEventListener("click", function () {
message.textContent = "SUCCESS! All systems are connected.";
testButton.textContent = "IT WORKS!";

document.body.classList.add("activated");

});