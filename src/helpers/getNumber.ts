export const getNumber = (url: string | undefined): string => {
  
  if (!url) {
    console.error("URL undefined.");
    return "";
  } 

  const parts = url.split("/"); //Split URL into parts using '/'
  const lastPart = parts[parts.length - 2]; //Gets the penultimate element (the number)
  return lastPart;
};
