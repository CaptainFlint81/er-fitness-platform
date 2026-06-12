import Image from "next/image";
import Link from "next/link";

const headerLogo = "/brand/er_app_icon.png";

export function Logo({ compact = false, prominent = false }: { compact?: boolean; prominent?: boolean }) {
  const logoSize = prominent
    ? "h-[112px] w-[112px] sm:h-[116px] sm:w-[116px] lg:h-[120px] lg:w-[120px]"
    : `${compact ? "h-[86px]" : "h-[104px]"} w-[259px] sm:w-[324px] lg:w-[389px]`;

  return (
    <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Every Routine Fitness home">
      <Image
        src={headerLogo}
        alt="Every Routine Fitness app logo"
        width={1484}
        height={1536}
        priority
        sizes={prominent ? "(min-width: 1024px) 120px, (min-width: 640px) 116px, 112px" : "(min-width: 1024px) 389px, (min-width: 640px) 324px, 259px"}
        className={`${logoSize} shrink-0 object-contain object-left drop-shadow-[0_0_20px_rgba(255,106,0,0.4)]`}
      />
    </Link>
  );
}
