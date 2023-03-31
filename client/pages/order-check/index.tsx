import { useRouter } from 'next/router';
import BackButton from '../../src/components/commons/button/BackButton';
import { useCart } from '../../src/components/commons/cart/CartContext';

export default function CheckOrderPage() {
  const router = useRouter();
  const { items } = useCart();

  const onClickMoveToOrderComplete = async () => {
    await router.push('/order-complete');
  };

  const calculateTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.price * item.amount, 0);
  };

  return (
    <>
      <BackButton />
      <div>CheckOrderPage</div>
      {items.map((item) => (
        <div key={item.id}>
          <div>{item.menuName}</div>
          <div>{item.amount}</div>
          <div> ${item.price}</div>
          <div>: ${item.amount * item.price}</div>
        </div>
      ))}
      <h2>Total: ${calculateTotalPrice()}</h2>
      <button onClick={onClickMoveToOrderComplete}>결제....</button>
    </>
  );
}
