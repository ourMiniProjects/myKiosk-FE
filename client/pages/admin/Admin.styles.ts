import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  width: 1000px;
  height: 600px;
`;

export const SelectCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 400px;
  height: 200px;
  padding: 20px;
  border: solid 1px #eaeaea9a;
  border-radius: 30px;
  box-shadow: 10px 10px 30px #bebebe, 10px 5px 10px #ffffff;
  font-size: 150%;
  font-weight: 600;
  color: #464646;

  cursor: pointer;
  :hover {
    background-color: #f7ce5ccf;
  }
`;

export const Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 200px 70px 200px;
  /* color: #f9c336; */
`;
