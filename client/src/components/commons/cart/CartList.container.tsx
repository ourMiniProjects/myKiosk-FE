// ----------------------------------------------------------------------------------
//  LayoutCart.container
// ----------------------------------------------------------------------------------

import CartListUI from "./CartList.presenter";
import { useRouter } from "next/router";
import { type MouseEvent } from "react";

export interface ICartListUIProps {
  onClickMoveToPay: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function CartList() {
  const router = useRouter();

  const onClickMoveToPay = (event: MouseEvent<HTMLDivElement>) => {
    void router.push("/order-check");
  };

  return (
    <>
      <CartListUI onClickMoveToPay={onClickMoveToPay} />
    </>
  );
}
