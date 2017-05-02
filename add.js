"use Strict";
console.log("add js works");

Chatty = (function(oldChatty){
	var privateArray = [];

	oldChatty.addMessage = function(newMessage) {
		console.log("newMessage", newMessage);
		privateArray.push(newMessage);
		populate(privateArray);
	}
	return oldChatty;
})(Chatty || {});
