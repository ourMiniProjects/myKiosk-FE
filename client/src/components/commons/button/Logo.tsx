import { useRouter } from "next/router";
import styled from "styled-components";

export default function LogoButton() {
  const router = useRouter();

  const onClickMoveToHome = () => {
    void router.push("/");
  };

  return (
    <>
      <StButtonContainer>
        <StLogoButton onClick={onClickMoveToHome}>
          <img src="/images/logo2.png" />
        </StLogoButton>
      </StButtonContainer>
    </>
  );
}

const StButtonContainer = styled.div`
  display: flex;
  width: 250px;
  justify-content: center;
  padding-top: 5px;
  /* background-color: aquamarine; */
`;

const StLogoButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 25px;
  padding: 10px;
  cursor: pointer;
  img {
    width: 300%;
  }
`;
