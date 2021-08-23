import {createContext, Dispatch, ReactNode, useEffect, useReducer} from "react";

import {IProductCart} from "@/product/types";
import cartReducer, {CartAction, initialState} from "@/store/reducers/cartReducer";
import {LOAD_CART} from "@/store/actions/cartActions";

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

  useEffect(() => {
    // @ts-ignore
    const cart: IProductCart[] = JSON.parse(localStorage.getItem("cartState"));

    if (cart) cartDispatch({type: LOAD_CART, payload: cart});
  }, []);

  return <CartContext.Provider value={{cartState, cartDispatch}}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
