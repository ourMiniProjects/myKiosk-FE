import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { MdRefresh } from "react-icons/md";

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 780px;
  padding: 50px 40px 40px 40px;
  margin: 30px 10px 150px -20px;
  color: black;
  border-radius: 20px;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  background-color: #f7cc5c;
`;

export const CartListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 700px;
  padding: 10px;
  margin-bottom: 10px;
  color: black;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  /* background-color: #ffffff; */
`;

export const TitleWapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  font-size: 16pt;
  font-weight: 600;
  letter-spacing: 1px;
  color: #252525;
`;

export const CartIcon = styled(BsCart3)`
  margin-right: 10px;
  margin-left: 20px;
`;

export const DeleteAllIcon = styled(MdRefresh)`
  margin: -5px 10px 0px 10px;
  font-size: 24pt;
  color: #111111b0;
  cursor: pointer;
`;

export const CartSelectedItems = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  background-color: #ffffff40;
  border-radius: 15px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
  padding: 10px 20px 10px 20px;
  margin: 0px 5px 18px 5px;
  width: 85%;
`;

// export const CartItemWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   width: 90%;
//   background-color: #ffffff40;
// `;

export const DeleteIcon = styled(TiDelete)`
  position: absolute;
  top: 7px;
  right: 5px;
  font-size: 20pt;
  color: #111111b0;
  cursor: pointer;
`;

export const MenuImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -5px 0px 0px 5px;
  img {
    width: 90px;
    height: 70px; // 이미지의 최대 높이를 100픽셀로 설정
    object-fit: cover; // 이미지의 가로 세로 비율을 유지하면서 전체 영역을 채움
  }
`;

export const MenuName = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 10px 10px 5px;
  /* font-size: 14pt; */
  font-size: 110%;
  font-weight: 700;
  letter-spacing: 1px;
  color: #303030;
`;

export const MenuPrice = styled.div`
  display: flex;
  justify-content: end;
  width: 80px;
  margin: 0px 10px 0px 10px;
  font-size: 13pt;
  font-weight: 600;
  color: #303030;
`;

export const CountButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 95%;

  /* background-color: aliceblue; */
`;

export const CountButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff70;
  border-radius: 5px;
  width: 10px;
  height: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin: 3px;
  padding: 10px;
  font-size: 14pt;
  color: #303030;
  cursor: pointer;
`;

export const AmoutBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffffd5;
  border-radius: 5px;
  width: 10px;
  height: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin: 3px;
  padding: 10px;
`;

export const CartTotalPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  padding: 20px;
  font-size: 16pt;
  font-weight: 500;
  letter-spacing: 0.5pt;
  color: #202020;
  /* color: white; */
`;

export const CartOrderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a2a2aa3;
  border-radius: 20px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
  width: 85%;
  padding: 20px;
  font-size: 16pt;
  letter-spacing: 1pt;
  color: white;
  cursor: pointer;
`;
