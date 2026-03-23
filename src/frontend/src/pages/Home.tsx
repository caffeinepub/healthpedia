import { DiseaseCard } from "@/components/DiseaseCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { diseases } from "@/data/diseases";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Bug,
  Clock,
  Droplets,
  Flower2,
  Heart,
  Search,
  Shield,
  Thermometer,
  Wind,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const commonDiseaseLinks = [
  { name: "Cold & Cough", id: "common-cold", Icon: Wind },
  { name: "Influenza", id: "influenza", Icon: Thermometer },
  { name: "Viral Infection", id: "viral-infection", Icon: Activity },
  { name: "Allergies", id: "allergies", Icon: Flower2 },
];

const seriousDiseaseLinks = [
  { name: "Cancer", id: "cancer", Icon: Shield },
  { name: "Heart Disease", id: "heart-disease", Icon: Heart },
  { name: "Diabetes", id: "diabetes-type2", Icon: Droplets },
  { name: "COVID-19", id: "covid-19", Icon: Bug },
];

const featuredDiseases = diseases.filter((d) =>
  ["influenza", "hypertension", "diabetes-type2", "covid-19"].includes(d.id),
);

const healthWellnessArticles = [
  {
    title: "Managing Stress for Better Health",
    excerpt:
      "Chronic stress affects your immune system, heart, and mental health. Learn evidence-based strategies to manage stress effectively.",
    category: "Mental Health",
    readTime: "5 min read",
  },
  {
    title: "Nutrition Guide: Building a Balanced Diet",
    excerpt:
      "A well-balanced diet provides the nutrients your body needs. Discover the fundamentals of healthy eating and easy meal planning tips.",
    category: "Nutrition",
    readTime: "7 min read",
  },
];

