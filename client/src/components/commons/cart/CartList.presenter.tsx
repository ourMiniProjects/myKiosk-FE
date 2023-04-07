import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCart } from "./CartContext";
import CartMenu from "./CartMenu";
import {
  CartIcon,
  CartListBox,
  CartOrderButton,
  CartTotalPrice,
  CartWrapper,
  DeleteAllIcon,
  Title,
  TitleWapper,
} from "./CartList.styles";

export default function CartListUI() {
  const router = useRouter();

  const onClickMoveToOrder = () => {
    void router.push("/order-check");
  };

  const { items, clearCart } = useCart();
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.amount,
    0
  );

  const handleRemoveAllItems = () => {
    clearCart();
  };

  const cartListRef = useRef(null); // Create a ref to access the DOM element
  const [prevItemsLength, setPrevItemsLength] = useState(items.length);

  useEffect(() => {
    if (cartListRef.current && items.length > prevItemsLength) {
      cartListRef.current.scrollTop = cartListRef.current.scrollHeight;
    }
    setPrevItemsLength(items.length); // Update the previous items length
  }, [items]);

  return (
    <>
      <CartWrapper>
        <TitleWapper>
          <Title>
            <CartIcon />
            장바구니
          </Title>
          <DeleteAllIcon onClick={handleRemoveAllItems} />
        </TitleWapper>
        <CartListBox>
          <CartMenu />
        </CartListBox>
        <CartTotalPrice>합계 : {totalPrice.toLocaleString()} 원</CartTotalPrice>
        <CartOrderButton onClick={onClickMoveToOrder}>주문하기</CartOrderButton>
      </CartWrapper>
    </>
  );
}
