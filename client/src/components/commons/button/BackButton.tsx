import styled from "styled-components";
import { TbArrowBackUp } from "react-icons/tb";

interface BackButtonProps {
  onClick?: () => void;
}

// eslint-disable-next-line react/prop-types
const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  const onClickBackButton = () => {
    if (onClick) {
      onClick();
    } else {
      window.history.back();
    }
  };

  return (
    <>
      <StButtonContainer>
        <StBackButton onClick={onClickBackButton}>
          <TbArrowBackUp />
        </StBackButton>
      </StButtonContainer>
    </>
  );
};

export default BackButton;

const StButtonContainer = styled.div`
  display: flex;
  width: 95%;
  justify-content: end;
  /* background-color: #7f8eff; */
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
