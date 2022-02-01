import { transformToRandomReceipt } from "./transformation";

export const reno: string = "dobar dan";

export const test = () => console.log("key: ", process.env.REACT_APP_API_KEY);

export const fetchRandomReceipt = async (): Promise<any> => {
  const rawResponse = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}?apiKey=${process.env.REACT_APP_API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const response = await rawResponse.json();
  return transformToRandomReceipt(response);
};
