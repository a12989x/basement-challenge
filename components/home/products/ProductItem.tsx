import {FC, useContext, useState} from "react";
import Image from "next/image";

import {CartContext} from "@/contexts/CartProvider";
import {IProduct} from "@/product/types";
import world from "@/public/world.svg";
import {ADD_PRODUCT} from "@/store/actions/cartActions";

const ProductItem: FC<{productItem: IProduct}> = ({productItem}): JSX.Element => {
  const {cartDispatch} = useContext(CartContext);
  const [isHover, setIsHover] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleClick = () => {
    try {
      cartDispatch({type: ADD_PRODUCT, payload: productItem});
      setIsAddedToCart(true);
    } catch (err) {
      throw new Error("Error to add the product to cart");
    }

    setTimeout(() => {
      setIsAddedToCart(false);
    }, 300);
  };

  const handleHover = () => {
    setIsHover((v) => !v);
  };

  return (
    <section className="mx-auto w-full product">
      <button
        className="flex justify-center relative w-full border-b-2"
        style={{
          background: "linear-gradient(0deg, #1D1D1D 0%, rgba(21, 21, 21, 0) 100%)",
        }}
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className="transition duration-300 transform hover:scale-95">
          <Image alt={productItem.name} height="538" src={productItem.image} width="400" />
        </div>

        {isHover && (
          <>
            <div
              className="absolute transform pointer-events-none"
              style={{top: "50%", transform: "translateY(-50%)"}}
            >
              <Image alt="world icon" src={world} />
            </div>
            <p
              className="absolute transform text-4xl text-black uppercase pointer-events-none"
              style={{
                WebkitTextStroke: "2px #fff",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {isAddedToCart ? "Added To Cart" : "Add to cart"}
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
