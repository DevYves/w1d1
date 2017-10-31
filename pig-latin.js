var sentance = "I am testing Pig Latin";
var sentanceArray = sentance.split(' ');
var pigSentance = "";

function pigLatin(string){
  var pigWord = "";
  // do the stuff
  for (var i = 1; i < string.length; i++) {
    pigWord += string[i];
  }
  // add the last lettwe
  pigWord += string[0]
  // add ay
  pigWord += "ay ";

  return pigWord;
}

sentanceArray.forEach(function(word){
  pigSentance += pigLatin(word);
});

console.log(pigSentance);