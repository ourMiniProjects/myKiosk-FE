import { Container, SelectCard, Wrapper } from "./Admin.styles";

export default function AdminPage() {
  return (
    <>
      <Wrapper>
        <Container>
          <SelectCard>당일 매출 조회</SelectCard>
          <SelectCard>품목별 매출 조회</SelectCard>
          <SelectCard>시간대별 매출 조회</SelectCard>
          <SelectCard>영수증 조회</SelectCard>
        </Container>
      </Wrapper>
    </>
  );
}
