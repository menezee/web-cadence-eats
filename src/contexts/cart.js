import { createContext, useState } from 'react';

const CartContext = createContext({});

function CartContextProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [workflowId, setWorkflowId] = useState(null);
  const [orderDataDetails, setOrderDataDetails] = useState({ CourierName: 'Bruce', ETA: 900 });
  
  const addMeal = newMeal => {
    setMeals([
      ...meals,
      newMeal,
    ]);
  };
  
  return (
    <CartContext.Provider value={{ meals, addMeal, workflowId, setWorkflowId, orderDataDetails, setOrderDataDetails }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
export { CartContext };
