import * as React from "react";

/** @note foobar */

interface TypeSelectorProps {
  children?: React.ReactNode;
}

const TypeSelector = ({ children }: TypeSelectorProps): React.ReactNode => {
  return (
    <div>
      <h1>TypeSelector</h1>
      {children}
    </div>
  );
};

export default TypeSelector;
