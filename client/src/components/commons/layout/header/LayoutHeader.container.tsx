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

  const onClickMoveToAdmin = () => {
    void router.push("/admin");
  };
  return (
    <>
      <LayoutHeaderUI
        onClickLogo={onClickLogo}
        onClickMoveToAdmin={onClickMoveToAdmin}
      />
    </>
  );
}
