"use Strict";
console.log("add js works");

Chatty = (function(oldChatty){

	oldChatty.addMessage = function(newMessage) {
		var privateArray = [];
		console.log("privateArray", privateArray);
		privateArray.push(newMessage);
		populate(privateArray);
	}
	return oldChatty;
})(Chatty || {});
