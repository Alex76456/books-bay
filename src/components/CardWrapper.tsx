import * as React from "react";

const CardWrapper = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <div className="flex flex-wrap justify-center">{children}</div>;
};

export default CardWrapper;
