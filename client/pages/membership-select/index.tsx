import { useRouter } from "next/router";
import BackButton from "../../src/components/commons/button/BackButton";
import { Container, MembershipSelectCard } from "./membership-select.styles";

export default function MembershipCheckPage() {
  const router = useRouter();

  const onClickMoveToLogin = async () => {
    await router.push("/login");
  };

  const onClickMoveToMenu = async () => {
    await router.push("/menu");
  };

  return (
    <>
      <div>MembershipSelectPage</div>
      <BackButton />
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
