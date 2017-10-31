function reverse(string){
  var x = '';
  for (var i = string.length - 1; i >= 0; i--){
    if (string[i] === " "){
      x += '\n';
    } else {
        x += string[i];
      }
  }
  return x;
}

console.log(reverse("cat in the hat"));