// ----------------------------------------------------------------------------------
//  LayoutCart.presenter
// ----------------------------------------------------------------------------------

import { useRouter } from 'next/router';
import { ICartListUIProps } from './CartList.container';
import { CartWrapper } from './CartList.styles';
import CartMenu from './CartMenu';

export default function CartListUI(props: ICartListUIProps) {
  const router = useRouter();

  const onClickMoveToPay = () => {
    void router.push('/order-check');
  };

  return (
    <>
      <CartWrapper>
        <CartMenu />
        <div onClick={onClickMoveToPay}>결제하기</div>
      </CartWrapper>
    </>
  );
}
