const key = 'uaT01Ir78fxZUHwaEMdTeWRXoNOzSRvH' ;


const getweather = async (id) =>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0]

};


const getcity = async (city) =>{

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

getcity('Ghaziabad').then(data => {
      return getweather(data.Key);
  }).then(data => {
      console.log(data)
  }).catch(err => console.log(err));

  