type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-sm font-black uppercase text-ember-400">{eyebrow}</p> : null}
      <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">{description}</p> : null}
    </div>
  );
}
