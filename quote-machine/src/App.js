import React from 'react';
import './App.css';
import $ from 'jquery'




function App() {
  return (
<div id='image'>
  <div id='quote-box'>
    <div id='quotesInfo'>
      <h2 id='text'></h2>
      <p id='author'></p>
    </div>
    <div class='buttons'>
      <button id='new-quote'><em>New Quote</em></button>

      <a id='tweet-quote' href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" target='_blank'>
        <li><span><i class='fa fa-twitter fa-3x'></i></span></li>
      </a>
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
  " https://images.unsplash.com/photo-1585337931979-fab8f78ff2d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
];
var usedIndex = [];
function setImage() {
  let randomIndex = Math.floor(Math.random() * backImages.length);
  let randomImage = backImages[randomIndex];
  $("#image").animate({ opacity: 0 }, 25, function () {
    $("#image").css("background-image", "url('" + randomImage + "')");
    $("#image").css("background-repeat", "no-repeat");
    $("#image").css("background-size", "cover");
    $(this).animate({ opacity: 0.9 });
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
    $(this).animate({ opacity: 0.9 }, 400);
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

