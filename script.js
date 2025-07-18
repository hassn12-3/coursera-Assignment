// Wrap everything in an IIFE
(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura"];

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(name); // from SpeakGoodBye.js
    } else {
      helloSpeaker.speak(name); // from SpeakHello.js
    }
  }
})();
