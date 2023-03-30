import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export interface ILayoutHeaderProps {
  onClickLogo: () => void;
  onClickMoveToAdmin: () => void;
}

export default function LayoutHeader() {
  const router = useRouter();

  const onClickLogo = () => {
    void router.push("/");
  };

  // 회원&비회원 선택 페이지로 옮길 가능성 높음!
  const onClickMoveToAdmin = () => {
    void router.push("/admin");
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToAdmin={onClickMoveToAdmin}
    />
  );
}
