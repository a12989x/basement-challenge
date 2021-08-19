import {Product} from "product/types";
import {ADD_PRODUCT, DELETE_PRODUCT, PLUS_ONE} from "store/actions/cartActions";

export type CartAction =
  | {type: "ADD_PRODUCT"; payload: Product}
  | {type: "DELETE_PRODUCT"}
  | {type: "PLUS_ONE"; payload: Product};

export const initialState: Product[] = [];

const cartReducer = (store: Product[], action: CartAction) => {
  switch (action.type) {
    case ADD_PRODUCT:
      if (store.find((product) => product.id === action.payload.id)) {
        const productIndexOf = store.indexOf(
          store.find((product) => product.id === action.payload.id)!,
        );

        store[productIndexOf].qty! += 1;
      } else store.push({...action.payload, qty: 1});

      return [...store];

    case PLUS_ONE:
      store[store.indexOf(store.find((product) => product.id === action.payload.id)!)].qty! += 1;

      return [...store];

    case DELETE_PRODUCT:
      return [...store];

    default:
      return store;
  }
};

export default cartReducer;
