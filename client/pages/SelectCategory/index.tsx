import { useRouter } from 'next/router';
// 컴포넌트
import Sidebar from '../../src/components/sidebar/Sidebar';
import BackButton from '../../src/components/commons/BackButton';

export default function SelectCategory() {
  const router = useRouter();

  const onClickMoveToCheckOrder = async () => {
    // async 키워드를 추가합니다.
    await router.push('/CheckOrder'); // await 키워드를 사용하여 Promise를 처리합니다.
  };

  return (
    <>
      <BackButton />
      <div>SelectMenu. </div>
      <Sidebar />
      <button onClick={onClickMoveToCheckOrder}>결제</button>
    </>
  );
}
