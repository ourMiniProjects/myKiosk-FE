// CartMenu.tsx
import { useCart } from './CartContext';

const CartMenu = () => {
  const { items } = useCart();

  return (
    <div>
      <h2>장바구니</h2>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.imageUrl} alt={item.menuName} />
          <h4>{item.menuName}</h4>
          <p>{item.price}원</p>
          <p>수량: {item.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default CartMenu;
