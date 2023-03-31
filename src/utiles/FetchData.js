export const exercisesOptions  = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'dc775bed3amsh1e1d8271255278dp1fb449jsn396d3955819f',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData =async(url,options)=>
{
const response = await fetch(url, options)
const data = await response.json()
// .catch(error=>console.log(error))
 return data;
}