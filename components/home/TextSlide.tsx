const TextSlide = (): JSX.Element => {
  return (
    <div
      className="overflow-x-hidden w-full relative border-t border-b"
      style={{height: "74px", transform: "translate3d(0, 0, 0)"}}
    >
      <p
        className="mt-4 absolute top-0 left-0 font-bold text-4xl animate-slideshow"
        style={{height: "calc(72px - 1rem)", width: "2599px"}}
      >
        A man can’t have enough base­ment swag - A man can’t have enough base­ment swag - A man
        can’t have enough base­ment swag
      </p>
    </div>
  );
};

export default TextSlide;
