import styled from 'styled-components';

export const CalendarContainer = styled.div`
  max-width: 1800px;
  display: block;
  width: 100vw;
  border: solid 1px #EFEFEF;
  margin: 40px auto;
  box-shadow: 0 0 15px 0 lightgrey;
  text-align: center;
`;

export const Section = styled.section`
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 80vw;
`;

export const CalendarHeader = styled.div`
  margin: 0 auto;
`;

export const TopRow = styled.div`
  background-color: #7a7a7a;
  color: white;
  text-transform: uppercase;
  display: flex;
  font-weight: 600;
  font-size: 2vw;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.span`
  height: 3rem;
  width: 3rem;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  font-style: inherit;
  font-weight: inherit;
  cursor: pointer;
  font-size: 1vw;
`;

export const Link = styled.a`
  color: white;
  font-size: 1.3vw;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
`;

export const Days = styled.div`
  background-color: #92BB24;
  color: white;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  cursor: default;
  font-size: 1vw;
  padding: 5px 0px;
`;
