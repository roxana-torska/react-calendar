import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import useForceUpdate from 'use-force-update';

import CountrySelect from '../CountrySelect';
import { countriesArray } from '../Dictionary';
import { Wrapper, Container, Title } from '../StyledComponents/Frames';
import { PlusIcon,
         DeleteIcon,
         NamedButton,
         RemoveCountryButton,
         AddCountryButton } from '../StyledComponents/Buttons';

import { INITIAL_CODE_LIST, STORAGE_CODE_LIST, filterStorage } from '../../../../constants';         


const CountryButton = (props) => {

  const selectedCountry = useSelector(({ countries }) => countries.selectedCountry);
  
  if (localStorage.getItem('reloadkey') !== '1') {
      localStorage.setItem('reloadkey', '1');
      window.onload = () => { localStorage.setItem('storageCodeList', INITIAL_CODE_LIST) };
  }
//localStorage.setItem('storageCodeList', INITIAL_CODE_LIST);

  let countryCode;
  let itemIndex;

  const forceUpdate = useForceUpdate();
  
  STORAGE_CODE_LIST.forEach((item, index, id) => {    
    countryCode = item;
    id = item;
    itemIndex = index;
    console.log(countryCode, itemIndex, id);    
  });  

  let getCountryName = (countriesArray, countryCode) => {
    let i = countriesArray.length;
    
    while (i--) {
        if (countriesArray[i].code === countryCode) {
          return countriesArray[i].label;
        }
    }
  }

  
  let countryButton = (countryCode) => {
    return (
      <Container>
        <NamedButton key={countryCode}>{getCountryName(countriesArray, countryCode)}</NamedButton>
        <RemoveCountryButton key={countryCode} onClick={() => {filterStorage(countryCode);
        forceUpdate()}}><DeleteIcon /></RemoveCountryButton>
      </Container>
      )
  };

  let countryButtonList = [];

  STORAGE_CODE_LIST.forEach((countryCode) => {
    countryButtonList.push(countryButton(countryCode));  
  });

  const CountryList = ({ list }) => (
    <ul>
      {list.map((item)=> (
        <li key={item}>{item}</li>        
      ))}
    </ul>
  );

  if (STORAGE_CODE_LIST.length === 0) {

    return (
      <>
        <Wrapper>
          <Container>
            <Title>All countries have been deleted</Title>
            <CountrySelect />
            <AddCountryButton onClick={()=>forceUpdate()}>
              <PlusIcon />
            </AddCountryButton>
          </Container>  
        </Wrapper>
      </>
    );

  } else {
    return (
      <>
        <Wrapper>
          <CountryList list={countryButtonList} />          
          <Container>
            <CountrySelect/>
            <AddCountryButton onClick={()=>{forceUpdate()}}>
              <PlusIcon />
            </AddCountryButton>
          </Container>       
        </Wrapper>
      </>
    )
  }
};

CountryButton.propTypes = {
  countryButton: PropTypes.func.isRequired,
};

export default CountryButton;
