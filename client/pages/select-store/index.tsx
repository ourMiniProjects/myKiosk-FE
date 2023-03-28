import { useRouter } from "next/router";

export default function SelectStorePage() {
  const router = useRouter();

  const onClickMoveToSelectCategory = async () => {
    await router.push("/selectCategory");
  };
  const onClickMoveToAdmin = async () => {
    await router.push("/admin");
  };

  return (
    <>
      <div>SelectStorePage</div>
      <button onClick={onClickMoveToSelectCategory}>매장</button>
      <button onClick={onClickMoveToSelectCategory}>포장</button>
      <button onClick={onClickMoveToAdmin}>관리자페이지</button>
    </>
  );
}
