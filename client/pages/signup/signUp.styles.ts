import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 800px;
  /* background-color: #f6f6f6; */
`;

export const SelectCardSignup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* width: 20%; */
  /* height: 55%; */
  width: 300px;
  height: 400px;
  padding: 20px;
  margin: -100px 70px 0px 70px;
  border: solid 1px #eaeaea9a;
  border-radius: 30px;
  box-shadow: 10px 10px 30px #bebebe, 10px 5px 10px #ffffff;
  /* font-size: 20pt; */
  font-size: 150%;
  font-weight: 600;
  color: #464646;

  img {
    width: 70%;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 20%; */
  width: 350px;
  height: 55%;
  padding: 20px;
  margin: -100px 70px 0px 70px;
  img {
    width: 190%;
  }
`;

export const InputBox = styled.div`
  width: 85%;
  margin: 20px 0px 20px 0px;
`;
