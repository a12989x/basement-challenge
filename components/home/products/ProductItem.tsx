import {CartContext} from "@/contexts/CartProvider";
import {IProduct} from "@/product/types";
import world from "@/public/world.svg";
import {ADD_PRODUCT} from "@/store/actions/cartActions";
import Image from "next/image";
import {FC, useContext, useState} from "react";

const ProductItem: FC<{productItem: IProduct}> = ({productItem}): JSX.Element => {
  const {cartDispatch} = useContext(CartContext);
  const [isHover, setIsHover] = useState(false);

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
        onClick={() => cartDispatch({type: ADD_PRODUCT, payload: productItem})}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <Image alt={productItem.name} height="538" src={productItem.image} width="400" />

        {isHover && (
          <>
            <div className="absolute transform" style={{top: "50%", transform: "translateY(-50%)"}}>
              <Image alt="world icon" src={world} />
            </div>
            <p
              className="absolute transform text-4xl text-black uppercase"
              style={{
                WebkitTextStroke: "2px #fff",
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
