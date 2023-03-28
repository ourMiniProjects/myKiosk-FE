// 컴포넌트
import BackButton from "../../src/components/commons/BackButton";
import Signature from "../../src/components/category/Signature";
import Burgers from "../../src/components/category/Burgers";
import SetMenu from "../../src/components/category/SetMenu";
import SideMenu from "../../src/components/category/SideMenu";
import Drink from "../../src/components/category/Drink";
import Desserts from "../../src/components/category/Desserts";
import CartList from "../../src/components/commons/layout/cart/CartList.container";

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
