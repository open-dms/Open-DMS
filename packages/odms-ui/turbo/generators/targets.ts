export const outputPaths = [{ key: "odms-app", value: "./app" }]; // lead to `odms-app` in turborepo "../../../../apps/odms-app/app/"

export const pascalToSentence = (input: string): string => {
  return input.split(/(?=[A-Z])/).join(" ");
};
