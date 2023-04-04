import Lottie from 'react-lottie';
import animationData from '../../src/components/commons/lotties/burger-preparing.json';
import styled from 'styled-components';
import { useEffect } from 'react';

export default function OrderCompletePage() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = '/';
    }, 9000);
  });
  // ....
  return (
    <>
      <Wrapper>
        <Burger>
          <Lottie options={defaultOptions} height={500} width={500} />
        </Burger>
        <TextBox>
          <div>주문이 완료되었습니다!</div>
          <div>고객님의 주문번호는 00번 입니다.</div>
          <div>주문번호 호출 시, 카운터로 방문해주세요.</div>
        </TextBox>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;

const Burger = styled.div`
  margin-top: -130px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  font-size: 17pt;
  font-weight: 600;
  line-height: 30pt;
  color: #555555;
`;
