//컴포넌트;

import Signature from "../../src/components/units/category/Signature";
import Burgers from "../../src/components/units/category/Burgers";
import SetMenu from "../../src/components/units/category/SetMenu";
import SideMenu from "../../src/components/units/category/SideMenu";
import Drink from "../../src/components/units/category/Drink";
import Desserts from "../../src/components/units/category/Desserts";
import BackButton from "../../src/components/commons/button/BackButton";
import CartList from "../../src/components/commons/cart/CartList.container";
import styled from "styled-components";
import LayoutHeader from "../../src/components/commons/layout/header/LayoutHeader.container";

export default function MenuPage() {
  return (
    <>
      <Wrapper>
        <div style={{ width: "75%" }}>
          <LayoutHeader />
          <Contents>
            <BackButton />
            <div>MenuPage</div>
            <div>
              <Signature />
              <Burgers />
              <SetMenu />
              <SideMenu />
              <Drink />
              <Desserts />
            </div>
          </Contents>
        </div>
        <div style={{ width: "25%" }}>
          <CartList />
        </div>
      </Wrapper>
    </>
  );
}

// style : 임시

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  margin: 20px;
  border: solid 2px grey;
`;
