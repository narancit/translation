import axios, { CancelTokenSource } from "axios";

interface doTranslationProps {
  text: string;
  language: string;
  cancelToken: CancelTokenSource;
  callback: (data: string) => void;
}

export async function doTranslation({
  text,
  language,
  cancelToken,
  callback,
}: doTranslationProps) {
  const apiKey = process.env.GOOGLE_API_KEY;
  const apiUrl = process.env.GOOGLE_API_URL;

  if (!apiKey || !apiUrl) throw new Error("Google APIs not defined.");

  const endpointURL = apiUrl + apiKey;
  try {
    const { data } = await axios.post(
      endpointURL,
      {
        q: text,
        target: language,
      },
      { cancelToken: cancelToken.token }
    );

    callback(data.data.translations[0].translatedText);
  } catch (err) {
    callback("");
  }
}
