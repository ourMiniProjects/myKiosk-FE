import { useRouter } from "next/router";
import NumberPad from "../../src/components/commons/numberpad/NumberPad";
import { Input } from "antd";
import {
  Container,
  InputBox,
  SelectCard,
  SelectCardLogin,
} from "./login.styles";

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
