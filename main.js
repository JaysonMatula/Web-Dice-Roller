function showDots(roll) {
  for (let i = 1; i <= 6; i++) {
    document.querySelector(`.dice-dot${i}`).style.visibility = "hidden";
  }

  const patterns = {
  1: [5],
  2: [1,9],
  3: [1,5,9],
  4: [1,3,7,9],
  5: [1,3,5,7,9],
  6: [1,3,4,6,7,9]
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
