import styled from "styled-components";
import { TbArrowBackUp } from "react-icons/tb";

interface Props {
  onClick: () => void;
}

export default function MenuBackButton({ onClick }: Props) {
  const handleClick = () => {
    onClick();
  };

  return (
    <>
      <StButtonContainer>
        <StBackButton onClick={handleClick}>
          <TbArrowBackUp />
        </StBackButton>
      </StButtonContainer>
    </>
  );
}

const StButtonContainer = styled.div`
  display: flex;
  width: 95%;
  justify-content: end;
  padding-bottom: 10px;
  /* background-color: aliceblue; */
`;

const StBackButton = styled.div`
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
