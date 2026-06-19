import { Eye } from "lucide-react";

import { visibilityOptions } from "@/lib/content-data";
import type { Visibility } from "@/types/content";

type VisibilitySelectorProps = {
  defaultValue?: Visibility;
  label?: string;
  disabled?: boolean;
};

export function VisibilitySelector({ defaultValue = "public", label = "Visibility", disabled = false }: VisibilitySelectorProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-zinc-200">
      <span className="inline-flex items-center gap-2">
        <Eye size={16} className="text-volt-400" aria-hidden />
        {label}
      </span>
      <select
        defaultValue={defaultValue}
        disabled={disabled}
        className="h-11 rounded-md border border-white/10 bg-black/40 px-3 text-sm text-white outline-none focus:border-volt-400 disabled:cursor-not-allowed disabled:opacity-55"
      >
        {visibilityOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
