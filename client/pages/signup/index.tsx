import { Input } from "antd";
import { useRouter } from "next/router";
import NumberPad from "../../src/components/commons/numberpad/NumberPad";
import {
  Container,
  ImageBox,
  InputBox,
  SelectCardSignup,
} from "./signUp.styles";

export default function SignUpPage() {
  const router = useRouter();

  const onClickMoveToMenu = async () => {
    await router.push("/menu");
  };

  return (
    <>
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
