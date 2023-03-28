// 컴포넌트
import BackButton from "../../src/components/commons/BackButton";
import CartForm from "../../src/components/cart/CartForm";
import Burgers from "../../src/components/category/Burgers";
import Signature from "../../src/components/category/Signature";
import SetMenu from "../../src/components/category/SetMenu";
import SideMenu from "../../src/components/category/SideMenu";
import Drink from "../../src/components/category/Drink";
import Desserts from "../../src/components/category/Desserts";

export default function SelectCategoryPage() {
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

      <CartForm />
    </>
  );
}
