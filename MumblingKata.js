function accum(str) {
	let newStrArr = [];
  
  for(let i = 0; i<str.length;i++){
  newStrArr.push(format(str[i], i + 1));
  }
  return newStrArr.join("-");
  
  }
  function format(str, index){
    let letter = str.toUpperCase();
    
    while(letter.length != index){
    letter += str.toLowerCase();
    }
    return letter;
    }