// ----------------------------------------------------------------------------------
//  LayoutCart.presenter
// ----------------------------------------------------------------------------------

import { ICartListUIProps } from "./CartList.container";
import { CartWrapper } from "./CartList.styles";
import CartMenu from "./CartMenu";

export default function CartListUI(props: ICartListUIProps) {
  return (
    <>
      <CartWrapper>
        <CartMenu />
      </CartWrapper>
    </>
  );
}
