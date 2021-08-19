const Quantity = ({qty}: {qty: number | undefined}) => {
  return (
    <div className="flex items-center text-xl">
      <p>Quantity: </p>

      <div className="px-3 ml-4 grid grid-cols-3 gap-2 border rounded-full">
        <button className="text-2xl">-</button>
        <span>{qty}</span>
        <button className="text-2xl">+</button>
      </div>
    </div>
  );
};

export default Quantity;
