// Concatenate two arrays

const concatArr = (arr1: (String | number)[] , arr2: (String | number)[] ) => {
    return [...arr1, ...arr2];
  };
  
  // Add numbers in an array
  
  export const addArr = (arr: number[] ): number => {
    let total = 0;
    arr.forEach((x) => {
      total += x;
    });
    return total;
  };
  
  // Find the largest number in an array
  const lgNum = (arr:(string | number)[] ): number => {
    let largest: (String | number) = 0;
    arr.forEach((x) => {
      if (x > largest) {
        largest = x;
      }
    });
    return largest;
  };
  
  // Remove the 3rd item from an array
  const cut3 = (arr: (string | number)[]) => {
    arr.splice(2, 1);
    return arr;
  };

  
  export default  {
    concatArr, 
    addArr,
    lgNum,
    cut3,
  };
 