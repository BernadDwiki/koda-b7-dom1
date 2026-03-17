const box1 = document.getElementById('box-1')
const box2 = document.getElementById('box-2')
const box3 = document.getElementById('box-3')

box1.style.backgroundColor = "red";
setTimeout(()=>{
    box1.style.backgroundColor = "white";
    box2.style.backgroundColor = "yellow";
},3000)

setTimeout(()=>{
    box2.style.backgroundColor = "white";
    box3.style.backgroundColor = "lightgreen";
},5000)

setTimeout(()=>{
    box3.style.backgroundColor = "white";
    box1.style.backgroundColor = "red";
},8000)
