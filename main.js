async function diceRoll () {
try { 
  const response = await new Promise((resolve) => {
  const roll = Math.floor(Math.random() * 6) + 1;
  resolve(roll);
});
  document.getElementById("die").value = response;
  document.getElementById("roll").focus();
} catch (e) {
  console.log("There was a problem rolling the die.")
  }
}
