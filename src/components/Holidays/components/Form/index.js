import React, {useState} from 'react';
import classes from '../../Holidays.module.scss';

const Form = () => {
    let [countryCode, setCountryCode] = useState('');

return (
    <form>
        <input
            type="text"
            placeholder="Enter Country Code"
            maxLength="50"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            />
        <button className={classes.Button} type="submit">Set Country</button>
    </form>
  )
};

export default Form;
