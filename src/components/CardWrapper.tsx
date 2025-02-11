import { FC, ReactNode } from "react";

type ICardWrapperProps = {
  children: ReactNode | ReactNode[];
};

const CardWrapper: FC<ICardWrapperProps> = ({ children }) => {
  return <div className="flex flex-wrap justify-center">{children}</div>;
};

export default CardWrapper;
