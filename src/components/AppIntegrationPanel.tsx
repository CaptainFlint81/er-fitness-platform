import { Dumbbell, ExternalLink, PlayCircle, Route } from "lucide-react";

import { ButtonLink } from "@/components/ButtonLink";
import type { EducationTopic } from "@/lib/education-data";

type AppIntegrationPanelProps = {
  topic: EducationTopic;
};

export function AppIntegrationPanel({ topic }: AppIntegrationPanelProps) {
  const topicParam = encodeURIComponent(topic.slug);
  const programParam = encodeURIComponent(topic.relatedProgram);

  return (
    <section className="rounded-md border border-volt-400/25 bg-volt-400/8 p-5">
      <p className="text-sm font-black uppercase text-volt-300">Website teaches. App tracks.</p>
      <h2 className="mt-2 text-2xl font-black text-white">Continue this topic in E.R. Fitness.</h2>
      <p className="mt-3 text-sm leading-6 text-zinc-300">{topic.trackingPrompt}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <ButtonLink href={`/dashboard?open=${topicParam}`} icon={<ExternalLink size={17} aria-hidden />}>
          Dashboard Preview
        </ButtonLink>
        <ButtonLink href={`/dashboard?track=${topicParam}`} variant="secondary" icon={<Route size={17} aria-hidden />}>
          Tracking Handoff Preview
        </ButtonLink>
        <ButtonLink href={`${topic.relatedHref}?program=${programParam}`} variant="ghost" icon={<PlayCircle size={17} aria-hidden />}>
          Related Program Preview
        </ButtonLink>
        <ButtonLink href={topic.relatedHref} variant="ghost" icon={<Dumbbell size={17} aria-hidden />}>
          Related Workout Category
        </ButtonLink>
      </div>
    </section>
  );
}
