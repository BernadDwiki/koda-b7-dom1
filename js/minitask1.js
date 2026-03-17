function celciusToFahrenheit(celcius){
    return `${(celcius * 9/5 + 32)} F`
}

const input = document.querySelector('#c1');
const output = document.querySelector('#output')

/*
input.addEventListener('change', (event) =>{
    const celcius = event.target.value;
    const hasil = celciusToFahrenheit(celcius);

    output.textContent = hasil;
    console.log(hasil);
})
*/

input.onchange = function(event){
    const celcius = event.target.value;
    const hasil = celciusToFahrenheit(celcius);

    output.textContent = hasil;
    console.log(hasil);
}