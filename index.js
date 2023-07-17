import cipher from './cipher.js';

const textArea = document.querySelector("#msg");
const offset = document.querySelector("#offset");
const adelanteBut = document.querySelector('#adelante_but');
const atrasBut = document.querySelector('#atras_but');
const cifrarBut = document.querySelector('#cifrar');
const descifrarBut = document.querySelector('#descifrar');
const msgBienvenida = "Ingrese el texto aquí...";

function iniciar(){
  textArea.value = msgBienvenida;
  offset.value = 13;
  cifrarBut.style.display = "block";
  descifrarBut.style.display = "none";
  atrasBut.style.visibility = "hidden";
}

function avanzar(){
  atrasBut.style.visibility = "visible";
  adelanteBut.style.visibility = "hidden";
  cifrarBut.style.display = "none";
  descifrarBut.style.display = "block";
  const fondoTextArea = document.querySelector('#data');
  fondoTextArea.style.backgroundImage = "url(img/encrypted.png)";
}

function retroceder(){
  atrasBut.style.visibility = "hidden";
  adelanteBut.style.visibility = "visible";
  cifrarBut.style.display = "block";
  descifrarBut.style.display = "none";
  const fondoTextArea = document.querySelector('#data');
  fondoTextArea.style.backgroundImage = "url(img/encrypt.png)";
}

//function validarTextoMsg(txt){
//  let temp = "";
//  if (txt === msgBienvenida){
//    alert("Debe ingresar un texto para cifrar");
//    return false;
//  } else if (txt !== null){
//    temp = txt;
//    temp = temp.replace(/\s+/g, '');
//    return /^[a-zA-Z]+$/.test(temp);
//  }
//}


function validarNumeroOffset(num){
  return (!(/^\d+$/.test(num))) ? false : ((parseInt(num)>0) ? true : false); 
}

function endecode(){
  const func = (cifrarBut.style.display !== "none") ? 0 : 1;
  const texto = textArea.value;
  const off = offset.value;
  if(typeof texto === "string" && texto !== ""){
    if(validarNumeroOffset(off)){
      //let res = "";
      switch (func){
      case 0:
        //res = cipher.encode(parseInt(off), texto);
        textArea.value = cipher.encode(parseInt(off), texto);
        avanzar();
        break;
      case 1:
        //res = cipher.decode(parseInt(off), texto);
        textArea.value = cipher.decode(parseInt(off), texto);
        retroceder();
        break;
      default:
        break;
      }
      //textArea.value = res;
    } else {
      alert("El valor de offset debe ser un número entero mayor que 0");
    }
  } else {
    alert("El texto a descifrar no debe contener la letra ñ, números ni caracteres especiales. Los espacios en blanco serán ignorados.");
  }
}

adelanteBut.addEventListener("click", avanzar);
atrasBut.addEventListener("click", retroceder);
cifrarBut.addEventListener("click", endecode);
descifrarBut.addEventListener("click", endecode);

iniciar();
