import React from 'react';
import './App.css';
import $ from 'jquery'




function App() {
  return (
    <div id='conatiner'>
      <div id='image'></div>
        <div id='quote-box'>
          <div id='quotesInfo'>
            <p id='text'></p>
            <p id='author'></p>
            <div class='buttons'>
              <button id='new-quote'><em>New Quote</em></button>
              <a id='tweet-quote' href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" target='_blank'>
              <li><span><i class='fa fa-twitter fa-3x'></i></span></li>
              </a>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default App;

$("body").css("font-family", "Heuretice");
$("#new-quote").css("border-radius", "4%");
$("#quote-box").css("border-radius", "4%");
$("body").css("font-size", "1.5em");

let backImages = [
  "https://images.unsplash.com/photo-1591693971635-7541a48405fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1588450308351-714b3858d37d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
  "https://images.unsplash.com/photo-1567803915757-502f6a92fedb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1567875646289-adfd6d899664?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=613&q=80",
  "https://images.unsplash.com/photo-1584197015778-02d47f803d5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1585338129664-c573a9554a61?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1587575171939-19180d5a9ebd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1560966638-744df0fe1249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  "https://images.unsplash.com/photo-1585338129687-ce6e9bc2af63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  " https://images.unsplash.com/photo-1585337931979-fab8f78ff2d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=562&q=80",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
  "https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80",
  "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1442850473887-0fb77cd0b337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1516700675895-b2e35cae333c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
  "https://images.unsplash.com/photo-1501977320585-f072ceeb7a09?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
  "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
  "https://images.unsplash.com/reserve/O7A9fAvYSXC7NTdz8gLQ_IMGP1039.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
"https://images.unsplash.com/40/whtXWmDGTTuddi1ncK5v_IMG_0097.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
"https://images.unsplash.com/photo-1571348524652-bf638b78b4da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80",
"https://images.unsplash.com/photo-1552922554-a6e96ef985a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
"https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
"https://images.unsplash.com/photo-1504807417934-b7fdec306bfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1105&q=80",
];

var im = "./quote-machine/src/bristolBalloons.jpg";
var usedIndex = [];
function setImage() {
  let randomIndex = Math.floor(Math.random() * backImages.length);
  let randomImage = backImages[randomIndex];
  $("#image").animate({ opacity: 0 }, 25, function () {
    $("#image").css("background-image", "url(\""+randomImage+"\")");
    $("#image").css("background-repeat", "no-repeat");
    $("#image").css("background-size", "cover");
    $(this).animate({ opacity: 1 });
  });
}

let quotes;

function getQuotes() {
  return $.ajax({
    headers: { Accept: "application/json" },
    url:
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
    success: function (result) {
      if (typeof result === "string") {
        quotes = JSON.parse(result);
      }
    }
  });
}
function randomQuote() {
  let a = quotes.quotes[Math.floor(Math.random() * 100)];
  return quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
}

function setQuote() {
  let newQuote = randomQuote();
  let quote = newQuote.quote;
  let author = newQuote.author;

  $("#quote-box").animate({ opacity: 0 }, 400, function () {
    $(this).animate({ opacity: 0.8 }, 400);
    $("#text").text(quote);
    $("#author").html("<p><em>" + author + "</em></p>");
  });
}

$(document).ready(function () {
  getQuotes().then(() => {
    setQuote();
    setImage();
  });
  $("#new-quote").on("click", setQuote);
  $("#new-quote").on("click", setImage);
});