const latestNews = [
  {
    title: "New Study Links Mediterranean Diet to Reduced Heart Disease Risk",
    date: "March 20, 2026",
    category: "Cardiology",
  },
  {
    title: "WHO Updates Global Vaccination Guidelines for 2026",
    date: "March 18, 2026",
    category: "Vaccines",
  },
  {
    title: "Breakthrough in Diabetes Treatment Shows Promising Results",
    date: "March 15, 2026",
    category: "Endocrinology",
  },
  {
    title: "Mental Health Awareness: New Resources Available Worldwide",
    date: "March 12, 2026",
    category: "Mental Health",
  },
];

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate({ to: "/search", search: { q: searchQuery.trim() } });
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-secondary py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest px-3">
              Trusted Health Information
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy uppercase tracking-tight leading-tight mb-4">
              Your Complete Health
              <br />
              Knowledge Resource
            </h1>
            <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
              Search thousands of diseases, conditions, and treatments.
              Evidence-based information written by medical professionals.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSearch}
            className="flex items-center bg-card rounded-full shadow-nav border border-border overflow-hidden pr-2 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Search className="w-5 h-5 text-muted-foreground ml-5 shrink-0" />
            <input
              type="search"
              placeholder="Search any disease, condition, or symptom..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3.5 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              data-ocid="hero.search_input"
            />
            <Button
              type="submit"
              className="rounded-full bg-primary hover:bg-primary/90 px-6 font-bold text-sm tracking-wide shrink-0"
              data-ocid="hero.primary_button"
            >
              GO
            </Button>
          </motion.form>
        </div>

        {/* Category strip */}
        <motion.div
          className="max-w-3xl mx-auto mt-10 bg-card rounded-2xl shadow-card border border-border overflow-hidden"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {/* Common diseases */}
            <div className="p-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                Common Diseases
              </h2>
              <ul className="space-y-2 mb-5">
                {commonDiseaseLinks.map(({ name, id, Icon }) => (
                  <li key={id}>
                    <Link
                      to="/disease/$id"
                      params={{ id }}
                      className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors group"
                    >
                      <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-4 h-4 text-primary" />
                      </span>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/category/$type" params={{ type: "common" }}>
                <Button
                  variant="outline"
                  className="w-full text-xs font-bold uppercase tracking-wide border-border"
                  data-ocid="common.primary_button"
                >
                  View All
                </Button>
              </Link>
            </div>

            {/* Serious diseases */}
            <div className="p-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-destructive mb-4">
                Serious &amp; Rare Diseases
              </h2>
              <ul className="space-y-2 mb-5">
                {seriousDiseaseLinks.map(({ name, id, Icon }) => (
                  <li key={id}>
                    <Link
                      to="/disease/$id"
                      params={{ id }}
                      className="flex items-center gap-3 text-sm text-foreground hover:text-destructive transition-colors group"
                    >
                      <span className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                        <Icon className="w-4 h-4 text-destructive" />
                      </span>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/category/$type" params={{ type: "serious" }}>
                <Button
                  variant="outline"
                  className="w-full text-xs font-bold uppercase tracking-wide border-destructive/30 text-destructive hover:bg-destructive/5"
                  data-ocid="serious.primary_button"
                >
                  Explore
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
              Spotlight
            </p>
            <h2 className="text-2xl font-extrabold text-navy">
              Featured Conditions
            </h2>
          </div>
          <Link
            to="/diseases"
            className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
            data-ocid="featured.link"
          >
            View All <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredDiseases.map((disease, i) => (
            <motion.div
              key={disease.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <DiseaseCard disease={disease} index={i + 1} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Disease info preview */}
      <section className="bg-secondary py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
              In-depth Knowledge
            </p>
            <h2 className="text-2xl font-extrabold text-navy">
              Disease Information Pages
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
              Every disease on HealthPedia includes a comprehensive information
              page covering symptoms, causes, treatment, and prevention.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
            <div className="grid lg:grid-cols-[200px_1fr_220px]">
              {/* Sidebar */}
              <div className="border-b lg:border-b-0 lg:border-r border-border p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  Contents
                </p>
                <nav className="space-y-1">
                  {[
                    "Overview",
                    "Symptoms",
                    "Causes",
                    "Treatment",
                    "Prevention",
                    "FAQs",
                  ].map((section) => (
                    <div
                      key={section}
                      className={`px-3 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                        section === "Symptoms"
                          ? "bg-accent text-primary font-bold"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                    >
                      {section}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Main content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <Badge className="bg-accent text-accent-foreground text-xs uppercase tracking-wide">
                    Common
                  </Badge>
                  <h3 className="text-2xl font-extrabold text-navy">Asthma</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Asthma is a chronic respiratory condition in which the airways
                  become inflamed, narrow, and swell, producing extra mucus.
                  This makes breathing difficult and triggers coughing, a
                  whistling sound (wheezing) when breathing out, and shortness
                  of breath.
                </p>
                <div className="space-y-3">
                  {[
                    "Shortness of breath during physical activity",
                    "Chest tightness or pain",
                    "Wheezing when exhaling",
                    "Coughing, especially at night or early morning",
                  ].map((symptom) => (
                    <div key={symptom} className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </span>
                      <p className="text-sm text-foreground">{symptom}</p>
                    </div>
                  ))}
                </div>
                <Link to="/disease/$id" params={{ id: "asthma" }}>
                  <Button
                    className="mt-6 bg-primary hover:bg-primary/90 text-xs font-bold uppercase tracking-wide"
                    data-ocid="preview.primary_button"
                  >
                    View Full Article <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </Link>
              </div>

              {/* Illustration */}
              <div className="hidden lg:flex bg-accent items-center justify-center p-6">
                <img
                  src="/assets/generated/lungs-illustration-transparent.dim_300x280.png"
                  alt="Lungs illustration"
                  className="max-w-full max-h-48 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Wellness + Latest News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Health & Wellness */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
              Lifestyle
            </p>
            <h2 className="text-2xl font-extrabold text-navy mb-6">
              Health &amp; Wellness
            </h2>
            <div className="space-y-4">
              {healthWellnessArticles.map((article, i) => (
                <motion.div
                  key={article.title}
                  className="bg-card rounded-xl p-5 shadow-card border border-border hover:shadow-nav transition-shadow"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Badge className="bg-accent text-accent-foreground text-xs mb-2">
                    {article.category}
                  </Badge>
                  <h3 className="font-bold text-sm text-foreground mb-1">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <BookOpen className="w-3 h-3" /> {article.readTime}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Latest News */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
              Updates
            </p>
            <h2 className="text-2xl font-extrabold text-navy mb-6">
              Latest Health News
            </h2>
            <div className="space-y-3">
              {latestNews.map((news, i) => (
                <motion.div
                  key={news.title}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-card transition-shadow cursor-pointer"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <span className="text-lg">📰</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground leading-snug mb-1 line-clamp-2">
                      {news.title}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{news.date}</span>
                      <span>·</span>
                      <Badge className="bg-accent text-accent-foreground text-xs py-0">
                        {news.category}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
