"use strict";

var Chatty = (function(){
  var messageArray;
  return {
    loadMessage : function(){
      console.log("load message running");
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function(){
        messageArray = JSON.parse(this.responseText);
        console.log("originalChatty", messageArray);
      });
      loader.open("GET", "messages.json");
      loader.send();
    },
    getMessage : function(){
      return messageArray;
    }
  }
})();
Chatty.loadMessage()
// .loadChatty();
//   var messageRequest = new XMLHttpRequest();
//   messageRequest.addEventListener("load", messageRequestComplete);
//   messageRequest.addEventListener("error", messageRequestFailed);

//   function messageRequestComplete(event){
//     console.log("message Data");
//     var messageData = JSON.parse(event.target.responseText);
//     console.log("The message data", messageData);
//     showMessageData(messageData);
//   }

//   function messageRequestFailed(event){
//     console.log("error");
//   }

//   messageRequest.open("GET", "messages.json");
//   console.log("Get message data");

//   messageRequest.send();

//   function showMessageData(messageData){
//     var messageDIV = document.getElementById("output");
//     var data = "";
//     var info = messageData.message_info;
//     for (var i = 0; i < info.length; i++){
//       data += `<div>${info[i].message}</div>`
//     }
//     messageDIV.innerHTML += messageData;
//   }



// })(Chatty || {});
