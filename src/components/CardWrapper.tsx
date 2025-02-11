import { FC } from "react";

type ICardWrapperProps = {
  children: React.ReactNode | React.ReactNode[];
};

const CardWrapper: FC<ICardWrapperProps> = ({ children }) => {
  return <div className="flex flex-wrap justify-center">{children}</div>;
};

export default CardWrapper;
