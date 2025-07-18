// Wrap in an IIFE and attach to window
(function (window) {
  var speakWord = "Good Bye";

  var byeSpeaker = {};
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;
})(window);
