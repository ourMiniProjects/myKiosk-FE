import { useRouter } from 'next/router';
import BackButton from '../../src/components/commons/BackButton';

export default function CheckOrderPage() {
  const router = useRouter();

  const onClickMoveToOrderComplete = async () => {
    await router.push('/order-complete');
  };

  return (
    <>
      <BackButton />
      <div>CheckOrderPage</div>
      <button onClick={onClickMoveToOrderComplete}>결제....</button>
    </>
  );
}
