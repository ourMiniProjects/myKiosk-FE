import { useRouter } from 'next/router';
import { CartContainer } from './CartList.styles';

export default function CartList() {
  const router = useRouter();
  const onClickMoveToOrderCheck = async () => {
    await router.push('/order-check');
  };

  return (
    <>
      <CartContainer>
        <div>카트바... </div>
        <button onClick={onClickMoveToOrderCheck}>결제</button>
      </CartContainer>
    </>
  );
}
