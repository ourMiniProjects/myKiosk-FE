import styled from "styled-components";
import { BsCreditCard } from "react-icons/bs";

export const OrderItemContainer = styled.div`
  height: 540px;
  padding: 20px 0px 60px 0px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 60px;
  margin: 10px auto 200px auto;
  padding: 10px;
`;

export const TotalPrice = styled.h2`
  width: 70%;
  height: 50px;
  display: flex;
  margin-left: -8px;
  padding: 10px 40px 10px 40px;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 5px 5px 10px #bebebe, 5px 5px 5px #ffffff;
  border-radius: 10px;
  background-color: #2a2a2aa3;
  color: white;
  letter-spacing: 1pt;
`;

export const CheckoutButton = styled.h4`
  height: 50px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -8px;
  padding: 10px 5px 10px 5px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #bebebe, 5px 5px 5px #ffffff;
  background-color: #f7cd5c;
  color: #252525;
  font-size: 18px;
  letter-spacing: 0.5pt;
  cursor: pointer;
`;

export const CardIcon = styled(BsCreditCard)`
  margin-right: 10px;
  font-size: 20px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 100px;
`;

export const CancelButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  color: #333;
`;
