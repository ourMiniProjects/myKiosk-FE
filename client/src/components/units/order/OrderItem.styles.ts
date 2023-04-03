import styled from 'styled-components';

export const OrderItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  height: 100px;
  border: 1px solid #bebebe;
  border-radius: 10px;
  padding: 8px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  box-shadow: 5px 5px 10px #bebebe, 5px 5px 5px #ffffff;
`;

export const OrderItemImage = styled.img`
  height: 100%;
  object-fit: cover;
  margin-right: 16px;
`;

export const OrderItemInfo = styled.div`
  margin-right: 16px;
`;
