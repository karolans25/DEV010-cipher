import cipher from './cipher.js';

//CASO 1: Codificar
//let offset = 13, txt = "LAROSADEGUADALUPE";
//console.log(cipher.encode(offset, txt));

const offset = 33; 
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//alert(cipher.encode(offset, txt));
txt = "HIJKLMNOPQRSTUVWXYZABCDEFG";
//alert(cipher.decode(offset, txt));

//CASO 2: Decodificar
//let offset = 13, txt = "YNEBFNQRTHNQNYHCR";
//console.log(cipher.decode(13, "YNEBFNQRTHNQNYHCR"));

//CASO 3: Codificar y decodificar con distinto offset
//let offset = 5, txt = cipher.encode(offset, "LAROSADEGUADALUPE"));
//offset = 13;
//console.log(cipher.decode(offset, txt));
