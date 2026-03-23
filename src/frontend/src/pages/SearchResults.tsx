import { DiseaseCard } from "@/components/DiseaseCard";
import { searchDiseases } from "@/data/diseases";
import { useSearch } from "@tanstack/react-router";
import { AlertCircle, Search } from "lucide-react";
import { motion } from "motion/react";

export function SearchResults() {
  const { q } = useSearch({ from: "/search" });
  const results = searchDiseases(q || "");

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
          Search Results
        </p>
        <h1 className="text-2xl font-extrabold text-navy">
          {q ? (
            <>
              Results for &ldquo;<span className="text-primary">{q}</span>
              &rdquo;
            </>
          ) : (
            "All Diseases"
          )}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {results.length} {results.length === 1 ? "result" : "results"} found
        </p>
      </div>

      {results.length === 0 ? (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          data-ocid="search.empty_state"
        >
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">
            No results found
          </h2>
          <p className="text-sm text-muted-foreground">
            Try searching for different keywords, or{" "}
            <a
              href="/diseases"
              className="text-primary font-semibold hover:underline"
            >
              browse all diseases
            </a>
            .
          </p>
        </motion.div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {results.map((disease, i) => (
            <motion.div
              key={disease.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <DiseaseCard disease={disease} index={i + 1} />
            </motion.div>
          ))}
        </div>
      )}
    </main>
  );
}
