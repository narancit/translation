import { Input } from "@nextui-org/react";
import { useEffect, useRef } from "react";

interface FieldProps {
  onChange: (value: string) => void;
}

export default function InputField({ onChange }: FieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <Input
      type="text"
      label="Enter English"
      onChange={(e) => onChange(e.target.value)}
      ref={inputRef}
      className="border-none"
    />
  );
}
