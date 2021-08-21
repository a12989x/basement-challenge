import {useContext} from "react";

import {CartContext} from "@/contexts/CartProvider";
import {Option} from "@/product/types";
import {CHANGE_LABEL} from "@/store/actions/cartActions";

const Label = ({
  option,
  id,
  currentValue,
}: {
  option: Option;
  id: string;
  currentValue: string;
}): JSX.Element => {
  const {dispatch} = useContext(CartContext);

  return (
    <div className="flex items-center text-xl">
      <p>{option.label}</p>

      <div className="ml-4 grid gap-2 grid-flow-col">
        {option.values.map((value) => (
          <button
            key={value}
            className={`px-2 ${value === currentValue ? "border rounded-full" : ""}`}
            onClick={() =>
              dispatch({type: CHANGE_LABEL, payload: {id, cart: {label: option.label, value}}})
            }
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Label;
