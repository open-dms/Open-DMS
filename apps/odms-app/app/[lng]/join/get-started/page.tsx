import React from "react";

const JoinGetStartedPage = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div>
        <h1 className="text-2xl  text-gray-800  dark:text-white">
          {"SETUP YOUR ACCOUNT"}
        </h1>
        <div className="h-80">
          <p className={`my-4 text-gray-500 dark:text-gray-400`}>
            {"Give some quick first things so setup your account."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinGetStartedPage;
