import { useRouter } from "next/router";
import styles from "./CartForm.module.css"; // 올바른 파일 이름으로 수정합니다.

export default function CartList() {
  const router = useRouter();
  const onClickMoveToCheckOrder = async () => {
    await router.push("/checkOrder"); // await 키워드를 사용하여 Promise를 처리합니다.
  };

  return (
    <>
      <div className={styles.container}>
        <div>카트바... </div>
        <button onClick={onClickMoveToCheckOrder}>결제</button>
      </div>
    </>
  );
}
