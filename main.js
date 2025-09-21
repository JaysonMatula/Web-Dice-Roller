function showDots(roll) {
  for (let i = 1; i <= 7; i++) {
    const dot = document.querySelector(`.dice-dot${i}`);
    if(dot) dot.style.visibility = "hidden";
  }

const patterns = {
  1: [4],
  2: [1,7],
  3: [1,4,7],
  4: [1,2,6,7],
  5: [1,2,4,6,7],
  6: [1,2,3,5,6,7]
};

  patterns[roll].forEach(dotNum => {
    document.querySelector(`.dice-dot${dotNum}`).style.visibility = "visible";
  });
}

async function diceRoll () {
try { 
  const response = await new Promise((resolve) => {
  const roll = Math.floor(Math.random() * 6) + 1;
  resolve(roll);
});
  document.getElementById("die").value = response;
  showDots(response);
  document.getElementById("roll").focus();
} catch (e) {
  console.log("There was a problem rolling the die.")
  }
}
