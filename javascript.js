function newWord(){
  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("wordDisplay").innerHTML = words[randomNumber];
}

var words = ["Write down one thing to celebrate and let yourself feel that happiness",
"Put your phone out of reach for one hour", ]
