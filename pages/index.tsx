import type {GetStaticProps, NextPage} from "next";
import {motion} from "framer-motion";

// import getProducts from "@/utils/getProducts";
import Header from "@/components/home/Header";
import TextSlide from "@/components/home/TextSlide";
import Asterisks from "@/components/home/Asterisks";
import Products from "@/components/home/products";
import {IProduct} from "@/product/types";

export const getStaticProps: GetStaticProps = async () => {
  const products: IProduct[] = await import("../product/mock.json").then((res) => res.default);
  // const products: Product[] = await getProducts();

  return {props: {products}};
};

const Home: NextPage<{products: IProduct[]}> = ({products}) => {
  return (
    <motion.section animate={{y: 0, opacity: 1}} initial={{y: 50, opacity: 0}}>
      <Header />

      <div className="relative">
        <TextSlide />
        <Asterisks />
      </div>

      <Products products={products} />
    </motion.section>
  );
};

export default Home;
