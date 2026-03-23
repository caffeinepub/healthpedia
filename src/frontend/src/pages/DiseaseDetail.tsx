import { DiseaseCard } from "@/components/DiseaseCard";
import { Badge } from "@/components/ui/badge";
import { diseases, getDiseaseById } from "@/data/diseases";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type Section =
  | "overview"
  | "symptoms"
  | "causes"
  | "treatment"
  | "prevention"
  | "faqs";

const sections: { id: Section; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "symptoms", label: "Symptoms" },
  { id: "causes", label: "Causes" },
  { id: "treatment", label: "Treatment" },
  { id: "prevention", label: "Prevention" },
  { id: "faqs", label: "FAQs" },
];

export function DiseaseDetail() {
  const { id } = useParams({ from: "/disease/$id" });
  const disease = getDiseaseById(id);
  const [activeSection, setActiveSection] = useState<Section>("overview");

  if (!disease) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Disease not found
        </h1>
        <Link
          to="/diseases"
          className="text-primary font-semibold hover:underline"
        >
          Browse all diseases
        </Link>
      </main>
    );
  }

  const related = diseases
    .filter((d) => d.id !== id && d.category === disease.category)
    .slice(0, 3);

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/diseases" className="hover:text-primary transition-colors">
            Diseases
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">{disease.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Back link */}
        <Link
          to="/diseases"
          className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline mb-6"
          data-ocid="disease.link"
        >
          <ArrowLeft className="w-3 h-3" /> Back to Diseases
        </Link>

        {/* Hero */}
        <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden mb-8">
          {disease.cardImage && (
            <img
              src={disease.cardImage}
              alt={disease.name}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <Badge
                className={`text-xs font-bold uppercase tracking-wide ${
                  disease.category === "common"
                    ? "bg-accent text-accent-foreground"
                    : "bg-destructive/10 text-destructive"
                }`}
              >
                {disease.category === "common"
                  ? "Common Disease"
                  : "Serious / Rare Disease"}
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy mb-3">
              {disease.name}
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              {disease.tagline}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[220px_1fr] gap-6">
          {/* Sidebar */}
          <aside>
            <nav className="bg-card rounded-xl border border-border shadow-card overflow-hidden sticky top-24">
              <div className="px-4 py-3 border-b border-border">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Contents
                </p>
              </div>
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? "bg-accent text-primary font-bold border-l-2 border-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                  data-ocid="disease.tab"
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <motion.div
            key={activeSection}
            className="bg-card rounded-xl border border-border shadow-card p-6 sm:p-8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {activeSection === "overview" && (
              <div>
                <h2 className="text-xl font-extrabold text-navy mb-4">
                  Overview
                </h2>
                <p className="text-sm text-foreground leading-relaxed">
                  {disease.overview}
                </p>
              </div>
            )}

            {activeSection === "symptoms" && (
              <div>
                <h2 className="text-xl font-extrabold text-navy mb-4">
                  Symptoms
                </h2>
                <ul className="space-y-3">
                  {disease.symptoms.map((symptom) => (
                    <li key={symptom} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeSection === "causes" && (
              <div>
                <h2 className="text-xl font-extrabold text-navy mb-4">
                  Causes
                </h2>
                <ul className="space-y-3">
                  {disease.causes.map((cause) => (
                    <li key={cause} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </span>
                      <span className="text-sm text-foreground">{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeSection === "treatment" && (
              <div>
                <h2 className="text-xl font-extrabold text-navy mb-4">
                  Treatment
                </h2>
                <p className="text-xs text-muted-foreground bg-accent rounded-lg px-4 py-3 mb-5 border border-border">
                  ⚠️ This information is for educational purposes only. Always
                  consult a qualified healthcare professional for medical
                  advice.
                </p>
                <ul className="space-y-3">
                  {disease.treatment.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeSection === "prevention" && (
              <div>
                <h2 className="text-xl font-extrabold text-navy mb-4">
                  Prevention
                </h2>
                <ul className="space-y-3">
                  {disease.prevention.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeSection === "faqs" && (
              <div>
                <h2 className="text-xl font-extrabold text-navy mb-5">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-5">
                  {disease.faqs.map((faq) => (
                    <div
                      key={faq.question}
                      className="border border-border rounded-xl p-5"
                    >
                      <h3 className="font-bold text-sm text-foreground mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Related diseases */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-extrabold text-navy mb-5">
              Related Conditions
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((d, i) => (
                <DiseaseCard key={d.id} disease={d} index={i + 1} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
