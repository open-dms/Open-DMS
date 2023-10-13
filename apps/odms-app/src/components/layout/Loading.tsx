import React from "react";

type LoadingProps = {
  message: string;
};

const Loading = ({ message = "..." }: LoadingProps): JSX.Element => {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="jump text-center">
        <h1 className="text-2xl">🫧</h1>
      </div>
    </div>
  );
};

export default Loading;
