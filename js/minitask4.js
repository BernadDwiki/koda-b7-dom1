const body = document.body;
const calculator = document.createElement("div");
calculator.className = "calculator";

const display = document.createElement("div")
display.className= "display";
const result = document.createElement("div")
result.className = "result";
result.innerText= "0";

display.appendChild(result);
calculator.appendChild(display);

const buttons = document.createElement("div")
buttons.className = "buttons";

const arrayIsi = ["x!", "(", ")", "%", 
    "AC", "Inv", "sin", "ln", "7", "8", "9", "÷", 
    "π", "cos", "log", "4", "5", "6", "×", "e", 
    "tan", "√", "1", "2", "3", "−", "Ans", "EXP", 
    "xʸ", "0", ".", "=", "+"]

const classes = [
  "sci", "operator", "operator", 
  "operator", "operator", "sci", "sci", "sci", "number", "number", "number", 
  "operator", "sci", "sci", "sci", "number", "number", "number", "operator", 
  "sci", "sci", "sci", "number", "number", "number", "operator", "sci", 
  "sci", "sci", "number", "number", "equal", "operator"
];

const div1 = document.createElement("div")
div1.className= "deg-rad";
const deg = document.createElement("button")
deg.innerText = "Deg";
const span = document.createElement("span")
span.innerText= "|";
const rad = document.createElement("button")
rad.innerText = "Rad";

div1.append(deg, span, rad);
buttons.appendChild(div1);

for(let i = 0; i < arrayIsi.length; i++){
    const button = document.createElement("button")
    button.innerText= arrayIsi[i];
    button.className = classes[i];
    buttons.appendChild(button)
}

calculator.appendChild(buttons)
body.appendChild(calculator)