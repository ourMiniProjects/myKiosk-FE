// import Sidebar from '../../src/components/sidebar/Sidebar';

// export default function SelectMenu() {
//   return (
//     <>
//       <div>dd</div>

//       <Sidebar />
//     </>
//   );
// }

import { useRouter } from 'next/router';

import Sidebar from '../../src/components/sidebar/Sidebar';

export default function SelectMenu() {
  const router = useRouter();

  const handleButtonClick = async () => {
    // async 키워드를 추가합니다.
    await router.push('/CheckOrder'); // await 키워드를 사용하여 Promise를 처리합니다.
  };

  return (
    <>
      <div>메뉴선택페이지입니다. </div>
      <Sidebar />
      <button onClick={handleButtonClick}>결제</button>
    </>
  );
}
