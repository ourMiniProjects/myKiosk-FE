import styled from "styled-components";

export const OrderItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 75px;
  border: 1px solid #bebebe7d;
  border-radius: 10px;
  padding: 8px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  box-shadow: 5px 5px 10px #bebebe, 5px 5px 5px #ffffff;
  font-size: 13pt;
`;

export const OrderItemImage = styled.img`
  height: 100%;
  width: 100px;
  margin-left: 40px;

  object-fit: cover;
  flex-shrink: 0;
`;

export const OrderItemInfo = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
  margin-left: 110px;
`;
