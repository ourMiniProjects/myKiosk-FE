import styled from 'styled-components';
import { BsCart3 } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 780px;
  /* height: 40%; */
  padding: 60px 40px 80px 40px;
  margin: 10px;
  margin-bottom: 100px;
  color: black;
  border-radius: 20px;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  background-color: #f7cc5c;
  overflow: scroll;
`;

export const CartSelectedItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff40;
  border-radius: 20px;
  width: 70%;
  /* box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff; */

  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);

  padding: 20px;
  margin: 20px 15px 20px 15px;
`;

export const Title = styled.div`
  display: flex;
  width: 350px;
  /* padding: 10px; */
  font-size: 18pt;
  font-weight: 600;
  letter-spacing: 1px;
  color: #252525;
`;

export const CartIcon = styled(BsCart3)`
  margin-right: 10px;
  margin-left: 20px;
`;

export const CartTotal = styled.div`
  display: flex;
  /* position: absolute; */
  justify-content: center;
  align-items: center;
  background-color: #2a2a2aa3;
  border-radius: 20px;
  /* box-shadow: 15px 15px 30px #fde791, -15px -15px 30px #fde791; */
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
  width: 70%;
  padding: 20px;
  margin: 60px 15px 15px 15px;
  font-size: 16pt;
  letter-spacing: 1pt;
  color: white;
`;

export const CountButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 120%;
`;

export const CountButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff70;
  border-radius: 10px;
  width: 10px;
  height: 10px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  padding: 10px;
  cursor: pointer;
`;
