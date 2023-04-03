import { useRouter } from "next/router";
import BackButton from "../../src/components/commons/button/BackButton";
import NumberPad from "../../src/components/commons/numberpad/NumberPad";
import {
  Container,
  InputBox,
  SelectCard,
  SelectCardLogin,
} from "../../src/components/units/login/Login.styles";
import { Input } from "antd";

export default function LoginPage() {
  const router = useRouter();

  const onClickMoveToSignup = async () => {
    await router.push("/signup");
  };

  const onClickMoveToMenu = async () => {
    await router.push("/menu");
  };

  return (
    <>
      <div>LoginPage</div>
      <BackButton />
      <Container>
        <SelectCard onClick={onClickMoveToSignup}>
          <img src="/images/select-joinUs.png" />
          간편 멤버십 가입하기
        </SelectCard>
        <SelectCardLogin onClick={onClickMoveToMenu}>
          <img style={{ marginTop: "15px" }} src="/images/login-title.png" />
          <InputBox>
            <Input size="large" placeholder="전화번호를 입력해주세요." />
          </InputBox>
          <NumberPad />
        </SelectCardLogin>
      </Container>
    </>
  );
}
