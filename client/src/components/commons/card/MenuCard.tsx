import styled from "styled-components";

// export const MenuContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   /* grid-template-rows: repeat(3, 1fr); */
//   /* gap: 20px; */
//   width: 100%;
//   justify-content: center;
// `;

// export const CardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 30%;
//   height: 30%;
//   padding: 25px;
//   margin-top: 30px;
//   color: black;
//   background-color: #ffffff;
//   box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
//   border: solid 1px #eaeaea;
//   border-radius: 10px;
//   img {
//     width: 120%;
//   }
// `;

export const MenuContainer = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;
  width: 1300px;
  height: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f6f6f6;
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
