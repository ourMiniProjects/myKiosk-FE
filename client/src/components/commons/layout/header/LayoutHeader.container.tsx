import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export interface ILayoutHeaderProps {
  onClickLogo: () => void;
}

export default function LayoutHeader() {
  const router = useRouter();

  const onClickLogo = () => {
    void router.push("/");
  };

  return <LayoutHeaderUI onClickLogo={onClickLogo} />;
}
