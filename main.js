function showDots(roll) {
  for (let i = 1; i <= 6; i++) {
    document.querySelector(`.dice-dot${i}`).style.visibility = "hidden";
  }

  const patterns = {
    1: [5],
    2: [1,6],
    3: [1,5,6],
    4: [1,2,4,6],
    5: [1,2,4,5,6],
    6: [1,2,3,4,5,6]
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
