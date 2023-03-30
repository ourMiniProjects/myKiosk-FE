import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../commons/cart/CartContext";
import { MenuItem } from "./MenuItem";
import styled from "styled-components";
import { CardWrapper2, MenuContainer } from "../../commons/card/MenuCard2";
// import { CardWrapper, MenuContainer } from "../../commons/card/MenuCard";

type MenuList = MenuItem[][];

const fetchMenuList = async () => {
  const response = await axios.get("http://localhost:3001/MenuList");
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
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  // 장바구니

  const { addToCart } = useCart();
  const handleItemClick = (menuItem: MenuItem) => {
    addToCart({ ...menuItem });
  };

  return (
    <>
      <MenuContainer>
        {menuList.map((menuItems, index) => (
          <div key={index}>
            {menuItems.map((menuItem) => (
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
          </div>
        ))}
      </MenuContainer>
    </>
  );
};

export default Burgers;

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
