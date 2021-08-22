import {IOptionCart, Product} from "product/types";
import {ADD_PRODUCT, CHANGE_LABEL, MINUS_ONE, PLUS_ONE} from "store/actions/cartActions";

export type CartAction =
  | {type: "ADD_PRODUCT"; payload: Product}
  | {type: "DELETE_PRODUCT"}
  | {type: "PLUS_ONE"; payload: string}
  | {type: "MINUS_ONE"; payload: string}
  | {type: "CHANGE_LABEL"; payload: {id: string; cart: IOptionCart}};

export const initialState: Product[] = [];

const cartReducer = (store: Product[], action: CartAction) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const products = store;
      const newProduct = action.payload;
      const isProductInProducts = products.find((product) => product.id === newProduct.id);

      if (isProductInProducts) {
        const productIndexOf = products.indexOf(isProductInProducts);

        products[productIndexOf].qty! += 1;
      } else
        products.push({
          ...newProduct,
          qty: 1,
          cart: action.payload.options.map((option) => ({
            label: option.label,
            value: option.values[0],
          })),
        });

      return [...products];
    }

    case PLUS_ONE: {
      const products = store;
      const productId = action.payload;
      const productToUpdate = products.find((product) => product.id === productId);
      const productToUpdateIndexOf = products.indexOf(productToUpdate!);
      const currentQty = products[productToUpdateIndexOf].qty;

      products[productToUpdateIndexOf].qty = currentQty! + 1;

      return [...products];
    }

    case MINUS_ONE: {
      const products = store;
      const productId = action.payload;
      const productToUpdate = products.find((product) => product.id === productId);
      const productToUpdateIndexOf = products.indexOf(productToUpdate!);
      const currentQty = products[productToUpdateIndexOf].qty;

      if (currentQty! > 0) products[productToUpdateIndexOf].qty = currentQty! - 1;
      else return [...products];

      return [...products];
    }

    case CHANGE_LABEL: {
      const products = store;
      const productId = action.payload.id;
      const productLabel = action.payload.cart.label;
      const productValue = action.payload.cart.value;
      const productToUpdate = products.find((product) => product.id === productId);
      const productToUpdateIndexOf = products.indexOf(productToUpdate!);
      const productToUpdateCartLabel = products[productToUpdateIndexOf].cart!.find(
        (cartOption) => cartOption.label === productLabel,
      );
      const productToUpdateCartLabelIndexOf = products[productToUpdateIndexOf].cart!.indexOf(
        productToUpdateCartLabel!,
      );

      products[productToUpdateIndexOf].cart![productToUpdateCartLabelIndexOf].value = productValue;

      return [...products];
    }

    case DELETE_PRODUCT:
      return [...store];

    default:
      return store;
  }
};

export default cartReducer;
