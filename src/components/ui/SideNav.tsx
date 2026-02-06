import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  section: string;
}

interface SideNavProps {
  items: NavItem[];
  discipline: "provider" | "nursing" | "pharmacy" | "therapy";
}

const disciplineStyles = {
  provider: "border-provider bg-provider",
  nursing: "border-nursing bg-nursing",
  pharmacy: "border-pharmacy bg-pharmacy",
  therapy: "border-therapy bg-therapy",
};

const SideNav = ({ items, discipline }: SideNavProps) => {
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
    <nav className="sticky top-20 space-y-6">
      {Object.entries(groupedItems).map(([section, sectionItems]) => (
        <div key={section}>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2 px-3">
            {section}
          </h3>
          <div className="space-y-1">
            {sectionItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-lg text-sm transition-colors",
                    isActive
                      ? cn("font-medium text-white", styles)
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default SideNav;