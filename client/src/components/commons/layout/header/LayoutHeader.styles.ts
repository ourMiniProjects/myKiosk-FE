import styled from "styled-components";

export const Wrapper = styled.div`
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: row; */
  /* background-color: #f7cc5c; */
`;

export const InnerWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const InnerLogo = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: #2e2e2e;
  cursor: pointer;
`;

export const InnerButton = styled.span`
  margin: 10px;
  color: #2e2e2e;
  cursor: pointer;
`;
