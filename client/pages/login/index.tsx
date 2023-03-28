import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();

  const onClickMoveToSelectCategory = async () => {
    await router.push('/selectCategory');
  };
  const onClickMoveToAdmin = async () => {
    await router.push('/admin');
  };

  return (
    <>
      <div>SelectStorePage</div>
      <button onClick={onClickMoveToSelectCategory}>ㄴㄴㄴ</button>
      <button onClick={onClickMoveToSelectCategory}>포장ㄴ</button>
      <button onClick={onClickMoveToAdmin}>관리자페이지</button>
    </>
  );
}
