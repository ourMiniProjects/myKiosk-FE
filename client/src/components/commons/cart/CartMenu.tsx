// CartMenu.tsx
import { useCart } from './CartContext';
import { MenuItem } from '../../units/category/MenuItem';

interface CartItemProps {
  item: MenuItem;
  index: number;
}

const CartItem: React.FC<CartItemProps> = ({ item, index }) => {
  const { incrementItem, decrementItem, removeItem } = useCart();

  return (
    <div key={index}>
      {/* <img src={item.imageUrl} alt={item.menuName} /> */}
      <h4>{item.menuName}</h4>
      <p>{item.price * item.amount}원</p>
      <p>수량: {item.amount}</p>
      <button onClick={() => incrementItem(item.id)}>+</button>
      <button onClick={() => decrementItem(item.id)}>-</button>
      <button onClick={() => removeItem(item.id)}>삭제</button>
    </div>
  );
};

const CartMenu = () => {
  const { items } = useCart();
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.amount,
    0
  );

  return (
    <div>
      <h2>장바구니</h2>
      {items.map((item, index) => (
        <CartItem item={item} index={index} key={index} />
      ))}
      <h3>총 결제 금액: {totalPrice}원</h3>
    </div>
  );
};

export default CartMenu;
