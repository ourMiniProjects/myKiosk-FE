import { useRouter } from "next/router";
import { useCart } from "../../src/components/commons/cart/CartContext";
import OrderItem from "../../src/components/units/order/OrderItem";
import {
  TotalPriceWrapper,
  TotalPrice,
  CheckoutButton,
  OrderItemContainer,
  CardIcon,
} from "./order-check.styles";

export default function OrderCheckPage() {
  const router = useRouter();
  const { items } = useCart();

  const onClickMoveToOrderComplete = async () => {
    await router.push("/order-complete");
  };

  const calculateTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.price * item.amount, 0);
  };

  return (
    <>
      <OrderItemContainer>
        {items.map((item) => (
          <OrderItem
            key={item.id}
            id={item.id}
            menuName={item.menuName}
            amount={item.amount}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </OrderItemContainer>
      <TotalPriceWrapper>
        <TotalPrice>
          Total : ₩ {calculateTotalPrice().toLocaleString()}
        </TotalPrice>
        <CheckoutButton onClick={onClickMoveToOrderComplete}>
          <CardIcon />
          결제하기
        </CheckoutButton>
      </TotalPriceWrapper>
    </>
  );
}
