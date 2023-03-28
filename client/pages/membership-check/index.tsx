import { useRouter } from 'next/router';

export default function MembershipCheckPage() {
  const router = useRouter();

  const onClickMoveToLogin = async () => {
    await router.push('/login');
  };

  const onClickMoveToMenu = async () => {
    await router.push('/menu');
  };

  const onClickMoveToAdmin = async () => {
    await router.push('/admin');
  };

  return (
    <>
      <div>MembershipCheckPage</div>
      <button onClick={onClickMoveToLogin}>회원</button>
      <button onClick={onClickMoveToMenu}>비회원</button>
      <button onClick={onClickMoveToAdmin}>관리자페이지</button>
    </>
  );
}
