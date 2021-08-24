import {FC, MouseEventHandler} from "react";

interface ICloseButtonProps {
  closeModal: MouseEventHandler<HTMLButtonElement>;
}

const CloseButton: FC<ICloseButtonProps> = ({closeModal}) => {
  return (
    <button className="mb-4 sm:mb-8 ml-auto text-2xl sm:text-4xl uppercase" onClick={closeModal}>
      → Close
    </button>
  );
};

export default CloseButton;
