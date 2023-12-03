const min = 65, max = 90;

const alphabet = [];

for(let i = min; i<=max; i++){
  alphabet.push(String.fromCharCode(i));
}

const cipher = {
  encode: function(offset, txt){
    const temp = txt;
    let pos = 0, res = "";
    //temp = temp.replace(/\s+/g, '');
    if(typeof txt === "string"){
      if(Number.isInteger(offset)){
        temp.split("").forEach(function(item){
          if(/[a-zA-Z]/.test(item)){
            pos = (alphabet.indexOf(item.toUpperCase())+offset)%alphabet.length;
            (item === item.toUpperCase()) ? res += alphabet[pos] : res+= alphabet[pos].toLowerCase();
          } else {
            res += item;
          }
        });
        return res;
      } else {
        throw new TypeError("Ingresó un valor inválido");
      }
    } else {
      throw new TypeError("Ingresó un valor inválido");
    }
  },

  decode: function(offset, txt){
    const temp = txt;
    let pos = 0, res = "";
    if(typeof txt === "string"){
      if(Number.isInteger(offset)){
        temp.split("").forEach(function(item){
          if(/[a-zA-Z]/.test(item)){
            pos = (alphabet.indexOf(item.toUpperCase()) - offset);
            if (pos < 0){
              pos = (-1)*pos;
              pos = pos%alphabet.length;
              pos = alphabet.length - pos;
            } 
            if (pos === 26){
              pos = 0;
            }
            (item === item.toUpperCase()) ? res += alphabet[pos] : res+= alphabet[pos].toLowerCase();
          } else {
            res += item;
          }
        });
        return res;
      } else {
        throw new TypeError("Ingresó un valor inválido");
      }
    } else {
      throw new TypeError("Ingresó un valor inválido");
    }
  }
}

/*
let txt = "la Rosa@";
const offset = 13;
for (let i = 0; i< 2; i++){
  txt = cipher.encode(offset, txt);
  console.log(txt);
  txt = cipher.decode(offset, txt);
  console.log(txt);
}
*/

export default cipher;