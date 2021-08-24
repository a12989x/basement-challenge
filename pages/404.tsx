import Link from "next/link";
import {motion} from "framer-motion";

import {simpleYAndOpacity} from "animations";

const Custom404 = () => {
  return (
    <div className="h-full w-full absolute top-0 left-0 bg-black z-40 overflow-hidden">
      <motion.main
        animate="show"
        className="h-full w-full flex flex-col items-center justify-center"
        initial="hidden"
        variants={simpleYAndOpacity}
      >
        <p className="text-black  text-9xl" style={{WebkitTextStroke: "2px #fff"}}>
          404
        </p>
        <p className="text-2xl">Page Not Found</p>

        <Link href="/">
          <a className="py-2 px-4 mt-8 sm:mb-8 text-xl border rounded-full transition hover:text-black hover:bg-white">
            Go to the Home Page
          </a>
        </Link>
      </motion.main>
    </div>
  );
};

export default Custom404;
