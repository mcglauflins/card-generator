/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
  let symbol = document.querySelector(".symbol");
  let number = document.querySelector(".number");
  let upsidesymbol = document.querySelector(".upsidesymbol");
  let cardSymbol = ["♦", "♣", "♠", "♥"];
  let cardNumber = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let targetSymbol = Math.floor(Math.random() * cardSymbol.length);
  let targetNumber = Math.floor(Math.random() * cardNumber.length);
  number.innerHTML = `${cardNumber[targetNumber]}`;
  symbol.innerHTML = `${cardSymbol[targetSymbol]}`;
  upsidesymbol.innerHTML = `${cardSymbol[targetSymbol]}`;
};
