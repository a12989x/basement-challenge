import {Option} from "@/product/types";

const Label = ({option}: {option: Option}): JSX.Element => {
  return (
    <div className="flex items-center text-xl">
      <p>{option.label}</p>

      <div className="ml-4 grid gap-2 grid-flow-col">
        {option.values.map((value) => (
          <button key={value} className="px-2 border rounded-full">
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Label;
