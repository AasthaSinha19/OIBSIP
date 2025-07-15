
function convertTemp() {
  const input = parseFloat(document.getElementById("inputTemp").value);
  const type = document.getElementById("conversionType").value;
  const outputField = document.getElementById("outputTemp");

  if (isNaN(input)) {
    outputField.value = "";
    return;
  }

  let result;

  switch (type) {
    case "CtoF":
      result = (input * 9 / 5) + 32;
      break;
    case "FtoC":
      result = (input - 32) * 5 / 9;
      break;
    case "CtoK":
      result = input + 273.15;
      break;
    case "KtoC":
      result = input - 273.15;
      break;
    case "FtoK":
      result = (input - 32) * 5 / 9 + 273.15;
      break;
    case "KtoF":
      result = (input - 273.15) * 9 / 5 + 32;
      break;
    default:
      result = "Invalid";
  }

  outputField.value = result.toFixed(2);
}


function resetFields() {
  document.getElementById("inputTemp").value = "";
  document.getElementById("outputTemp").value = "";
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

// Bubble Generator
const bubbleContainer = document.getElementById("bubble-container");

for (let i = 0; i < 30; i++) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.width = `${Math.random() * 8 + 4}px`;
  bubble.style.height = bubble.style.width;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
  bubble.style.animationDelay = `${Math.random() * 5}s`;
  bubbleContainer.appendChild(bubble);
}
