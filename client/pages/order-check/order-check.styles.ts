import styled from 'styled-components';

export const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: red; */
  width: 85%;
  height: 60px;

  padding: 8px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const TotalPrice = styled.h2`
  width: 75%;
  height: 50px;
  display: flex;
  margin-left: -8px;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 5px 5px 10px #bebebe, 5px 5px 5px #ffffff;

  border: 1px solid #bebebe;
  border-radius: 10px;
  background-color: #bebebe;
  color: white;
  padding: 8px;
`;

export const CheckoutButton = styled.h4`
  height: 50px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -8px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: #f7ce5ccf;
  color: black;
  border: none;
  padding: 8px;
  box-shadow: 5px 5px 10px #bebebe, 5px 5px 5px #ffffff;
`;
