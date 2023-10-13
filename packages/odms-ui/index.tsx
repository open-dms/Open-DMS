import * as contribs from "./src/components/contrib";

declare module "next-auth";

const UI = {
  ...contribs,
  helpers: {
    test: (evt: any) => {
      console.log("test-event");
    },
  },
};

export default UI;
