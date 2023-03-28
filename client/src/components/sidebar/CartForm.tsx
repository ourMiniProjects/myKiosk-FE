import { useRouter } from 'next/router';

export default function CartForm() {
  const router = useRouter();
  const onClickMoveToCheckOrder = async () => {
    // async 키워드를 추가합니다.
    await router.push('/CheckOrder'); // await 키워드를 사용하여 Promise를 처리합니다.
  };
  return (
    <>
      <div>카트바... </div>
      <button onClick={onClickMoveToCheckOrder}>결제</button>
    </>
  );
}
