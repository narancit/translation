import { useEffect, useState } from "react";
import axios from "axios";
import { doTranslation } from "@/app/actions/do-translation";

interface useTranslationProps {
  text: string;
  language: string;
}

export function useTranslation({ text, language }: useTranslationProps) {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (!text) return;

    const cancelToken = axios.CancelToken.source();

    // TODO: translation
    doTranslation({text, language, cancelToken, callback: setTranslated})

    return () => {
      try {
        cancelToken.cancel();
      } catch (error) {}
    };
  }, [text, language]);

  return translated;
}