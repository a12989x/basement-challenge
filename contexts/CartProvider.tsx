import {createContext, Dispatch, ReactNode, useReducer} from "react";

import {Product} from "product/types";
import cartReducer, {CartAction, initialState} from "store/reducers/cartReducer";

export const CartContext = createContext<{state: Product[]; dispatch: Dispatch<CartAction>}>({
  state: initialState,
  dispatch: () => null,
});

const CartContextProvider = ({children}: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return <CartContext.Provider value={{state, dispatch}}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
