// CartMenu.tsx
import { useCart } from './CartContext';
import { MenuItem } from '../../units/category/MenuItem';
import {
  CartIcon,
  CartSelectedItems,
  CartTotal,
  CountButton,
  CountButtonWrapper,
  Title,
} from './CartList.styles';

interface CartItemProps {
  item: MenuItem;
  index: number;
}

const CartItem: React.FC<CartItemProps> = ({ item, index }) => {
  const { incrementItem, decrementItem, removeItem } = useCart();

  return (
    <CartSelectedItems>
      <div key={index}>
        {/* <img src={item.imageUrl} alt={item.menuName} /> */}
        <h4>{item.menuName}</h4>
        <p>{item.price * item.amount}원</p>
        <p>수량: {item.amount}</p>
        <CountButtonWrapper>
          <CountButton onClick={() => incrementItem(item.id)}>+</CountButton>
          <CountButton onClick={() => decrementItem(item.id)}>-</CountButton>
          <CountButton onClick={() => removeItem(item.id)}>X</CountButton>
        </CountButtonWrapper>
      </div>
    </CartSelectedItems>
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
      <Title>
        <CartIcon />
        장바구니
      </Title>
      {items.map((item, index) => (
        <CartItem item={item} index={index} key={index} />
      ))}
      <CartTotal>TOTAL : {totalPrice} 원</CartTotal>
    </div>
  );
};

export default CartMenu;
