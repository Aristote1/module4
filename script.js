
(function(names){
  for (name in names) {
  var firstLetter = names[name].charAt(0);
  firstLetter = firstLetter.toLowerCase();
  
  if (firstLetter == 'j') {
    byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}
})(names);
