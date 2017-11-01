function obfuscate(string){
  var newString = "";
  for (var i = 0; i < string.length; i++){
    if (string[i] === 'a'){
    newString += 4;
    }
    else if (string [i] === 'e'){
      newString += 3;
    }
    else if (string [i] === 'o'){
      newString += 0;
    }
    else if (string[i] === 'l'){
      newString += 1;
    }
    else {
      newString += string[i];
    }
  }
  return newString;


}

console.log(obfuscate(process.argv[2]));

//  string[i;
//     console.log(string[i] == 'a');
//     if (string[i] == 'a'){
//       string[i] = '4';

//     }
//   }
//   return string;
// }
// console.log (obfuscate("hand"));

