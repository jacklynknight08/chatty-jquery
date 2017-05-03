"use strict";
console.log("main.js");

var Chatty = (function(){ //This initializes the Chatty object
  var messageArray; //empty variable, private to Chatty
  return {
    loadMessage : function(populateFromDomJs){ //this becomes a method for Chatty
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function(){ //this is where it sets the message
        messageArray = JSON.parse(this.responseText);
        // Above line using "this" is equivalent to writing:
        // messageArray = JSON.parse(loader.responseText);
        populateFromDomJs(messageArray);
      });
      loader.open("GET", "messages.json");
      loader.send();
    },
    getMessage : function(){ //this is the getter that takes the private message (also a method)
      return messageArray;
    }
  }
})(Chatty || {});

