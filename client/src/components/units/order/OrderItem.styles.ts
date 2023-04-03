import styled from 'styled-components';

export const OrderItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  height: 100px;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 8px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
`;

export const OrderItemImage = styled.img`
  height: 100%;
  object-fit: cover;
  margin-right: 16px;
`;

export const OrderItemInfo = styled.div`
  margin-right: 16px;
`;
