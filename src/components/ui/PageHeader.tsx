import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  discipline?: "provider" | "nursing" | "pharmacy" | "therapy";
  children?: ReactNode;
}

const disciplineBadges = {
  provider: "bg-provider text-white",
  nursing: "bg-nursing text-white",
  pharmacy: "bg-pharmacy text-white",
  therapy: "bg-therapy text-white",
};

const disciplineLabels = {
  provider: "Provider Guidance",
  nursing: "Nursing Guidance",
  pharmacy: "Pharmacy Guidance",
  therapy: "PT/OT Guidance",
};

const PageHeader = ({ title, subtitle, breadcrumbs, discipline, children }: PageHeaderProps) => {
  return (
    <div className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4 flex items-center gap-2 text-sm text-primary-foreground/70">
            <Link to="/" className="hover:text-primary-foreground transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-primary-foreground transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-primary-foreground">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Badge */}
        {discipline && (
          <span className={cn("discipline-badge mb-4", disciplineBadges[discipline])}>
            {disciplineLabels[discipline]}
          </span>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-3">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg text-primary-foreground/80 max-w-3xl">
            {subtitle}
          </p>
        )}

        {/* Additional content */}
        {children}
      </div>
    </div>
  );
};

export default PageHeader;