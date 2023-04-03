import { useRouter } from "next/router";
import BackButton from "../../button/BackButton";
import { ILayoutHeaderProps } from "./LayoutHeader.container";
import {
  InnerButton,
  InnerWrapper,
  InnerLogo,
  Wrapper,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  const router = useRouter();
  const isHiddenBackButton =
    router.pathname === "/" ||
    router.pathname === "/menu" ||
    router.pathname === "/order-complete";

  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>LOGO</InnerLogo>
        {isHiddenBackButton || <BackButton />}
      </InnerWrapper>
    </Wrapper>
  );
}
