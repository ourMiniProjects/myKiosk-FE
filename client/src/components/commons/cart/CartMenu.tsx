import { useCart } from './CartContext';
import CartItem from './CartItem';

const CartMenu = () => {
  const { items } = useCart();
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.amount,
    0
  );

  return (
    <div>
      {items.map((item, index) => (
        <CartItem item={item} index={index} key={index} />
      ))}
      {/* <CartTotalPrice>합계 : {totalPrice} 원</CartTotalPrice> */}
    </div>
  );
};

export default CartMenu;
