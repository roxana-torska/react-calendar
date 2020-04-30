import styled from 'styled-components';
import { PlusCircle } from '@styled-icons/boxicons-solid/PlusCircle';
import { Delete } from '@styled-icons/typicons/Delete';

export const PlusIcon = styled(PlusCircle)`
  color: white;
`;

export const DeleteIcon = styled(Delete)`
  color: white;
`;

export const NamedButton = styled.span`    
  border: 2px solid #92BB24;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  color: #7a7a7a;   
  cursor: pointer;
  display: inline-block;
  height: 54px;
  width: 300px;    
  transition: 0.5s all ease-out;
  text-align: center;
  padding: 9px;
  font-size: 20px;
`;

export const RemoveCountryButton = styled.button`
  background-color: #7a7a7a;
  border: transparent;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  color: white;   
  cursor: pointer;
  height: 54px;
  width: 60px;
  position: relative;    
  transition: 0.5s all ease-out;
  bottom: 4px;
    
    &:hover {
      background-color: #ee2148;
    }
`;

export const AddCountryButton = styled.button`
  background-color: #92BB24;
  border: transparent;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  color: white;   
  cursor: pointer;
  height: 54px;
  width: 60px;    
  transition: 0.5s all ease-out;
  position: relative;
  bottom: 55px;
  left: 150px;

    &:hover {
      background-color: #3273dc;
    }
`;
