import { ILayoutHeaderProps } from "./LayoutHeader.container";
import {
  InnerButton,
  InnerWrapper,
  InnerLogo,
  Wrapper,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo onClick={props.onClickLogo}>LOGO</InnerLogo>
        <InnerButton onClick={props.onClickMoveToAdmin}>adimin</InnerButton>
      </InnerWrapper>
    </Wrapper>
  );
}
