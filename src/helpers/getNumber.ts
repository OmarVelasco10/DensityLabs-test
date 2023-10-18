export const getNumber = (url: string | undefined): string => {
  if (url) {
    const parts = url.split("/"); //Split URL into parts using '/'
    const lastPart = parts[parts.length - 2]; //Gets the penultimate element (the number)
    return lastPart;
  } else {
    console.error("URL undefined.");
    return "";
  }
};
