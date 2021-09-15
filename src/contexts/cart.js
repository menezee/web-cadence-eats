import { createContext, useState } from 'react';

const CartContext = createContext({});

function CartContextProvider({ children }) {
  const [meals, setMeals] = useState([]);
  
  const addMeal = newMeal => {
    setMeals([
      ...meals,
      newMeal,
    ]);
  };
  
  return (
    <CartContext.Provider value={{ meals, addMeal, }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
export { CartContext };
