import styled from "styled-components";

export const MenuContainer = styled.div`
  /* display: grid; */
  /* flex-wrap: wrap; */
  /* grid-template-columns: repeat(4, 1fr); */
  /* grid-template-rows: repeat(3, 1fr); */
  display: flex;
  /* justify-content: space-around; */
  align-items: flex-start;
  /* width: 1300px; */
  width: 100%;
  height: 740px;
  margin: 0 auto;
  margin-left: 10px;
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
  width: 80%;
  height: 40%;
  /* width: 250px; */
  /* height: 320px; */
  padding: 10px;
  margin-top: 30px;
  color: black;
  border-radius: 30px;
  background: #fafafac3;
  box-shadow: 15px 15px 40px #bebebe, -15px -15px 10px #ffffff;

  img {
    width: 100%;
  }
`;
