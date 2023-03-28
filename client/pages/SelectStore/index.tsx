import { useRouter } from 'next/router';

export default function SelectStore() {
  const router = useRouter();

  const onClickMoveToSelectCategory = async () => {
    // async 키워드를 추가합니다.
    await router.push('/SelectCategory'); // await 키워드를 사용하여 Promise를 처리합니다.
  };
  const onClickMoveToAdmin = async () => {
    // async 키워드를 추가합니다.
    await router.push('/Admin'); // await 키워드를 사용하여 Promise를 처리합니다.
  };

  return (
    <>
      <div>SelectStore</div>
      <button onClick={onClickMoveToSelectCategory}>매장</button>
      <button onClick={onClickMoveToSelectCategory}>포장</button>
      <button onClick={onClickMoveToAdmin}>관리자페이지</button>
    </>
  );
}
