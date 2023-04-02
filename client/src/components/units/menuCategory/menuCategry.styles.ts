import styled from "styled-components";

export const MenuCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* width: 1300px; */
  width: 100%;
  height: 410px;
  overflow: scroll;
  /* background-color: #f6f6f6; */
`;

export const MenuCategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 85%;
  padding-bottom: 10px;
  border: solid 1px #eaeaea9a;
  border-radius: 30px;
  /* background: #e0e0e0; */
  /* box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff; */
  box-shadow: 10px 10px 20px #bebebe, 10px 5px 10px #ffffff;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 18pt;
  font-weight: 600;
  color: #303030;

  cursor: pointer;
  :hover {
    background-color: #f7ce5ccf;
  }
  img {
    width: 80%;
    margin-bottom: 20px;
  }
`;

export const CategoryTextBox = styled.div`
  padding: 15px;
`;
