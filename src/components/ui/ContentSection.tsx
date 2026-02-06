import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const ContentSection = ({ title, children, className }: ContentSectionProps) => {
  return (
    <section className={cn("mb-8", className)}>
      {title && (
        <h2 className="text-2xl font-serif font-semibold text-foreground mb-4 pb-2 border-b border-border">
          {title}
        </h2>
      )}
      <div className="prose prose-slate max-w-none">
        {children}
      </div>
    </section>
  );
};

export default ContentSection;