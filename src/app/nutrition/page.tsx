import { ShoppingBasket, Utensils } from "lucide-react";

import { CardGrid } from "@/components/CardGrid";
import { ContentPackPanel, PublicMaterialsPanel } from "@/components/ContentPackPanel";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { KnowledgeResourcePanel } from "@/components/KnowledgeResourcePanel";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { UploadPanel } from "@/components/content/UploadPanel";
import { foodLibrary, mealPlanTemplates, nutritionBlocks, nutritionGoals, nutritionSystemCards } from "@/lib/platform-data";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata = buildRouteMetadata({
  title: "Nutrition Education",
  description: "E.R. Fitness nutrition education covers calories, macros, hydration, meal planning, grocery lists, recovery nutrition, and source-linked nutrition resources.",
  path: "/nutrition",
  keywords: ["nutrition education", "fitness education", "meal planning", "hydration", "exercise science"]
});

export default function NutritionPage() {
  return (
    <>
      <PageHero
        eyebrow="Nutrition Center"
        title="Goal-based calories, macros, hydration, grocery lists, meal plans, and nutrition creator posts."
        description="Nutrition supports bulk, lean bulk, cut, recomp, powerlifting, tactical, and endurance planning with food search, galleries, and journals."
        primaryCta={{ label: "Food Library", href: "#food-library" }}
        secondaryCta={{ label: "Create Nutrition Tip", href: "#nutrition-post" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader title="Nutrition Goals" description="Goal templates can sync with saved nutrition plans, profile history, and community posts later." />
          <div className="mt-5"><TagGrid items={nutritionGoals} /></div>
          <div className="mt-8">
            <CardGrid items={nutritionSystemCards} columns="three" />
          </div>
          <div className="mt-8">
            <CardGrid items={nutritionBlocks} columns="three" />
          </div>
          <div className="mt-8">
            <CardGrid
              items={[
                {
                  title: "Training & Nutrition Principles",
                  description: "Carb backloading, carb cycling, meal timing, calories, protein, carbohydrates, fats, hydration, recovery nutrition, and the training principles behind app routines.",
                  href: "/training-nutrition-principles",
                  meta: "Educational only"
                }
              ]}
              columns="three"
            />
          </div>
        </div>
      </section>

      <section id="food-library" className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <ShoppingBasket size={24} className="text-volt-400" aria-hidden />
              <SectionHeader title="Searchable Food Database" description="Macro rows for food logging, grocery lists, and meal-plan syncing." />
            </div>
            <SearchFilters label="Search food database" />
          </div>
          <div className="overflow-hidden rounded-md border border-white/10">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-white/8 text-xs uppercase text-zinc-400">
                <tr>
                  <th className="p-3">Food</th>
                  <th className="p-3">Protein</th>
                  <th className="p-3">Carbs</th>
                  <th className="p-3">Fats</th>
                  <th className="p-3">Category</th>
                </tr>
              </thead>
              <tbody>
                {foodLibrary.map((food) => (
                  <tr key={food.food} className="border-t border-white/10 bg-black/20 text-zinc-300">
                    <td className="p-3 font-bold text-white">{food.food}</td>
                    <td className="p-3">{food.protein}g</td>
                    <td className="p-3">{food.carbs}g</td>
                    <td className="p-3">{food.fats}g</td>
                    <td className="p-3">{food.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <ContentPackPanel
            areas={["Nutrition"]}
            title="Nutrition Lessons and Training-Day Food Education"
            description="Original nutrition education for plate structure, macro context, hydration, training-day fueling, and safe boundaries for educational planning."
            includeMedia={false}
          />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <PublicMaterialsPanel
            areas={["Nutrition"]}
            title="Free Nutrition Guidelines and Meal-Planning References"
            description="Public USDA, HHS, and MyPlate resources that support food group education, dietary guidance, and balanced meal planning."
          />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Meal Templates"
            title="Nutrition plans for common training goals."
            description="Templates pair with food search, grocery lists, hydration prompts, profile history, and nutrition journal posts."
          />
          <div className="mt-6">
            <CardGrid items={mealPlanTemplates} columns="three" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <KnowledgeResourcePanel
            title="Nutrition Visuals, Videos, and Reference Links"
            description="Use the nutrition map, meal-planning references, public activity videos, and training-day resources to connect food choices with routine goals."
            visualLimit={3}
            videoLimit={3}
            referenceLimit={4}
          />
        </div>
      </section>

      <section id="nutrition-post" className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <UploadPanel title="Create Nutrition Journal or Tip" />
          <div className="space-y-5">
            <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
              <div className="flex items-center gap-3">
                <Utensils size={22} className="text-ember-400" aria-hidden />
                <h2 className="text-lg font-black text-white">Nutrition Content Supports</h2>
              </div>
              <div className="mt-4">
                <TagGrid items={["Meal plans", "Grocery lists", "Nutrition journals", "Macro notes", "Hydration", "Photos", "Videos", "Comments"]} />
              </div>
            </div>
            <DisclaimerNotice />
          </div>
        </div>
      </section>
    </>
  );
}
