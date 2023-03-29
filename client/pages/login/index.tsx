import { useRouter } from 'next/router';
import BackButton from '../../src/components/commons/button/BackButton';

export default function LoginPage() {
  const router = useRouter();

  const onClickMoveToSignup = async () => {
    await router.push('/signup');
  };

  const onClickMoveToMenu = async () => {
    await router.push('/menu');
  };

  return (
    <>
      <div>LoginPage</div>
      <BackButton />
      <BackButton />
      <button onClick={onClickMoveToSignup}>회원가입</button>
      <button onClick={onClickMoveToMenu}>로그인</button>
    </>
  );
}
