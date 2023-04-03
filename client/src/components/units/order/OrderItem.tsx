// src/components/units/order/OrderItem.tsx
import React from 'react';
import { OrderItemWrapper,OrderItemImage,OrderItemInfo } from './OrderItem.styles';
import { FaWonSign } from 'react-icons/fa';
interface OrderItemProps {
  id: number;
  menuName: string;
  amount: number;
  price: number;
  imageUrl: string;
}

const OrderItem: React.FC<OrderItemProps> = ({
  id,
  menuName,
  amount,
  price,
  imageUrl,
}) => {
  return (
    <OrderItemWrapper key={id}>
      <OrderItemImage src={imageUrl} alt={menuName} />
      <OrderItemInfo>{menuName}</OrderItemInfo>
      <OrderItemInfo>수량:{amount}</OrderItemInfo>
      {/* <OrderItemInfo> ${price}</OrderItemInfo> */}
      <OrderItemInfo> ￦{amount * price}</OrderItemInfo>
    </OrderItemWrapper>
    
  );
};

export default OrderItem;
