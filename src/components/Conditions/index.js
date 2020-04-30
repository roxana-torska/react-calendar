import React from 'react';
import classes from './Conditions.modules.scss';

const conditions = (props) => {
    return (
        <div className={classes.Wrapper}>

           {props.error && <small className={classes.Small}>Please enter a valid country code.</small>}

           {props.loading && <div className={classes.Loader} />}

           {props.responseObj.cod === 200 ?
           <div>
               <p><strong>{props.responseObj.name}</strong></p>
           </div>
       : null
       }
       </div>
   )
}


export default conditions;
