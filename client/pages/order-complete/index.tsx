import { useEffect, useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../../src/components/commons/lotties/burger-preparing.json";

export default function OrderCompletePage() {
  const [timeoutId, setTimeoutId] = useState<null | NodeJS.Timeout>(null);
  const [countdown, setCountdown] = useState(9);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     window.location.href = "/";
  //   }, 9000);
  // });

  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     window.location.href = "/";
  //   }, 9000);
  //   setTimeoutId(id);
  //   return () => {
  //     if (timeoutId !== null) {
  //       clearTimeout(timeoutId);
  //     }
  //   };
  // }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 9000);

    return () => {
      clearInterval(id);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Burger>
          <Lottie options={defaultOptions} height={500} width={500} />
        </Burger>
        <TextBox>
          <TextBox2>enjoy your meal !</TextBox2>
          <div>주문이 완료되었습니다!</div>
          <div>고객님의 주문번호는 00번 입니다.</div>
          <div>주문번호 호출 시, 카운터로 방문해주세요.</div>
          <div>
            <CountDown>{countdown}</CountDown>초 뒤 홈 화면으로 이동합니다.
          </div>
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
  margin-top: 10px;
  font-size: 17pt;
  font-weight: 600;
  line-height: 30pt;
  color: #555555;
`;

const TextBox2 = styled.div`
  font-family: "myfont";
  font-size: 32pt;
  padding: 15px;
  margin-bottom: 10px;
  font-weight: 700;
  letter-spacing: 1.5pt;
  color: #f39600;
`;

const CountDown = styled.span`
  font-family: "myfont";
  font-size: 20pt;
  padding: 5px;
  font-weight: 700;
  letter-spacing: 1.5pt;
  color: #f39600;
`;
