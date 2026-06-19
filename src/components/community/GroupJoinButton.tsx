import { UserPlus } from "lucide-react";

type GroupJoinButtonProps = {
  groupName: string;
  initialMembers: number;
  compact?: boolean;
};

export function GroupJoinButton({ groupName, initialMembers, compact = false }: GroupJoinButtonProps) {
  void initialMembers;

  return (
    <div className="grid gap-2">
      <button
        type="button"
        disabled
        className="inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-white/10 bg-white/6 px-4 text-sm font-black uppercase text-zinc-400"
      >
        <UserPlus size={17} aria-hidden />
        Preview only
      </button>
      <p className={`${compact ? "sr-only" : "text-xs font-bold text-zinc-500"}`} aria-live="polite">
        {`${groupName} membership opens when account access is enabled. No join action is active on this website preview.`}
      </p>
    </div>
  );
}
