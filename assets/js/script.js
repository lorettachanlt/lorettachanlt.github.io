$(document).ready(function() {
    var count = 1;

    $("#generate-button").click(function () {
      var factDiv = document.getElementById("fact");
      var facts = [
      "I struggle to keep my eyes opened when being photographed.",
      "I was born in Hong Kong and raised in a small town outside London called High Wycombe.",
      "I speak cantonese, mandarin and un pocito de español.",
      "I like to sleep diagonally.",
      "I can type more than 100 words per minute."
      ]
      factDiv.innerHTML = facts[count];
      if (count >= facts.length - 1) {
        count = 0;
      } else {
        count ++; 
      }
    });

});