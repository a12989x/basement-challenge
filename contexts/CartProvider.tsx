import {createContext, Dispatch, ReactNode, useReducer} from "react";

import {IProductCart} from "@/product/types";
import cartReducer, {CartAction, initialState} from "store/reducers/cartReducer";

interface IContext {
  cartState: IProductCart[];
  cartDispatch: Dispatch<CartAction>;
}

export const CartContext = createContext<IContext>({
  cartState: initialState,
  cartDispatch: () => null,
});

const CartContextProvider = ({children}: {children: ReactNode}) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  return <CartContext.Provider value={{cartState, cartDispatch}}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
