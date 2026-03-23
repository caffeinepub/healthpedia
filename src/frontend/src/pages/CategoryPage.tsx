import { DiseaseCard } from "@/components/DiseaseCard";
import { getDiseasesByCategory } from "@/data/diseases";
import type { DiseaseCategory } from "@/data/diseases";
import { useParams } from "@tanstack/react-router";
import { Heart, Shield } from "lucide-react";
import { motion } from "motion/react";

export function CategoryPage() {
  const { type } = useParams({ from: "/category/$type" });
  const category = (
    type === "serious" ? "serious" : "common"
  ) as DiseaseCategory;
  const diseaseList = getDiseasesByCategory(category);

  const isSerious = category === "serious";

  return (
    <main>
      {/* Category hero */}
      <section
        className={`py-14 px-4 sm:px-6 ${
          isSerious
            ? "bg-gradient-to-b from-destructive/5 to-background"
            : "bg-gradient-to-b from-background to-secondary"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                isSerious ? "bg-destructive/10" : "bg-accent"
              }`}
            >
              {isSerious ? (
                <Heart className="w-7 h-7 text-destructive" />
              ) : (
                <Shield className="w-7 h-7 text-primary" />
              )}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {isSerious ? "Serious & Rare" : "Everyday Conditions"}
              </p>
              <h1 className="text-3xl font-extrabold text-navy">
                {isSerious ? "Serious & Rare Diseases" : "Common Diseases"}
              </h1>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
            {isSerious
              ? "Comprehensive information about serious, chronic, and rare conditions that require specialist care and long-term management."
              : "Learn about common everyday illnesses that most people experience at some point in their lives, including symptoms, treatments, and prevention."}
          </p>
        </div>
      </section>

      {/* Disease grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-sm text-muted-foreground mb-6">
          Showing {diseaseList.length} conditions
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diseaseList.map((disease, i) => (
            <motion.div
              key={disease.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              data-ocid={`category.item.${i + 1}`}
            >
              <DiseaseCard disease={disease} index={i + 1} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
