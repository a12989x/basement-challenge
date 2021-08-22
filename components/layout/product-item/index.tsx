import Image from "next/image";

import Label from "./Label";
import Quantity from "./Quantity";

import {Product} from "@/product/types";

const ProductItem = ({product}: {product: Product}): JSX.Element => {
  return (
    <div
      className="p-4 grid gap-5 border-2 uppercase"
      data-test-id={`product-modal-${product.id}`}
      style={{gridTemplateColumns: "auto 1fr"}}
    >
      <div
        className="px-0 flex justify-center items-center sm:px-10"
        style={{
          background: "linear-gradient(0deg, #1D1D1D 0%, rgba(21, 21, 21, 0) 100%)",
        }}
      >
        <Image alt={product.name} height="269" src={product.image} width="200" />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <p className="text-2xl sm:text-4xl">{product.name}</p>
          <p className="text-lg sm:text-2xl capitalize" style={{color: "#999"}}>
            {product.description}
          </p>
        </div>

        <div className="grid gap-2">
          <Quantity id={product.id} qty={product.qty} />

          <div className="grid sm:grid-cols-2 gap-2">
            {product.options.map((option) => (
              <Label
                key={option.label}
                currentValue={
                  product.cart!.find((cartOption) => cartOption.label === option.label)!.value
                }
                id={product.id}
                option={option}
              />
            ))}

            <p className="text-2xl sm:text-4xl sm:justify-self-end">${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
