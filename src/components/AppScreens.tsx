import Image from "next/image";

export function AppScreens() {
  return (
    <div className="relative mx-auto grid w-full min-w-0 max-w-lg grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-3 overflow-hidden sm:gap-5 lg:mx-0">
      <div className="min-w-0 translate-y-5">
        <Image
          src="/brand/app-screen-workouts.svg"
          alt="Workout system app screen"
          width={360}
          height={720}
          className="h-auto w-full rounded-[2rem] border border-white/10 bg-black shadow-glow"
          priority
        />
      </div>
      <div className="-translate-y-3 min-w-0">
        <Image
          src="/brand/app-screen-profile.svg"
          alt="Profile and transformation app screen"
          width={360}
          height={720}
          className="h-auto w-full rounded-[2rem] border border-white/10 bg-black shadow-glow"
          priority
        />
      </div>
    </div>
  );
}
