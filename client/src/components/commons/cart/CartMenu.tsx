import { useCart } from './CartContext';
import CartItem from './CartItem';

const CartMenu = () => {
  const { items, clearCart } = useCart();
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.amount,
    0
  );

  const handleRemoveAllItems = () => {
    clearCart();
  };

  return (
    <div>
      {items.map((item, index) => (
        <CartItem item={item} index={index} key={index} />
      ))}
      {/* <CartTotalPrice>합계 : {totalPrice} 원</CartTotalPrice> */}
      <button onClick={handleRemoveAllItems}>전체 삭제</button>
    </div>
  );
};

export default CartMenu;
