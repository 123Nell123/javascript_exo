/** Use Axios to get data from restcountries api */
import axios from 'axios';

/** Use the free API https://restcountries.com/
 * You will use the following endpoints
 * https://restcountries.com/v2/name/${name} for countries by name
 * https://restcountries.com/v2/regionalbloc/${regionalbloc} for region blocks
 */
 
/** Create getCountry Function here */

async function  getCountry(pays: string){
    try{
    const getApi  = await axios(
        'https://restcountries.com/v2/name/${pays}');
        const data = getApi.data[0];
        
          //console.log(countries[0]);
          return  {
          capital: data.capital, 
          region: data.region,
          numericCode: data.numericCode
        }
    }
    catch{
        console.log("et non")
    }
}

 

/** Create a test for this getRegion function */
async function getRegionCountries(regionalbloc: string) {
  const getApi = await axios(
    'https://restcountries.com/v2/regionalbloc/${regionalbloc}'
  );
  const data = getApi.data;
  const countries = [];
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name);
  }
  return countries;
}

/** Create getRegionCapitals function here */
async function getRegionCapitals(regionalbloc: string) {
    const getApi = await axios(
      'https://restcountries.com/v2/regionalbloc/${regionalbloc}'
    );
    const data = getApi.data;
    const capitales = [];
    for (let i = 0; i < data.length; i++) {
        capitales.push(data[i].capital);
    }
    return capitales;
  }



export default {
  getCountry,
  getRegionCountries,
  getRegionCapitals
};

/*
let result = getCountry('France');
console.log(result);
*/