import { useRouter } from "next/router";
import AdminButton from "../../button/AdminButton";
import BackButton from "../../button/BackButton";
import HomeButton from "../../button/HomeButton";
import { ILayoutHeaderProps } from "./LayoutHeader.container";
import { InnerWrapper, InnerLogo, Wrapper } from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  const router = useRouter();
  const isHiddenBackButton =
    router.pathname === "/" ||
    router.pathname === "/menu" ||
    router.pathname === "/order-complete" ||
    router.pathname === "/admin";

  const isAdminPage = router.pathname === "/membership-select";
  const isHomePage = router.pathname === "/admin";

  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>LOGO</InnerLogo>
        {isHiddenBackButton || <BackButton />}
        {isAdminPage && (
          <div onClick={props.onClickMoveToAdmin}>
            <AdminButton />
          </div>
        )}
        {isHomePage && (
          <div onClick={props.onClickMoveToHome}>
            <HomeButton />
          </div>
        )}
      </InnerWrapper>
    </Wrapper>
  );
}
