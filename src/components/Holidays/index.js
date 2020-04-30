import React, {useState} from 'react';
import Conditions from '../Conditions';

const Holidays = () => {
  let [responseObj, setResponseObj] = useState({});
  let [year, setYear] = useState('2020');
  let [countryCode] = useState('');
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);


  let uriEncodedCounrty = encodeURIComponent(countryCode);
  const apiUrl = process.env.REACT_APP_API_URL;  
  const requestUrl = `${apiUrl}/${year}/UA`;

  function sendRequest (url, body = null) {
    return fetch(url,
      {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": process.env.REACT_APP_X_RAPIDAPI_HOST,
          "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY
        }
      })
      .then(response => response.json())
  }
  sendRequest(requestUrl)

  .then(data => console.log(data))
  .then(data => data)
  .then(data => data.json())
  .then(response => {
    if (!response.ok) {
        throw new Error()
    }})
  .catch(err => console.log(err))

  return (
    <div>
        <Conditions
            responseObj={responseObj}
            error={error}
            loading={loading}
        />
        <div>{sendRequest}</div>
    </div>
  )
};

export default Holidays;
