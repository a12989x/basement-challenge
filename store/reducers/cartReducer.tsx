import {IOptionCart, IProduct, IProductCart} from "@/product/types";
import {ADD_PRODUCT, CHANGE_LABEL, MINUS_ONE, PLUS_ONE, LOAD_CART} from "store/actions/cartActions";

export type CartAction =
  | {type: "ADD_PRODUCT"; payload: IProduct}
  | {type: "DELETE_PRODUCT"}
  | {type: "PLUS_ONE"; payload: string}
  | {type: "MINUS_ONE"; payload: string}
  | {type: "CHANGE_LABEL"; payload: {id: string; cart: IOptionCart}}
  | {type: "LOAD_CART"; payload: IProductCart[]};

export const initialState: IProductCart[] = [];

const updateCart = (cartState: IProductCart[]) => {
  localStorage.setItem("cartState", JSON.stringify(cartState));
};

const cartReducer = (store: IProductCart[], action: CartAction) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const products = store;
      const newProduct = action.payload;
      const isProductInProducts = products.find((product) => product.id === newProduct.id);

      if (isProductInProducts) {
        const productIndexOf = products.indexOf(isProductInProducts);
        const currentQty = products[productIndexOf].qty;

        products[productIndexOf].qty = currentQty + 1;
        // eslint-disable-next-line prettier/prettier
      } else // @ts-ignore
        products.push({
          ...newProduct,
          qty: 1,
          cart: newProduct.options.map((option) => ({
            label: option.label,
            value: option.values[0],
          })),
        });

      updateCart(products);

      return [...products];
    }

    case PLUS_ONE: {
      const products = store;
      const productId = action.payload;
      const productToUpdate = products.find((product) => product.id === productId);
      const productToUpdateIndexOf = products.indexOf(productToUpdate!);
      const currentQty = products[productToUpdateIndexOf].qty;

      products[productToUpdateIndexOf].qty = currentQty + 1;

      updateCart(products);

      return [...products];
    }

    case MINUS_ONE: {
      let products = store;
      const productId = action.payload;
      const productToUpdate = products.find((product) => product.id === productId);
      const productToUpdateIndexOf = products.indexOf(productToUpdate!);
      const currentQty = products[productToUpdateIndexOf].qty;

      if (currentQty! > 0) products[productToUpdateIndexOf].qty = currentQty - 1;
      else if (currentQty <= 1) products = products.filter((product) => product.id !== productId);
      else return [...products];

      updateCart(products);

      return [...products];
    }

    case CHANGE_LABEL: {
      const products = store;
      const productId = action.payload.id;
      const productLabel = action.payload.cart.label;
      const productValue = action.payload.cart.value;
      const productToUpdate = products.find((product) => product.id === productId);
      const productToUpdateIndexOf = products.indexOf(productToUpdate!);
      const productToUpdateCartLabel = products[productToUpdateIndexOf].cart.find(
        (cartOption) => cartOption.label === productLabel,
      );
      const productToUpdateCartLabelIndexOf = products[productToUpdateIndexOf].cart.indexOf(
        productToUpdateCartLabel!,
      );

      products[productToUpdateIndexOf].cart[productToUpdateCartLabelIndexOf].value = productValue;

      updateCart(products);

      return [...products];
    }

    case LOAD_CART: {
      const products = action.payload;

      updateCart(products);

      return [...products];
    }

    default:
      return store;
  }
};

export default cartReducer;
