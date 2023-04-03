import { Input } from "antd";
import { useRouter } from "next/router";
import BackButton from "../../src/components/commons/button/BackButton";
import NumberPad from "../../src/components/commons/numberpad/NumberPad";
import {
  Container,
  ImageBox,
  InputBox,
  SelectCardSignup,
} from "../../src/components/units/signUp/SignUp.styles";

export default function signupPage() {
  const router = useRouter();

  const onClickMoveToMenu = async () => {
    await router.push("/menu");
  };

  return (
    <>
      <div>회원가입Page</div>
      <BackButton />
      <Container>
        <SelectCardSignup onClick={onClickMoveToMenu}>
          <img style={{ marginTop: "15px" }} src="/images/joinUs-title.png" />
          <InputBox>
            <Input size="large" placeholder="전화번호를 입력해주세요." />
          </InputBox>
          <NumberPad />
        </SelectCardSignup>
        <ImageBox>
          <img src="/images/welcome.png" />
        </ImageBox>
      </Container>
    </>
  );
}
