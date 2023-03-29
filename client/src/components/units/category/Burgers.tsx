import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../../commons/cart/CartContext';

interface MenuItem {
  id: number;
  menuName: string;
  price: number;
  imageUrl: string;
  amount: number;
}

type MenuList = MenuItem[][];

const fetchMenuList = async () => {
  const response = await axios.get('http://localhost:3001/MenuList');
  const menuList = response.data as MenuList;
  return menuList;
};

const Burgers = () => {
  const [menuList, setMenuList] = useState<MenuList>([]);

  useEffect(() => {
    void (async () => {
      try {
        const data = await fetchMenuList();
        setMenuList(data);
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
      {menuList.map((menuItems, index) => (
        <div key={index}>
          {menuItems.map((menuItem) => (
            <div key={menuItem.id} onClick={() => handleItemClick(menuItem)}>
              <img
                src={menuItem.imageUrl}
                alt={menuItem.menuName}
                onClick={() => handleItemClick(menuItem)}
              />
              <h4>{menuItem.menuName}</h4>
              <p>{menuItem.price}원</p>
              <p>수량: {menuItem.amount}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Burgers;
