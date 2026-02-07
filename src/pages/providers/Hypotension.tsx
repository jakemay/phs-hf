import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import MobileBottomNav from "@/components/ui/MobileBottomNav";
import { providerNavItems } from "@/data/navigation";

const Hypotension = () => {
  return (
    <Layout>
      <PageHeader
        title="Management of Hypotension, AKI, and Electrolyte Abnormalities"
        subtitle="Navigating common challenges during GDMT optimization."
        discipline="provider"
        breadcrumbs={[
          { label: "Providers", href: "/providers/ordersets" },
          { label: "Hypotension & AKI" },
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          <aside className="hidden lg:block">
            <SideNav items={providerNavItems} discipline="provider" />
          </aside>

          <article className="max-w-4xl">
            <ContentSection>
              <p className="text-lg mb-6">
                Hypotension, AKI, and electrolyte disturbances should be viewed not as failures of therapy, but as <strong>common, manageable challenges</strong> that arise during the optimization of life-saving GDMT. Proactive monitoring and a systematic management approach are key to successfully titrating these essential medications.
              </p>
            </ContentSection>

            <ContentSection title="Hypotension">
              <p className="mb-4">
                Symptomatic hypotension is a known side effect of RAAS inhibitors (ARNi/ACEi/ARB) and beta-blockers. Dose adjustments or staggering administration times may be required to improve tolerance.
              </p>
              <p className="font-semibold text-accent">
                It is critical to not overreact to isolated hypotension.
              </p>
            </ContentSection>

            <ContentSection title="Acute Kidney Injury (AKI)">
              <p className="mb-4">
                Intolerance to RAAS inhibitors due to worsening renal function is an indicator of <strong>advanced HF</strong> and requires careful management.
              </p>
              <p>
                A modest, stable rise in creatinine after initiation is often an <strong>expected hemodynamic effect</strong>, whereas significant worsening requires reassessment.
              </p>
            </ContentSection>

            <ContentSection title="Hyperkalemia">
              <p className="mb-4">
                MRA therapy is a cornerstone of GDMT but carries a significant risk of hyperkalemia. It should only be initiated if:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Baseline serum potassium is <strong>&lt;5.0 mEq/L</strong></li>
                <li>eGFR is <strong>&gt;30 mL/min/1.73 m²</strong></li>
              </ul>
              <p className="font-semibold">
                Close monitoring of potassium and renal function is mandatory after initiation and with any dose titration.
              </p>
            </ContentSection>

            <ContentSection>
              <p className="text-muted-foreground italic">
                While managing the side effects of indicated medications is crucial, it is equally vital to identify and discontinue medications that can cause harm. See: Medications to Avoid in Heart Failure
              </p>
            </ContentSection>

            <MobileBottomNav items={providerNavItems} discipline="provider" />
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Hypotension;