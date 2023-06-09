/* eslint-disable react/prop-types */
// CartContext.tsx
import { createContext, useContext, useState } from 'react';
import { MenuItem } from '../../units/category/MenuItem';

interface CartItem extends MenuItem {}

interface CartContextValue {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const existingItem = items.find((existing) => existing.id === item.id);

    if (!existingItem) {
      setItems([...items, item]);
    }
  };

  const incrementItem = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const decrementItem = (id: number) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        )
        .filter((item) => item.amount > 0)
    );
  };

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        incrementItem,
        decrementItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
