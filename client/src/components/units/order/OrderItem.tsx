// src/components/units/order/OrderItem.tsx
import {
  OrderItemWrapper,
  OrderItemImage,
  OrderItemInfo,
} from "./OrderItem.styles";

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
      <OrderItemInfo>수량: {amount}</OrderItemInfo>
      {/* <OrderItemInfo> ${price}</OrderItemInfo> */}
      <OrderItemInfo>￦ {(amount * price).toLocaleString()}</OrderItemInfo>
    </OrderItemWrapper>
  );
};

export default OrderItem;
