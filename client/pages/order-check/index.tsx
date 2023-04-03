import { useRouter } from "next/router";
import BackButton from "../../src/components/commons/button/BackButton";
import { useCart } from "../../src/components/commons/cart/CartContext";
import OrderItem from "../../src/components/units/order/OrderItem";
import {
  TotalPriceWrapper,
  TotalPrice,
  CheckoutButton,
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
      <BackButton />
      <div>CheckOrderPage</div>
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
      <TotalPriceWrapper>
        <TotalPrice>Total: ${calculateTotalPrice()}</TotalPrice>
        <CheckoutButton onClick={onClickMoveToOrderComplete}>
          결제....
        </CheckoutButton>
      </TotalPriceWrapper>
    </>
  );
}
