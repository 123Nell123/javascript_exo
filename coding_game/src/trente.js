function calcultrente(myarray){
    let myarrayinf = []
    let combi =[]
    const myset = new Set();

// calculer la somme avec tout les elements
//1) sort
console.log("0: start", myarray);
 myarray.sort(function(a, b){return a-b});

console.log("1: sort", myarray);

/*
//2)enlevr les valeurs sup à 30
myarray.filter(inf30);

function inf30(myarray){
    for (let i=0; i++; i< myarray.length){
        if (myarray(i)< 30)
        {
        myarrayinf.push(i)
        return myarryinf ;
        }
    }
 
}
console.log("2  < 30", myarrayinf);
*/
console.log("myarray.lenght" , myarray.length );
//3) tant que le produit est plus petit que 30
for (let i=0;i< myarray.length; i++ )
{
   // console.log("boucle i");
    
    for (let j=0; j< myarray.length; j++)
    {
       // console.log("boucle j");
        for (let k=0; k< myarray.length; k++)
        {
        //console.log("myarray[i] , myarray[j] , myarray[k]", myarray[i] , myarray[j] , myarray[k]);
           if(( myarray[i] * myarray[j] * myarray[k]) == 30 )
           {
            combi.push(myarray[i],myarray[j],myarray[k],"..")
            //console.log(myarray[i],myarray[j],myarray[k])
            
           }

        }
    }
    
}

return combi

    //myarray.filter(somtrente);
/*
    function somtrente(myarray){
        return (
            myarray.reduce((prod ,num) => { sum * num})
        )
    }
*/
 
    
} 
    
    module.exports = { calcultrente
    
    }