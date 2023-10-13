import Link from "next/link";
import React from "react";

const JoinGetVerifiedPage = (): JSX.Element => {
  const now = new Date().getTime();
  return (
    <div className="w-full flex flex-col justify-between h-full p-20">
      <div className="flex flex-col gap-3">
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
          </div>
          <Link className="text-xs" href={`/de/join?retry=${now}`}>
            I did not receive a verficiation email
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinGetVerifiedPage;
