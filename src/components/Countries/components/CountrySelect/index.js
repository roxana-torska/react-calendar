import React, { useCallback, useMemo, useState } from 'react';
import PropTypes                                 from 'prop-types';
import { useSelector }                           from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

import { CODE_LIST, STORAGE_CODE_LIST, SELECTED_LIST } from '../../../../constants';


const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

const style = {
  width: '300px',
  left: '63px',
  position: 'relative'
}



const CountrySelect = (props) => {
  const { countrySelect } = props;
  const classes = useStyles();  
  let optionLabel = (option) => {

    return (SELECTED_LIST.push(option.code));
  };
  let optionCode = (option) => option.code;
  console.log(SELECTED_LIST);



  return (
    <Autocomplete
      id="country-select"
      style={style}
      options={CODE_LIST}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.label}
      getOptionSelected={(option, value) => value.code === option.code && !STORAGE_CODE_LIST.includes(value.code) ? (STORAGE_CODE_LIST.push(value.code)) && (localStorage.setItem('storageCodeList', STORAGE_CODE_LIST)) : false}
      renderOption={(option) => (
        <React.Fragment>
          {option.label}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
        />
      )}
    />
  );
}

export default CountrySelect;
