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
      <p>{option.label}:</p>

      <div className="ml-4 grid gap-2 grid-flow-col">
        {option.values.map((value) => (
          <button
            key={value}
            className={`px-2 border rounded-full transition duration-150 ease-in-out ${
              value === currentValue
                ? "border-opacity-100 hover:border-opacity-100"
                : "border-opacity-0 hover:border-opacity-60"
            }`}
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
