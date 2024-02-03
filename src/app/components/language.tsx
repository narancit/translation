import { Chip } from "@nextui-org/react";

interface LanguageProps {
  language: string;
  onLanguageChange: (language: string) => void;
}

const LANGUAGES = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "French", value: "fr" },
  { label: "Hindi", value: "hi" },
  { label: "Japanese", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Simplified Chinese", value: "zh-CN" },
  { label: "Spanish", value: "es" },
  { label: "Swahili", value: "sw" },
  { label: "Thai", value: "th" },
];

export default function Language({
  language,
  onLanguageChange,
}: LanguageProps) {
  return (
    <div className="flex mt-2 gap-2 flex-wrap">
      {LANGUAGES.map(({ label, value }) => {
        const bg = language === value ? "bg-warning-50" : "";

        return (
          <Chip
            key={label}
            color="warning"
            variant="solid"
            radius="sm"
            className={`cursor-pointer border border-warning-300 hover:bg-warning-50 ${bg}`}
            onClick={() => onLanguageChange(value)}
          >
            {label}
          </Chip>
        );
      })}
    </div>
  );
}
