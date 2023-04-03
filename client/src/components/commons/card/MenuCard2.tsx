import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; 
  align-items: flex-start; */
  width: 100%;
  height: 740px;
  /* margin: 0 auto; */
  /* margin-left: 10px; */
  overflow: scroll;
  /* padding: 20px; */
  /* background-color: #f6f6f6; */
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 320px;
  padding: 25px;
  margin-top: 30px;
  color: black;
  background-color: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  border: solid 1px #eaeaea;
  border-radius: 10px;
  img {
    width: 100%;
  }
`;
export const CardWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px; // 수정
  height: 320px; // 수정
  padding: 10px;
  margin-top: 30px;
  margin-right: 25px; // 추가 (옆 간격 조정)
  color: black;
  border-radius: 30px;
  background: #fafafac3;
  box-shadow: 15px 15px 30px #bebebe, 10px 5px 10px #ffffff;
  cursor: pointer;
  :hover {
    background-color: #f7ce5ccf;
  }
  img {
    width: 100%;
  }
`;
