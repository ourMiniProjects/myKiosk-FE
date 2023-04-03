import styled from "styled-components";

export default function NumberPad() {
  return (
    <>
      <Calculator>
        <Buttons>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
        </Buttons>
        <LoginButtonBox>
          <ZeroButton>0</ZeroButton>
          <LoginButton>LOGIN</LoginButton>
        </LoginButtonBox>
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
