const concat = (str1:string, str2:string) =>{
    return str1 + str2;
};

const capitalize = (str:String) => {
    const newStr = str.split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
    return newStr;
};

const upperCase = (str:String) => {
    return str.toUpperCase();
};

const lowerCase = (str:String) => {
    return str.toLowerCase();
};

/*
export  function concat;
export  function capitalize;   
export  function upperCase;
export  function lowerCase;     
*/

export default { concat, capitalize, upperCase , lowerCase };
