/*
let boton= document.getElementById("calcular");
let valorventa=ducument.getElementById("valorventa");
let ganancias=ducument.getElementById("ganancias");
let iva=ducument.getElementById("valorIva").value;
boton.addEventListener('click',calucularValorventaGanancias());

function calucularValorventaGanancias(){
    let valorCompra=parseFloat(document.getElementById('valorCompra').value);
    let porcentajeGanancia=parseFloat(document.getElementById('porcentajeGanancia').value);
    vIva=parseFloat(document.getElementById('valorIva').value);
    let resultado=valorCompra*(iva/100);
    let resultado2=valorCompra*(porcentajeGanancia/100);
    valorventa.innerHTML= `el resultado es:${resultado} `;
    valorventa.innerHTML= `el resultado es:${resultado} `;
    
}
function capturar(){
var va=document.getElementById("valorCompra").value;
alert (valorCompra)

    
}
*/
function calcular(){
    
    var vcompra = document.f1.vcompra.value;
    var uganancia = document.f1.uganancia.value;
    var iva =document.f1.iva.value
    var rganacias = document.f1.valorventa.value;
    var vventas=document.f1.ganancias.value;
    
   rganacias=parseFloat(vcompra)*(parseFloat((uganancia)/100));
   document.f1.ganancias.value=rganacias;
   vventas=parseFloat(vcompra)*(parseFloat(iva)/100)+parseFloat(vcompra)+parseFloat(rganacias);
   document.f1.valorventa.value=vventas;
}   
