import { useRouter } from "next/router";
import styled from "styled-components";
import { RiUserSettingsLine } from "react-icons/ri";

export default function AdminButton() {
  const router = useRouter();

  const onClickMoveToAdmin = () => {
    void router.push("/admin");
  };

  return (
    <>
      <StButtonContainer>
        <StAdminButton onClick={onClickMoveToAdmin}>
          <RiUserSettingsLine />
        </StAdminButton>
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

const StAdminButton = styled.div`
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
