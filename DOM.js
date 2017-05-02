console.log("DOM loaded");

var inputField = document.getElementById("inputField");
inputField.addEventListener("keyup", function(){
	console.log("keyup works", inputField);
	if(event.charcode == 13) {
		Chatty.addMessage(inputField.value);
	}
})

function populate (messages) {
	console.log("are they here", messages);
	var output = document.getElementById("output");
	for (var i = 0; i < messages.length; i++) {
		output.innerHTML += `<p>${messages[i]}<button class="delete-btns">Delete</button></p>`;
	}
	deleteButtons();
}

function deleteButtons () {
	var delBtn = document.getElementsByClassName("delete-btns");
	for (var j = 0; j < delBtn.length; j++) {
		delBtn[j].addEventListener("click", function(event){
			console.log("event", event);
			output.removeChild(event.target.closest("p"));
		})
	}
}
Chatty.loadMessage(populate);

