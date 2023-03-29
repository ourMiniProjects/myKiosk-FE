import React, { useState } from 'react';
import Signature from '../../src/components/units/category/Signature';
import Burgers from '../../src/components/units/category/Burgers';
import SetMenu from '../../src/components/units/category/SetMenu';
import SideMenu from '../../src/components/units/category/SideMenu';
import Drink from '../../src/components/units/category/Drink';
import Desserts from '../../src/components/units/category/Desserts';
import CartList from '../../src/components/commons/layout/cart/CartList.container';
import BackButton from '../../src/components/commons/button/BackButton';

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

  const handleToggleCategory = (categoryName: CategoryName) => {
    setShowCategory((prevState) => ({
      ...prevState,
      [categoryName]: !prevState[categoryName],
    }));
  };

  return (
    <>
      <BackButton />
      <div>MenuPage</div>
      <div>
        <button onClick={() => handleToggleCategory('signature')}>
          Signature
        </button>
        {showCategory.signature && <Signature />}
        <button onClick={() => handleToggleCategory('burgers')}>Burgers</button>
        {showCategory.burgers && <Burgers />}
        <button onClick={() => handleToggleCategory('setMenu')}>
          Set Menu
        </button>
        {showCategory.setMenu && <SetMenu />}
        <button onClick={() => handleToggleCategory('sideMenu')}>
          Side Menu
        </button>
        {showCategory.sideMenu && <SideMenu />}
        <button onClick={() => handleToggleCategory('drink')}>Drink</button>
        {showCategory.drink && <Drink />}
        <button onClick={() => handleToggleCategory('desserts')}>
          Desserts
        </button>
        {showCategory.desserts && <Desserts />}
      </div>
      <CartList />
    </>
  );
}
