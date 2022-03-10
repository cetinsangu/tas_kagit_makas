//tercih sözlüğü

const handOptions = {
  rock: "/assets/Rock.png",
  paper: "/assets/Paper.png",
  scissors: "/assets/Scissors.png",
};

//skor
let SCORE = 0;

//kullanıcı seçimi
const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};

//bilgisayar seçimi--RANDOM
const pickComputerHand = (hand) => {
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.trunc(Math.random() * hands.length)];

  document.getElementById("computerPickImage").src = handOptions[cpHand];

  referee(hand, cpHand);
};

//KAZANMA&KAYBETME KOŞUL DURUMU
const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("KAYBETTİN!");
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("KAZANDIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("BERABERE!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("KAZANDIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("KAYBETTİN!");
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("BERABERE!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("BERABERE!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("KAYBETTİN!");
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("KAZANDIN!");
    setScore(SCORE + 1);
  }
};

//TEKRAR BAŞLA BUTONU
const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
};

//KAZANMA KAYBETME YAZI DEĞİŞMİ
const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
};

//SKOR DEĞİŞİMİ
const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
};
