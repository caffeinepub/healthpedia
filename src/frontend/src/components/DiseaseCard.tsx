import { Badge } from "@/components/ui/badge";
import type { Disease } from "@/data/diseases";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface DiseaseCardProps {
  disease: Disease;
  index?: number;
}

export function DiseaseCard({ disease, index = 1 }: DiseaseCardProps) {
  return (
    <div
      className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-nav transition-shadow group"
      data-ocid={`disease.item.${index}`}
    >
      {disease.cardImage ? (
        <img
          src={disease.cardImage}
          alt={disease.name}
          className="w-full h-40 object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-40 bg-accent flex items-center justify-center">
          <span className="text-5xl">🏥</span>
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <Badge
            variant={
              disease.category === "common" ? "secondary" : "destructive"
            }
            className={`text-xs font-bold uppercase tracking-wide ${
              disease.category === "common"
                ? "bg-accent text-accent-foreground"
                : "bg-destructive/10 text-destructive"
            }`}
          >
            {disease.category === "common" ? "Common" : "Serious / Rare"}
          </Badge>
        </div>
        <h3 className="font-bold text-base text-foreground mb-1 leading-snug">
          {disease.name}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {disease.tagline}
        </p>
        <Link
          to="/disease/$id"
          params={{ id: disease.id }}
          className="flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all"
          data-ocid={`disease.link.${index}`}
        >
          Learn More <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
