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
      <img src={item.imageUrl} alt={item.menuName} />
      <h4>{item.menuName}</h4>
      <p>{item.price}원</p>
      <p>수량: {item.amount}</p>
      <button onClick={() => incrementItem(item.id)}>+</button>
      <button onClick={() => decrementItem(item.id)}>-</button>
      <button onClick={() => removeItem(item.id)}>삭제</button>
    </div>
  );
};

const CartMenu = () => {
  const { items } = useCart();

  return (
    <div>
      <h2>장바구니</h2>
      {items.map((item, index) => (
        <CartItem item={item} index={index} key={index} />
      ))}
    </div>
  );
};

export default CartMenu;
