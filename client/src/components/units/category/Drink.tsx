import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCart } from '../../commons/cart/CartContext';
import { MenuItem } from './MenuItem';
import { CardWrapper2, MenuContainer } from '../../commons/card/MenuCard2';
import styled from 'styled-components';
// import { CardWrapper, MenuContainer } from "../../commons/card/MenuCard";

type MenuList = MenuItem[];

const fetchMenuList = async () => {
  const response = await axios.get('http://localhost:3001/Beverage');
  const menuList = response.data as MenuList;
  return menuList;
};

const Drink = () => {
  const [menuList, setMenuList] = useState<MenuList>([]);

  useEffect(() => {
    void (async () => {
      try {
        const data = await fetchMenuList();
        // 각 메뉴 항목에 대해 amount를 1로 설정합니다.
        const updatedData = data.map((menuItem) => ({
          ...menuItem,
          amount: 1,
        }));
        setMenuList(updatedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  // 장바구니

  const { addToCart } = useCart();
  const handleItemClick = (menuItem: MenuItem) => {
    addToCart({ ...menuItem });
  };

  return (
    <div>
      <MenuContainer>
        {menuList.map((menuItem, index) => (
          <CardWrapper2
            key={menuItem.id}
            onClick={() => handleItemClick(menuItem)}
          >
            <img src={menuItem.imageUrl} alt={menuItem.menuName} />
            <h4>{menuItem.menuName}</h4>
            <p>{menuItem.price}원</p>
            <p>수량: {menuItem.amount}</p>
          </CardWrapper2>
        ))}
      </MenuContainer>
    </div>
  );
};

export default Drink;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 320px;
  padding: 25px;
  margin-top: 30px;
  color: black;
  background-color: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  border: solid 1px #eaeaea;
  border-radius: 10px;
  img {
    width: 100%;
  }
`;
