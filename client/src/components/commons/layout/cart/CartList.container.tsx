import { useRouter } from "next/router";
import { CartContainer } from "./CartList.styles";

export default function CartList() {
  const router = useRouter();
  const onClickMoveToCheckOrder = async () => {
    await router.push("/checkOrder");
  };

  return (
    <>
      <CartContainer>
        <div>카트바... </div>
        <button onClick={onClickMoveToCheckOrder}>결제</button>
      </CartContainer>
    </>
  );
}
