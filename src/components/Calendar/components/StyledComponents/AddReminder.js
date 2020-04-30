import styled from 'styled-components';

export const Button = styled.a`
  background-color: #3273dc;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  cursor: pointer;
  padding-bottom: calc(0.375em - 1px);
  padding-left: 0.75em;
  padding-right: 0.75em;
  padding-top: calc(0.375em - 1px);
  text-align: center;
  white-space: nowrap;
  float: right;  
  align-items: center;  
  display: inline-flex;
  height: 2.25em;
  line-height: 1.5;
  font-size: 1.3vw;
  position: fixed;
  bottom: 20px;
  right: 20px;
  -webkit-appearance: none;
`;

export const Notification = styled.div`
  background-color: whitesmoke;
  border-radius: 4px;
  padding: 1.25rem 2.5rem 1.25rem 1.5rem;
  position: relative;
`;

export const HorisontalField = styled.div`
  margin-bottom: 0.75rem;
`;

export const GroupedField = styled.div`
  justify-content: flex-end;
  display: flex;
  box-sizing: inherit;
  margin-bottom: 0;
`;

export const FieldLabel = styled.div`
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 700;
`;

export const Field = styled.div`
  box-sizing: inherit;
`;

export const FieldBody = styled.div`
  box-sizing: inherit;
`;

export const Input = styled.input`
  
`;

export const Control = styled.div`
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;
  margin-right: 0.75rem;
  flex-shrink: 0;
`;