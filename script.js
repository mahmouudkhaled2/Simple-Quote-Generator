
var btn = document.getElementById('test');
var quoteText = document.getElementById('qoute-txt');
var author = document.getElementById('qoute-author');

  var previousRandom;
  var randomNumber; 

var quotes = [{
  quote: "It's not what happens to you, but how you react to it that matters.",
  author : "--Epictetus",
},
{
  quote: "The best revenge is massive success.",
  author : "--Frank Sinatra",
},
{
  quote: "You miss 100% of the shots you don't take.",
  author : "--Wayne Gretzy",
},
{
  quote: "Do not take life too seriously. You will not get out alive.",
  author : "--Elbert Hubbard",
},
{
  quote: "Resentment is like drinking poison and waiting for your enemies to die.",
  author : "--Nelson Mandela",
},
]

btn.onclick = function () {
  do {
    randomNumber = Math.floor(Math.random() * 5); 
  } while (randomNumber === previousRandom) {
    previousRandom = randomNumber;
  }

  for (var i = 0; i < quotes.length; i++) {
    if (i === randomNumber) {
      quoteText.textContent = '"' + quotes[i].quote + '"' ;
      author.textContent = quotes[i].author;
    }
  }
} 