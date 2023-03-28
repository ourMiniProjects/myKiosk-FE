import { useRouter } from 'next/router';

import Sidebar from '../../src/components/sidebar/Sidebar';

export default function SelectStore() {
  const router = useRouter();

  const handleSelectStore = async () => {
    // async 키워드를 추가합니다.
    await router.push('/SelectMenu'); // await 키워드를 사용하여 Promise를 처리합니다.
  };
  const handleButtonClick = async () => {
    // async 키워드를 추가합니다.
    await router.push('/SelectMenu'); // await 키워드를 사용하여 Promise를 처리합니다.
  };

  return (
    <>
      <div>메인페이지입니다. </div>
      <Sidebar />
      <button onClick={handleSelectStore}>매장</button>
      <button onClick={handleSelectStore}>포장</button>
      <button onClick={handleButtonClick}>관리자페이지</button>
    </>
  );
}
