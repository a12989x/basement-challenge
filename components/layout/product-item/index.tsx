import {Product} from "@/product/types";
import Image from "next/image";
import Label from "./Label";
import Quantity from "./Quantity";

const ProductItem = ({product}: {product: Product}): JSX.Element => {
  return (
    <div
      className="p-4 grid gap-5 border-2 uppercase"
      data-test-id={`product-modal-${product.id}`}
      style={{gridTemplateColumns: "auto 1fr"}}
    >
      <div
        className="px-10"
        style={{
          background: "linear-gradient(0deg, #1D1D1D 0%, rgba(21, 21, 21, 0) 100%)",
        }}
      >
        <Image alt={product.name} height="269" src={product.image} width="200" />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <p className="text-4xl">{product.name}</p>
          <p className="text-2xl capitalize" style={{color: "#999"}}>
            {product.description}
          </p>
        </div>

        <div className="grid gap-2">
          <Quantity id={product.id} qty={product.qty} />

          <div className="flex justify-between">
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

            <p className="text-3xl">${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
