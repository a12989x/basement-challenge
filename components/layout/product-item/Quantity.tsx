import {useContext} from "react";

import {CartContext} from "@/contexts/CartProvider";
import {MINUS_ONE, PLUS_ONE} from "@/store/actions/cartActions";

const Quantity = ({qty, id}: {qty: number | undefined; id: string}) => {
  const {dispatch} = useContext(CartContext);

  return (
    <div className="flex items-center text-md sm:text-xl quantity">
      <p>Quantity: </p>

      <div className="px-3 ml-4 grid grid-cols-3 gap-2 border rounded-full">
        <button className="text-2xl" onClick={() => dispatch({type: MINUS_ONE, payload: id})}>
          -
        </button>
        <span className="text-lg">{qty}</span>
        <button className="text-2xl" onClick={() => dispatch({type: PLUS_ONE, payload: id})}>
          +
        </button>
      </div>
    </div>
  );
};

export default Quantity;
