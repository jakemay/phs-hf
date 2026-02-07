import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  section: string;
}

interface MobileBottomNavProps {
  items: NavItem[];
  discipline: "provider" | "nursing" | "pharmacy" | "therapy";
}

const disciplineStyles = {
  provider: "bg-provider text-white",
  nursing: "bg-nursing text-white",
  pharmacy: "bg-pharmacy text-white",
  therapy: "bg-therapy text-white",
};

const MobileBottomNav = ({ items, discipline }: MobileBottomNavProps) => {
  const location = useLocation();
  const styles = disciplineStyles[discipline];

  // Group items by section
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.section]) {
      acc[item.section] = [];
    }
    acc[item.section].push(item);
    return acc;
  }, {} as Record<string, NavItem[]>);

  return (
    <nav className="lg:hidden mt-12 border-t border-border pt-8">
      <h3 className="text-lg font-semibold mb-4">
        More {discipline === "provider" ? "Provider" : "Nursing"} Pages
      </h3>
      <div className="space-y-6">
        {Object.entries(groupedItems).map(([section, sectionItems]) => (
          <div key={section}>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
              {section}
            </h4>
            <div className="flex flex-wrap gap-2">
              {sectionItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? styles
                        : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
