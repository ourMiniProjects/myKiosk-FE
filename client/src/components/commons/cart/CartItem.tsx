import { useCart } from "./CartContext";
import { MenuItem } from "../../units/category/MenuItem";
import * as S from "./CartList.styles";

interface CartItemProps {
  item: MenuItem;
  index: number;
}

const CartItem: React.FC<CartItemProps> = ({ item, index }) => {
  const { incrementItem, decrementItem, removeItem } = useCart();

  return (
    <S.CartSelectedItems>
      {/* <S.CartItemWrapper> */}
      <S.MenuImage>
        <img src={item.imageUrl} alt={item.menuName} />
      </S.MenuImage>
      <div key={index}>
        <S.MenuName>
          {item.menuName}
          <S.DeleteIcon onClick={() => removeItem(item.id)} />
        </S.MenuName>
        <S.CountButtonWrapper>
          <S.CountButton onClick={() => decrementItem(item.id)}>
            -
          </S.CountButton>
          <S.AmoutBox>{item.amount}</S.AmoutBox>
          <S.CountButton onClick={() => incrementItem(item.id)}>
            +
          </S.CountButton>
          <S.MenuPrice>{item.price * item.amount}원</S.MenuPrice>
        </S.CountButtonWrapper>
      </div>
      {/* </S.CartItemWrapper> */}
    </S.CartSelectedItems>
  );
};

export default CartItem;
