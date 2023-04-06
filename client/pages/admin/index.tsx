import BasicTabs from "../../src/components/commons/tab/AdminTabs";
import VerticalTabs from "../../src/components/commons/tab/AdminTabs2";
import { Container, SelectCard, Wrapper, Wrapper2 } from "./Admin.styles";

export default function AdminPage() {
  return (
    <>
      {/* <Wrapper>
        <Container>
          <SelectCard>당일 매출 조회</SelectCard>
          <SelectCard>품목별 매출 조회</SelectCard>
          <SelectCard>시간대별 매출 조회</SelectCard>
          <SelectCard>영수증 조회</SelectCard>
        </Container>
      </Wrapper> */}
      {/* <ColorTabs /> */}

      <Wrapper2>
        {/* <VerticalTabs /> */}
        <BasicTabs />
      </Wrapper2>
    </>
  );
}
