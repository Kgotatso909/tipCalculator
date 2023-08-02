const initialCostInput = document.getElementById("initial-cost");
const percentageInput = document.getElementById("percentage");
const calculateButton = document.getElementById("calculate");
const tipAmountDisplay = document.getElementById("tip-amount");

// Function to calculate and display the tip amount
function calculateTip() {
  const initialCost = parseFloat(initialCostInput.value);
  const percentage = parseFloat(percentageInput.value);

  if (isNaN(initialCost) || isNaN(percentage)) {
    tipAmountDisplay.textContent = "Please enter valid numbers.";
    return;
  }

  if (initialCost <= 0 || percentage <= 0) {
    tipAmountDisplay.textContent = "Initial cost and tip percentage must be greater than zero.";
    return;
  }

  const tipAmount = (initialCost * percentage) / 100;
  tipAmountDisplay.textContent = `Tip amount: $${tipAmount.toFixed(2)}`;
}

// Add click event listener to the "calculate" button
calculateButton.addEventListener("click", calculateTip);
