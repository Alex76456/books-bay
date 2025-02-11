import { FC } from "react";
import { useNavigate } from "react-router-dom";

type INavigateWrapperProps = {
  children: React.ReactNode | React.ReactNode[];
  path: string;
};

const NavigateWrapper: FC<INavigateWrapperProps> = ({ children, path }) => {
  const navigate = useNavigate();

  // console.log("path", path);
  return (
    <div
      className="cursor-pointer transition ease-in-out duration-300 hover:scale-105"
      onClick={() => navigate(path)}
    >
      {children}
    </div>
  );
};

export default NavigateWrapper;
