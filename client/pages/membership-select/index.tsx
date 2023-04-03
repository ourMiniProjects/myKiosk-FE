import { useRouter } from "next/router";
import {
  AdminButton,
  Container,
  MembershipSelectCard,
  StButtonContainer,
} from "./membership-select.styles";
import { RiUserSettingsLine } from "react-icons/ri";

export default function MembershipSelectPage() {
  const router = useRouter();

  const onClickMoveToLogin = async () => {
    await router.push("/login");
  };

  const onClickMoveToMenu = async () => {
    await router.push("/menu");
  };

  const onClickMoveToAdmin = () => {
    void router.push("/admin");
  };

  return (
    <>
      <StButtonContainer>
        <AdminButton onClick={onClickMoveToAdmin}>
          <RiUserSettingsLine />
        </AdminButton>
      </StButtonContainer>
      <Container>
        <MembershipSelectCard onClick={onClickMoveToLogin}>
          <img src="/images/select-member.png" />
          맴버십으로 주문하기
        </MembershipSelectCard>
        <MembershipSelectCard onClick={onClickMoveToMenu}>
          <img src="/images/select-no.png" />
          비회원으로 주문하기
        </MembershipSelectCard>
      </Container>
    </>
  );
}
