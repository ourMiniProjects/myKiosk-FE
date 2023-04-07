import styled from 'styled-components';

export const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: red; */
  width: 85%;
  height: 60px;

  padding: 8px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const OrderItemContainer = styled.div`
  height: 600px; // 원하는 최대 높이 설정
  overflow-y: auto; // 세로 스크롤 표시
  margin-bottom: 20px; // 필요한 경우 하단 여백 추가
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TotalPrice = styled.h2`
  width: 75%;
  height: 50px;
  display: flex;
  margin-left: -8px;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 5px 5px 10px #bebebe, 5px 5px 5px #ffffff;

  border: 1px solid #bebebe;
  border-radius: 10px;
  background-color: #bebebe;
  color: white;
  padding: 8px;
`;

export const CheckoutButton = styled.h4`
  height: 50px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -8px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: #f7ce5ccf;
  color: black;
  border: none;
  padding: 8px;
  box-shadow: 5px 5px 10px #bebebe, 5px 5px 5px #ffffff;
`;
