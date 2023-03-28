// 컴포넌트
import Signature from "../../src/components/units/category/Signature";
import Burgers from "../../src/components/units/category/Burgers";
import SetMenu from "../../src/components/units/category/SetMenu";
import SideMenu from "../../src/components/units/category/SideMenu";
import Drink from "../../src/components/units/category/Drink";
import Desserts from "../../src/components/units/category/Desserts";
import CartList from "../../src/components/commons/layout/cart/CartList.container";
import BackButton from "../../src/components/commons/button/BackButton";

export default function MenuPage() {
  return (
    <>
      <BackButton />
      <div>SelectCategoryPage</div>
      <div>
        <Signature />
        <Burgers />
        <SetMenu />
        <SideMenu />
        <Drink />
        <Desserts />
      </div>
      <CartList />
    </>
  );
}
