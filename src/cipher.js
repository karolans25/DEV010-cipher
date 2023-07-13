// MAYÚSCULAS, Ñ = 165 
// minúsculas, ñ = 164
// numeros
//const min = 48, max = 57; // en ASCII
const min_M = 65, max_M = 90, min_m = 97, max_m = 122; // en ASCII

const alphabet_M = [], alphabet_m = [];

for(let i = min_M; i<=max_M; i++){
  alphabet_M.push(String.fromCharCode(i));
}

for(let i = min_m; i<=max_m; i++){
  alphabet_m.push(String.fromCharCode(i));
}

const cipher = {
  encode: function(offset, txt){
    let result = "", mod = 0;
    for (let i = 0; i < txt.length; i++){
      if (txt[i] === txt[i].toUpperCase()){
        mod = (alphabet_M.indexOf(txt[i])+parseInt(offset))%alphabet_M.length;
        result += alphabet_M[mod];
      } else if (txt[i] === txt[i].toLowerCase()){
        mod = (alphabet_m.indexOf(txt[i])+parseInt(offset))%alphabet_m.length;
        result += alphabet_m[mod];
      }
    }
    //console.log(result);
    return result;
  },

  decode: function(offset, txt){
    let result = "", mod = 0;
    for (let i = 0; i < txt.length; i++){
      if (txt[i] === txt[i].toUpperCase()){
        mod = alphabet_M.indexOf(txt[i])-parseInt(offset);
        if (mod < 0 && mod !== -26){
          mod = alphabet_M.length + mod%alphabet_M.length;
        } else {
          mod = 0;
        }
        result += alphabet_M[mod];
      } else if (txt[i] === txt[i].toLowerCase()){
        mod = alphabet_m.indexOf(txt[i])-parseInt(offset);
        if (mod < 0){
          mod = alphabet_m.length + mod;
        }
        result += alphabet_M[mod];
      }
    }
    //console.log(result);
    return result;
  }
}

export default cipher;