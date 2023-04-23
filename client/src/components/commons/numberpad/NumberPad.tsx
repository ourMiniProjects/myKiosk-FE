import { useState } from "react";
import { useRouter } from "next/router";
import { InputBox } from "../../../../pages/login/login.styles";
import { Input } from "antd";
import * as S from "./NumberPad.styles";

interface NumberPadProps {
  onClick: (value: string | KeyboardEvent) => string;
  inputValue: string;
  mode: "login" | "join";
}

export default function NumberPad({
  onClick,
  inputValue,
  mode,
}: NumberPadProps) {
  const router = useRouter();
  const [inputValueState, setInputValue] = useState(inputValue);

  const onClickMoveToMenu = () => {
    router.push("/menu");
  };

  const formatPhoneNumber = (value: string): string => {
    const cleaned = value.replace(/[^0-9]/g, "");
    const formatted = cleaned.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    return formatted.slice(0, 13);
  };

  const handleNumberPadInput = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    const key = event.key;
    let newInputValue = "";

    if (key >= "0" && key <= "9") {
      newInputValue = inputValueState + key;
    } else if (key === "Backspace") {
      newInputValue = inputValueState.slice(0, -1);
    } else if (key.toLowerCase() === "enter") {
      onClickMoveToMenu();
      return;
    } else if (key.toUpperCase() === "X") {
      newInputValue = "";
    }

    newInputValue = formatPhoneNumber(newInputValue);
    setInputValue(newInputValue);
    onClick(newInputValue);
  };

  return (
    <>
      <InputBox>
        <Input
          size="large"
          placeholder="전화번호를 입력해주세요."
          value={inputValueState}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
            handleNumberPadInput(event)
          }
        />
      </InputBox>
      <S.Calculator>
        <S.Buttons>
          {[...Array(10)].map((_, index) => (
            <S.Button
              key={index}
              onClick={() => {
                const value = index === 9 ? "0" : String(index + 1);
                handleNumberPadInput({
                  key: value,
                } as React.KeyboardEvent<HTMLInputElement>);
              }}
            >
              {index === 9 ? "0" : String(index + 1)}
            </S.Button>
          ))}
          <S.Button
            onClick={() =>
              handleNumberPadInput({
                key: "X",
              } as React.KeyboardEvent<HTMLInputElement>)
            }
          >
            X
          </S.Button>
          <S.Button onClick={onClickMoveToMenu}>
            {mode === "login" ? "LOGIN" : "JOIN"}
          </S.Button>
        </S.Buttons>
      </S.Calculator>
    </>
  );
}
