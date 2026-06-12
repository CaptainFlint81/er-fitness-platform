"use client";

import { AlertTriangle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";

import {
  createDisclaimerAcknowledgmentRecord,
  DISCLAIMER_VERSION,
  isDisclaimerProtectedPath
} from "@/lib/disclaimer-gate";
import { useLocaleRouting } from "@/lib/i18n/client";
import { medicalDisclaimer } from "@/lib/platform-data";

const storageKeys = {
  accepted: "disclaimerAccepted",
  version: "disclaimerVersion",
  acceptedAt: "acceptedAt",
  record: "disclaimerAcknowledgment"
};

const disclaimerStoreEvent = "er-fitness:disclaimer-acknowledgment";

function subscribeToDisclaimerStore(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const notify = () => onStoreChange();

  window.addEventListener("storage", notify);
  window.addEventListener(disclaimerStoreEvent, notify);

  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener(disclaimerStoreEvent, notify);
  };
}

function getDisclaimerSnapshot() {
  if (typeof window === "undefined") {
    return "pending";
  }

  try {
    const accepted = window.localStorage.getItem(storageKeys.accepted) === "true";
    const acceptedVersion = window.localStorage.getItem(storageKeys.version);

    return accepted && acceptedVersion === DISCLAIMER_VERSION ? "accepted" : "required";
  } catch {
    return "required";
  }
}

export function DisclaimerGate() {
  const pathname = usePathname();
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);
  const { localizePath, messages } = useLocaleRouting();
  const acceptanceStatus = useSyncExternalStore(subscribeToDisclaimerStore, getDisclaimerSnapshot, () => "pending");
  const gateOpen = Boolean(pathname && isDisclaimerProtectedPath(pathname) && acceptanceStatus === "required");

  useEffect(() => {
    if (!gateOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [gateOpen]);

  if (!gateOpen || !pathname) {
    return null;
  }

  function declineDisclaimer() {
    setConfirmed(false);
    router.replace(localizePath("/legal/disclaimer"));
  }

  function acceptDisclaimer() {
    if (!pathname || !confirmed) {
      return;
    }

    const acceptedAt = new Date().toISOString();
    const record = createDisclaimerAcknowledgmentRecord(pathname, acceptedAt);

    window.localStorage.setItem(storageKeys.accepted, "true");
    window.localStorage.setItem(storageKeys.version, DISCLAIMER_VERSION);
    window.localStorage.setItem(storageKeys.acceptedAt, acceptedAt);
    window.localStorage.setItem(storageKeys.record, JSON.stringify(record));
    window.dispatchEvent(new Event(disclaimerStoreEvent));

    setConfirmed(false);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/78 px-4 py-6 backdrop-blur-sm" role="presentation">
      <section
        aria-labelledby="disclaimer-gate-title"
        aria-describedby="disclaimer-gate-body"
        aria-modal="true"
        className="max-h-[calc(100vh-3rem)] w-full max-w-2xl overflow-y-auto rounded-md border border-ember-500/35 bg-graphite-950 shadow-glow"
        role="dialog"
      >
        <div className="border-b border-white/10 bg-white/[0.045] p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-ember-500/14 text-ember-400">
              <AlertTriangle size={26} aria-hidden />
            </div>
            <div>
              <p className="text-xs font-black uppercase text-volt-400">{messages.disclaimerGate.eyebrow}</p>
              <h2 id="disclaimer-gate-title" className="mt-2 text-2xl font-black text-white">
                {messages.disclaimerGate.title}
              </h2>
              <p className="mt-2 text-sm font-bold text-zinc-400">{messages.disclaimerGate.versionLabel} {DISCLAIMER_VERSION}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-5 sm:p-6">
          <div id="disclaimer-gate-body" className="rounded-md border border-white/10 bg-black/25 p-4">
            <p className="text-sm leading-6 text-zinc-300">{medicalDisclaimer}</p>
          </div>

          <div className="rounded-md border border-volt-400/25 bg-volt-400/8 p-4">
            <div className="flex items-start gap-3">
              <ShieldCheck size={21} className="mt-0.5 shrink-0 text-volt-400" aria-hidden />
              <p className="text-sm leading-6 text-zinc-300">
                {messages.disclaimerGate.storageNote}
              </p>
            </div>
          </div>

          <label className="flex cursor-pointer items-start gap-3 rounded-md border border-white/12 bg-white/[0.045] p-4">
            <input
              checked={confirmed}
              className="mt-1 h-4 w-4 accent-volt-400"
              onChange={(event) => setConfirmed(event.target.checked)}
              type="checkbox"
            />
            <span className="text-sm font-bold leading-6 text-white">{messages.disclaimerGate.checkbox}</span>
          </label>

          <div className="flex flex-wrap gap-3 text-sm font-bold">
            <Link href={localizePath("/legal/privacy")} className="text-volt-400 hover:text-volt-300">
              {messages.legal.privacy}
            </Link>
            <Link href={localizePath("/legal/terms")} className="text-volt-400 hover:text-volt-300">
              {messages.legal.terms}
            </Link>
            <Link href={localizePath("/legal/disclaimer")} className="text-volt-400 hover:text-volt-300">
              {messages.legal.fullDisclaimer}
            </Link>
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-5 sm:flex-row sm:justify-end">
            <button
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/14 bg-white/6 px-4 py-2 text-sm font-black uppercase text-white transition hover:border-ember-400/60"
              onClick={declineDisclaimer}
              type="button"
            >
              {messages.disclaimerGate.decline}
            </button>
            <button
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-volt-400 px-4 py-2 text-sm font-black uppercase text-graphite-950 transition enabled:hover:bg-volt-300 disabled:cursor-not-allowed disabled:opacity-45"
              disabled={!confirmed}
              onClick={acceptDisclaimer}
              type="button"
            >
              {messages.disclaimerGate.accept}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
