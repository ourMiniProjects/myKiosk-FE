import { useRouter } from "next/router";
import { useState } from "react";
import NumberPad from "../../src/components/commons/numberpad/NumberPad";
import { Container, SelectCard, SelectCardLogin } from "./login.styles";

export default function LoginPage() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleNumberPadClick = (value: string | KeyboardEvent): string => {
    if (typeof value === "string") {
      setInputValue((prev) =>
        value === "X" ? prev.slice(0, -1) : prev + value
      );
    } else if (value instanceof KeyboardEvent) {
      const key = value.key;

      if (key === "Enter") {
        router.push("/menu");
      } else if (key === "Backspace") {
        setInputValue((prev) => prev.slice(0, -1));
      } else if (key >= "0" && key <= "9") {
        setInputValue((prev) => prev + key);
      }
    }
    return "";
  };

  const onClickMoveToSignup = () => {
    router.push("/signup");
  };

  return (
    <>
      <Container>
        <SelectCard onClick={onClickMoveToSignup}>
          <img src="/images/select-joinUs.png" />
          간편 멤버십 가입하기
        </SelectCard>
        <SelectCardLogin>
          <img style={{ marginTop: "15px" }} src="/images/login-title.png" />
          <NumberPad
            onClick={handleNumberPadClick}
            inputValue={inputValue}
            mode={"login"}
          />
        </SelectCardLogin>
      </Container>
    </>
  );
}
