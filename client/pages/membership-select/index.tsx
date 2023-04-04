import { useRouter } from "next/router";
import { Container, MembershipSelectCard } from "./membership-select.styles";

export default function MembershipSelectPage() {
  const router = useRouter();

  const onClickMoveToLogin = async () => {
    await router.push("/login");
  };

  const onClickMoveToMenu = async () => {
    await router.push("/menu");
  };

  return (
    <>
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
