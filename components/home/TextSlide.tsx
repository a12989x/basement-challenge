const TextSlide = (): JSX.Element => {
  return (
    <div
      className="overflow-x-hidden w-full relative border-t border-b"
      // style={{height: "75px", transform: "translate3d(0, 0, 0)"}}
    >
      <p
        className="my-4 font-bold text-4xl animate-slideshow"
        style={{width: "105%", transform: "translateX(100%)"}}
      >
        A man can’t have enough base­ment swag
      </p>
      <p
        className="my-4 font-bold text-4xl animate-slideshow"
        style={{width: "105%", transform: "translateX(100%)"}}
      >
        A man can’t have enough base­ment swag
      </p>
    </div>
  );
};

export default TextSlide;
