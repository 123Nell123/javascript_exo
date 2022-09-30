function logEvenNumbers(num){
myarray=[];
res = num ;

for(let i=1;i<num; i++){
  
    if (Number.isInteger(i/2))
        {
        myarray.push(i) ;
        }
    }
   

return myarray
}



module.exports = { logEvenNumbers

}