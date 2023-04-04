import { useRouter } from "next/router";
import AdminButton from "../../button/AdminButton";
import BackButton from "../../button/BackButton";
import HomeButton from "../../button/HomeButton";
import LogoButton from "../../button/Logo";
import { ILayoutHeaderProps } from "./LayoutHeader.container";
import { InnerWrapper, Wrapper } from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  const router = useRouter();
  const isHiddenBackButton =
    router.pathname === "/" ||
    router.pathname === "/menu" ||
    router.pathname === "/order-complete" ||
    router.pathname === "/admin";

  const isAdminPage = router.pathname === "/membership-select";
  const isHomePage = router.pathname === "/admin";
  // || router.pathname === "/order-complete";

  return (
    <Wrapper>
      <InnerWrapper>
        <div onClick={props.onClickLogo}>
          {/* <img src="/images/logo.png" /> */}
          <LogoButton />
        </div>
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
