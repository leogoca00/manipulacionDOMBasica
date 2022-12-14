const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const p = document.querySelector('#result');

form.addEventListener('submit', sumasInputValues) //cuando llamemos a la funcion se llama sin parentesis


function sumasInputValues(envent)
{
    console.log({event});
    event.preventDefault();
    const sumaInput = input1.value + input2.value;
    p.innerText = "Resultado " + sumaInput;

}