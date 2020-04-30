import React from 'react';
import { Wrapper,
         Container,
         CountriesContainer } from './components/StyledComponents/Frames';

import { CountryButton } from './components';

import { useActions } from '../../hooks';
import { countriesActions } from '../../state/ducks/countries';

const Countries = () => {
  const { selectCountry } = useActions(countriesActions);

    return (
          <Wrapper>
            <Container>            
              <CountriesContainer>
                <CountryButton />
              </CountriesContainer>
            </Container>
          </Wrapper> 
    );
};

Countries.propTypes = {};

export default Countries;
