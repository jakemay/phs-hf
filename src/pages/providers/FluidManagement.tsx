import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import AlertBox from "@/components/ui/AlertBox";
import { providerNavItems } from "@/data/navigation";

const FluidManagement = () => {
  return (
    <Layout>
      <PageHeader
        title="Sodium and Fluid Restriction"
        subtitle="Evidence-based approach to dietary and fluid management."
        discipline="provider"
        breadcrumbs={[
          { label: "Providers", href: "/providers/ordersets" },
          { label: "Fluid Management" },
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          <aside className="hidden lg:block">
            <SideNav items={providerNavItems} discipline="provider" />
          </aside>

          <article className="max-w-4xl">
            <ContentSection title="Sodium Restriction">
              <AlertBox type="info" title="Current Evidence">
                Modern evidence does not support very strict sodium restriction. A target of approximately <strong>2,000–3,000 mg sodium per day</strong> is recommended.
              </AlertBox>

              <p className="mb-4">
                The focus should be on avoiding very high-salt foods, not eliminating salt entirely. Patients should be counseled on reading food labels and identifying common high-sodium foods.
              </p>
            </ContentSection>

            <ContentSection title="Fluid Restriction">
              <h3 className="text-lg font-semibold mb-3">When to Consider Restriction</h3>
              <p className="mb-4">
                Consider 1.5–2 L/day <strong>only in patients</strong> with persistent hyponatremia (Na &lt;130 mmol/L) or refractory congestion despite optimal therapy.
              </p>

              <h3 className="text-lg font-semibold mb-3">Monitor for Harm</h3>
              <p className="mb-4">
                Watch for thirst, dehydration, and renal dysfunction when restricting fluids.
              </p>

              <AlertBox type="warning" title="Important">
                Fluid restriction used in the hospital is usually temporary. Most patients go home on liberalized fluids unless a restriction is clearly prescribed.
              </AlertBox>
            </ContentSection>

            <ContentSection>
              <p className="text-muted-foreground italic">
                While providers direct this comprehensive plan, its day-to-day implementation relies heavily on the essential contributions of the nursing team.
              </p>
            </ContentSection>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default FluidManagement;