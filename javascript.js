function newWord(){
  var randomNumber = Math.floor(Math.random()*(words.length));
  document.getElementById("wordDisplay").innerHTML = words[randomNumber];
}

var words = ["Write down 5 things that make you happy",
"Put your phone out of reach for one hour",
"Take a bath - bubbles and all",
"List three things you appreciate about yourself",
"Do something outside",
"Meditate for 10 minutes",
"Journal about a dream or goal — no matter how unrealistic",
"Organize one small part of your living space",
"Go to the library",
"Go to the park",
"Take yourself out to a nice dinner",
"Put on a facemask",
"Listen to relaxing music - like bossa nova",
"Go for a long walk",]
