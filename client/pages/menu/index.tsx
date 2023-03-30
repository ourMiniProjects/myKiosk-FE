import React, { useState } from "react";
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

  const handleToggleCategory = (categoryName: CategoryName) => {
    setShowCategory((prevState) => ({
      ...prevState,
      [categoryName]: !prevState[categoryName],
    }));
    setShowButtons(false);
  };

  const handleBack = () => {
    setShowButtons(true);
    setShowCategory({
      signature: false,
      burgers: false,
      setMenu: false,
      sideMenu: false,
      drink: false,
      desserts: false,
    });
  };

  return (
    <>
      <Wrapper>
        <div style={{ width: "75%" }}>
          <LayoutHeader />
          <Contents>
            {/* FIXME: 뒤로가기 버튼, 조건걸기... */}
            <BackButton />
            <BackButton onClick={handleBack} />
            <div>MenuPage</div>
            <div>
              {showButtons && (
                <>
                  <button onClick={() => handleToggleCategory("signature")}>
                    Signature
                  </button>
                  <button onClick={() => handleToggleCategory("burgers")}>
                    Burgers
                  </button>
                  <button onClick={() => handleToggleCategory("setMenu")}>
                    Set Menu
                  </button>
                  <button onClick={() => handleToggleCategory("sideMenu")}>
                    Side Menu
                  </button>
                  <button onClick={() => handleToggleCategory("drink")}>
                    Drink
                  </button>
                  <button onClick={() => handleToggleCategory("desserts")}>
                    Desserts
                  </button>
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
