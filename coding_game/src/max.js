function findMax(t){
  t.sort(function(a, b){return a - b});
  //console.log(t);
   
   console.log(t[t.length - 1]);
   let maxim = t[t.length - 1];
  return maxim;
}

findMax([15,10,20,5,4,6,18]);