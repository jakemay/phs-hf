import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DisciplineCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  discipline: "provider" | "nursing" | "pharmacy" | "therapy";
  subLinks?: Array<{ title: string; href: string }>;
}

const disciplineStyles = {
  provider: {
    border: "border-l-provider",
    bg: "bg-provider-light",
    iconBg: "bg-provider",
    badge: "bg-provider text-white",
  },
  nursing: {
    border: "border-l-nursing",
    bg: "bg-nursing-light",
    iconBg: "bg-nursing",
    badge: "bg-nursing text-white",
  },
  pharmacy: {
    border: "border-l-pharmacy",
    bg: "bg-pharmacy-light",
    iconBg: "bg-pharmacy",
    badge: "bg-pharmacy text-white",
  },
  therapy: {
    border: "border-l-therapy",
    bg: "bg-therapy-light",
    iconBg: "bg-therapy",
    badge: "bg-therapy text-white",
  },
};

const DisciplineCard = ({ title, description, icon: Icon, href, discipline, subLinks }: DisciplineCardProps) => {
  const styles = disciplineStyles[discipline];

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border-l-4 bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        styles.border
      )}
    >
      <div className="flex items-start gap-4">
        <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-lg", styles.iconBg)}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>

      {subLinks && subLinks.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="grid gap-2">
            {subLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-foreground hover:bg-muted transition-colors group/link"
              >
                <span>{link.title}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover/link:text-foreground group-hover/link:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      )}

      <Link
        to={href}
        className={cn(
          "mt-4 inline-flex items-center gap-2 text-sm font-medium transition-colors",
          discipline === "provider" && "text-provider hover:text-provider/80",
          discipline === "nursing" && "text-nursing hover:text-nursing/80",
          discipline === "pharmacy" && "text-pharmacy hover:text-pharmacy/80",
          discipline === "therapy" && "text-therapy hover:text-therapy/80"
        )}
      >
        View all guidance
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default DisciplineCard;