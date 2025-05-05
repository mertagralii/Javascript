const moves = ["taş", "kağıt", "makas"];

let playerScore = 0;
let cpuScore = 0;

function play(playerMove) {
  const cpuMove = moves[Math.floor(Math.random() * 3)];
  console.clear();
  console.log(`Oyuncu: ${playerMove} | Bilgisayar: ${cpuMove}`);

  if (cpuMove === playerMove) {
    console.log("Berabere");
  } else if (
    (playerMove === "taş" && cpuMove === "makas") ||
    (playerMove === "kağıt" && cpuMove === "taş") ||
    (playerMove === "makas" && cpuMove === "kağıt")
  ) {
    console.log("Kazanan Oyuncu");
    playerScore++;
  } else {
    console.log("Kazanan Bilgisayar");
    cpuScore++;
  }

  console.log(`Skor | Oyuncu: ${playerScore} - Bilgisayar: ${cpuScore}`);
}

// Kullanım için örnek arrow fonksiyonlar:
const playStone = () => play("taş");
const playPaper = () => play("kağıt");
const playScissors = () => play("makas");
