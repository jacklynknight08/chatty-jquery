console.log("chatty hello");

// var clearButton = document.getElementById("clearAll");
//   for (var i = 0; i < clearButton.length; i++) {
//     clearButton[i].addEventListener("click", function(){
//   })
// }

var inputField = document.getElementById("inputField")
inputField.addEventListener("keyup", function(){
  if(event.charcode === 13){
// take the inputfield.value put it into a JSON file as an object
  // add input to json file then re-read the json file and return as an array
  // write that array to DOM
}
})

let addMessage = document.getElementById("inputField");
addMessage.addEventListener("click", function(){
  Chatty.addMessage(inputField.value);
})
