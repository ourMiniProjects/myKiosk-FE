import { useState } from "react";
import Signature from "../../src/components/units/category/Signature";
import Burgers from "../../src/components/units/category/Burgers";
import SetMenu from "../../src/components/units/category/SetMenu";
import SideMenu from "../../src/components/units/category/SideMenu";
import Drink from "../../src/components/units/category/Drink";
import Desserts from "../../src/components/units/category/Desserts";
import CartList from "../../src/components/commons/cart/CartList.container";
import BackButton from "../../src/components/commons/button/BackButton";
import styled from "styled-components";
import LayoutHeader from "../../src/components/commons/layout/header/LayoutHeader.container";
import { useCart } from "../../src/components/commons/cart/CartContext";
import {
  CategoryTextBox,
  MenuCategoryCard,
  MenuCategoryContainer,
} from "../../src/components/units/menuCategory/menuCategry.styles";

interface ShowCategoryState {
  signature: boolean;
  burgers: boolean;
  setMenu: boolean;
  sideMenu: boolean;
  drink: boolean;
  desserts: boolean;
}

type CategoryName = keyof ShowCategoryState;

export default function MenuPage() {
  const [showCategory, setShowCategory] = useState<ShowCategoryState>({
    signature: false,
    burgers: false,
    setMenu: false,
    sideMenu: false,
    drink: false,
    desserts: false,
  });

  const [showButtons, setShowButtons] = useState(true);
  const { clearCart } = useCart();

  const handleToggleCategory = (categoryName: CategoryName) => {
    setShowCategory((prevState) => ({
      ...prevState,
      [categoryName]: !prevState[categoryName],
    }));
    setShowButtons(false);
  };

  const handleBack = () => {
    if (showButtons) {
      // 카테고리 목록이 표시되어 있을 때만 이전 페이지로 이동
      clearCart();
      window.history.back();
    } else {
      setShowButtons(true);
      setShowCategory({
        signature: false,
        burgers: false,
        setMenu: false,
        sideMenu: false,
        drink: false,
        desserts: false,
      });
    }
  };

  return (
    <>
      <Wrapper>
        <div style={{ width: "75%" }}>
          <LayoutHeader />
          <Contents>
            <BackButton onClick={handleBack} />
            <div>MenuPage</div>
            <div>
              {showButtons && (
                <>
                  <MenuCategoryContainer>
                    <MenuCategoryCard
                      onClick={() => handleToggleCategory("signature")}
                    >
                      <img src="/images/category/signature.png" />
                      <CategoryTextBox> Signature</CategoryTextBox>
                    </MenuCategoryCard>
                    <MenuCategoryCard
                      onClick={() => handleToggleCategory("burgers")}
                    >
                      <img src="/images/category/burger.png" />
                      <CategoryTextBox>Burgers</CategoryTextBox>
                    </MenuCategoryCard>
                    <MenuCategoryCard
                      onClick={() => handleToggleCategory("setMenu")}
                    >
                      <img src="/images/category/setMenu.png" />
                      <CategoryTextBox>Set Menu</CategoryTextBox>
                    </MenuCategoryCard>
                  </MenuCategoryContainer>
                  <MenuCategoryContainer>
                    <MenuCategoryCard
                      onClick={() => handleToggleCategory("sideMenu")}
                    >
                      <img src="/images/category/sideMenu.png" />
                      <CategoryTextBox>Side Menu</CategoryTextBox>
                    </MenuCategoryCard>
                    <MenuCategoryCard
                      onClick={() => handleToggleCategory("drink")}
                    >
                      <img src="/images/category/drink.png" />
                      <CategoryTextBox>Drink</CategoryTextBox>
                    </MenuCategoryCard>
                    <MenuCategoryCard
                      onClick={() => handleToggleCategory("desserts")}
                    >
                      <img src="/images/category/desserts.png" />
                      <CategoryTextBox>Desserts</CategoryTextBox>
                    </MenuCategoryCard>
                  </MenuCategoryContainer>
                </>
              )}
              {showCategory.signature && <Signature />}
              {showCategory.burgers && <Burgers />}
              {showCategory.setMenu && <SetMenu />}
              {showCategory.sideMenu && <SideMenu />}
              {showCategory.drink && <Drink />}
              {showCategory.desserts && <Desserts />}
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
`;

const Contents = styled.div`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  padding: 20px;
  /* border: solid 2px grey; */
`;
