export const useNotify = () => {
  const onSuccess = (message: string) => {
    return console.log("✨", JSON.stringify(message));
  };
  const onError = (message: string) => {
    return console.warn("✨", JSON.stringify(message));
  };
  const onDebug = (message: string) => {
    return console.info("✨", JSON.stringify(message));
  };
  const onRequest = (message: string) => {
    return console.info("✨", "TRACK:EVENT", JSON.stringify(message));
  };
  return { onSuccess, onError, onDebug, onRequest };
};
