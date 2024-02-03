"use client";

import Language from "@/app/components/language";
import { useState } from "react";
import InputField from "./components/field";
import { useTranslation } from "./actions";

export default function Home() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("ja");
  const translated = useTranslation({ text, language });

  return (
    <div className="pt-10 flex flex-col gap-4">
      <header>
        <h1 className="text-2xl font-semibold">Translation App</h1>
      </header>
      <InputField onChange={setText} />

      <div>
        <h2>Select Language</h2>
        <Language language={language} onLanguageChange={setLanguage} />
      </div>

      <div>
        <h2>Output</h2>
        <p>{translated.replace("&#39;", "'")}</p>
      </div>
    </div>
  );
}
