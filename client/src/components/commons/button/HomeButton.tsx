import { useRouter } from "next/router";
import styled from "styled-components";
import { BiHome } from "react-icons/bi";

export default function HomeButton() {
  const router = useRouter();

  const onClickMoveToHome = () => {
    void router.push("/");
  };

  return (
    <>
      <StButtonContainer>
        <StHomeButton onClick={onClickMoveToHome}>
          <BiHome />
        </StHomeButton>
      </StButtonContainer>
    </>
  );
}

const StButtonContainer = styled.div`
  display: flex;
  width: 100px;
  justify-content: end;
  /* background-color: aquamarine; */
`;

const StHomeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 25px;
  padding: 10px;
  margin-right: 15px;
  box-shadow: 5px 5px 10px #bebebe, 5px 5px 5px #ffffff;
  border: solid 1px #eaeaea;
  border-radius: 10px;
  font-size: 24pt;
  color: #505050;
  cursor: pointer;
  :hover {
    background-color: #f7ce5ccf;
  }
  img {
    width: 50%;
  }
`;
