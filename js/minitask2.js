const redLight = document.getElementById('circle-1')
const yellowLight = document.getElementById('circle-2')
const greenLight = document.getElementById('circle-3')

/*
redLight.style.backgroundColor = "red";
setTimeout(()=>{
    redLight.style.backgroundColor = "black";
    yellowLight.style.backgroundColor = "yellow";
},3000)

setTimeout(()=>{
    yellowLight.style.backgroundColor = "black";
    greenLight.style.backgroundColor = "lightgreen";
},5000)

setTimeout(()=>{
    greenLight.style.backgroundColor = "black";
    redLight.style.backgroundColor = "red";
},8000)
*/

function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

async function jalankanProses() {
  redLight.style.backgroundColor = "red";
  
  await delay(3000); 
  
  redLight.style.backgroundColor = "black";
  yellowLight.style.backgroundColor = "yellow";

  await delay(2000);
  
  yellowLight.style.backgroundColor = "black";
  greenLight.style.backgroundColor = "lightgreen";

  await delay(3000);
  greenLight.style.backgroundColor = "black";
  redLight.style.backgroundColor = "red";
}

jalankanProses();