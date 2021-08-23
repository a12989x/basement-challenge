import {CartContext} from "@/contexts/CartProvider";
import {IOption, TID} from "@/product/types";
import {CHANGE_LABEL} from "@/store/actions/cartActions";
import {FC, useContext} from "react";

interface ILabelProps {
  option: IOption;
  id: TID;
  currentValue: string;
}

const Label: FC<ILabelProps> = ({option, id, currentValue}) => {
  const {cartDispatch} = useContext(CartContext);

  return (
    <div className="flex items-center text-md sm:text-xl">
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
              cartDispatch({type: CHANGE_LABEL, payload: {id, cart: {label: option.label, value}}})
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
