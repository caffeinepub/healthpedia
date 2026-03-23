import { Badge } from "@/components/ui/badge";
import { diseases } from "@/data/diseases";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function AZListing() {
  const grouped: Record<string, typeof diseases> = {};
  for (const disease of diseases) {
    const letter = disease.name[0].toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(disease);
  }
  const usedLetters = Object.keys(grouped).sort();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
          Complete Listing
        </p>
        <h1 className="text-3xl font-extrabold text-navy">Diseases A–Z</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Browse our complete library of {diseases.length} diseases and
          conditions.
        </p>
      </div>

      {/* Letter jump nav */}
      <div
        className="flex flex-wrap gap-1.5 mb-10 p-4 bg-card rounded-xl border border-border shadow-card"
        data-ocid="az.panel"
      >
        {alphabet.map((letter) => (
          <a
            key={letter}
            href={
              usedLetters.includes(letter) ? `#letter-${letter}` : undefined
            }
            className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-colors ${
              usedLetters.includes(letter)
                ? "bg-accent text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
                : "bg-secondary text-border cursor-default"
            }`}
            data-ocid="az.link"
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Diseases by letter */}
      <div className="space-y-10">
        {usedLetters.map((letter, gi) => (
          <motion.div
            key={letter}
            id={`letter-${letter}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: gi * 0.04 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-extrabold text-lg">
                {letter}
              </div>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {grouped[letter].map((disease, di) => (
                <Link
                  key={disease.id}
                  to="/disease/$id"
                  params={{ id: disease.id }}
                  className="flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:shadow-card hover:border-primary/30 transition-all group"
                  data-ocid={`az.item.${di + 1}`}
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">
                      {disease.name}
                    </p>
                    <Badge
                      className={`mt-1 text-xs ${
                        disease.category === "common"
                          ? "bg-accent text-accent-foreground"
                          : "bg-destructive/10 text-destructive"
                      }`}
                    >
                      {disease.category === "common"
                        ? "Common"
                        : "Serious / Rare"}
                    </Badge>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
