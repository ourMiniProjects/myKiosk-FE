// src/components/units/order/OrderItem.tsx
import React from 'react';
// import { OrderItemWrapper } from './OrderItem.styles';

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
    <div key={id}>
      <div src={imageUrl} alt={menuName} />
      <div>{menuName}</div>
      <div>{amount}</div>
      <div> ${price}</div>
      <div>: ${amount * price}</div>
    </div>
  );
};

export default OrderItem;
