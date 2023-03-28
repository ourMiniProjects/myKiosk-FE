import { useRouter } from 'next/router';
import BackButton from '../../src/components/commons/BackButton';

export default function signupPage() {
  const router = useRouter();

  const onClickMoveToMenu = async () => {
    await router.push('/menu');
  };

  return (
    <>
      <div>회원가입Page</div>
      <BackButton />
      <button onClick={onClickMoveToMenu}>회원가입.</button>
    </>
  );
}
