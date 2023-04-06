import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface NumberPadProps {
  onClick: (value: string) => void;
}

export default function NumberPad({ onClick }: NumberPadProps) {
  const router = useRouter();

  const onClickMoveToMenu = async () => {
    await router.push('/menu');
  };

  const handleButtonClick = (value: string) => {
    onClick(value);
  };

  // 키보드 이벤트 핸들러 추가
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') {
        onClick(e.key);
      } else if (e.key.toLowerCase() === 'Backspace') {
        onClick('X');
      } else if (e.key.toLowerCase() === 'enter') {
        onClickMoveToMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClick, onClickMoveToMenu]);

  return (
    <>
      <Calculator>
        <Buttons>
          <Button onClick={() => handleButtonClick('1')}>1</Button>
          <Button onClick={() => handleButtonClick('2')}>2</Button>
          <Button onClick={() => handleButtonClick('3')}>3</Button>
          <Button onClick={() => handleButtonClick('4')}>4</Button>
          <Button onClick={() => handleButtonClick('5')}>5</Button>
          <Button onClick={() => handleButtonClick('6')}>6</Button>
          <Button onClick={() => handleButtonClick('7')}>7</Button>
          <Button onClick={() => handleButtonClick('8')}>8</Button>
          <Button onClick={() => handleButtonClick('9')}>9</Button>
          <Button onClick={() => handleButtonClick('0')}>0</Button>
          <Button onClick={() => handleButtonClick('X')}>X</Button>
          {/* X 버튼 수정시... LoginPage의 handleNumberPadClick함수 조건도 바꿔줘야함..  */}
          <Button onClick={onClickMoveToMenu}>LOGIN</Button>
        </Buttons>
        {/* <LoginButtonBox>
          <ZeroButton onClick={() => handleButtonClick('0')}>0</ZeroButton>
          <LoginButton onClick={onClickMoveToMenu}>LOGIN</LoginButton>
        </LoginButtonBox> */}
      </Calculator>
    </>
  );
}

const Calculator = styled.div`
  /* border: 1px solid rgb(179, 179, 179); */
  border-radius: 0.375rem;
  width: 85%;
  height: 400px;
  font-family: Arial, sans-serif;
  margin: 0 auto;
  padding: 10px;
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  height: 70%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: none;
  border-radius: 0.375rem;
  background-color: #eee;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: #ddd;
  }

  &:active {
    background-color: #ccc;
  }

  .bg-Green {
    background-color: rgba(0, 177, 29, 0.651);
    color: white;

    &:hover {
      background-color: rgba(0, 231, 39, 0.651);
    }
  }

  .bg-Red {
    background-color: rgba(223, 4, 4, 0.651);
    color: white;

    &:hover {
      background-color: rgba(255, 1, 1, 0.651);
    }
  }
`;

const LoginButtonBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
  height: 20%;
  margin-top: 10px;
  /* background-color: aliceblue; */
`;

const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.375rem;
  padding: 10px;
  background-color: #eee;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    background-color: #f7ce5ccf;
  }

  &:active {
    background-color: #ccc;
  }
  /* width: 70%; */
  width: 192px;
  /* background-color: aliceblue; */
`;

const ZeroButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.375rem;
  padding: 10px;
  background-color: #eee;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    background-color: #ddd;
  }

  &:active {
    background-color: #ccc;
  }
  /* width: 30%; */
  width: 78px;
  /* background-color: aliceblue; */
`;
