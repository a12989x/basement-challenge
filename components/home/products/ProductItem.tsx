import Image from "next/image";
import {useState} from "react";

import world from "@/public/world.svg";
import {Product} from "product/types";

const ProductItem = ({productItem}: {productItem: Product}): JSX.Element => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover((v) => !v);
  };

  return (
    <section>
      <button
        className="flex justify-center relative border-b-2"
        style={{
          background: "linear-gradient(0deg, #1D1D1D 0%, rgba(21, 21, 21, 0) 100%)",
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <Image alt={productItem.name} height="538" src={productItem.image} width="400" />

        {isHover && (
          <>
            <div className="absolute transform" style={{top: "50%", transform: "translateY(-50%)"}}>
              <Image alt="worl icon" src={world} />
            </div>
            <p
              className="absolute transform text-4xl text-black uppercase"
              style={{
                WebkitTextStroke: "1px #fff",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              Add to cart
            </p>
          </>
        )}
      </button>
      <div className="mt-2 flex justify-between text-xl">
        <p>{productItem.name}</p>
        <p>$ {productItem.price}</p>
      </div>
    </section>
  );
};

export default ProductItem;
