import Link from "next/link";
import React from "react";

const JoinGetProfilePage = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div>
        <h1 className="text-2xl  text-gray-800  dark:text-white">
          {"Verification email sent!"}
        </h1>
        <div className="h-80">
          <p className={`my-4 text-gray-500 dark:text-gray-400`}>
            {
              "We've sent a message to your email address, containing a link to verify and access your ODMS account."
            }
          </p>
          <p className={`my-4 text-gray-500 dark:text-gray-400`}>
            {"Check your emails! This window can be closed."}
          </p>
          <Link className="text-xs" href="/de/join">
            I did not receive a verficiation email
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinGetProfilePage;
