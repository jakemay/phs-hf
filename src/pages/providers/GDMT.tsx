import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import AlertBox from "@/components/ui/AlertBox";
import { providerNavItems } from "@/data/navigation";

const GDMT = () => {
  return (
    <Layout>
      <PageHeader
        title="GDMT Initiation, Continuation, and Sequencing"
        subtitle="Optimizing guideline-directed medical therapy during hospitalization."
        discipline="provider"
        breadcrumbs={[
          { label: "Providers", href: "/providers/ordersets" },
          { label: "GDMT Management" },
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          <aside className="hidden lg:block">
            <SideNav items={providerNavItems} discipline="provider" />
          </aside>

          <article className="max-w-4xl">
            <ContentSection>
              <p className="text-lg mb-4">
                Hospitalization for acute decompensated heart failure represents a <strong>critical opportunity</strong> to establish and optimize Guideline-Directed Medical Therapy (GDMT). This intervention is not merely acute but a crucial step for improving long-term morbidity and mortality.
              </p>

              <p className="mb-6">
                Per the 2022 guidelines, patients on GDMT prior to admission should have these therapies <strong>continued</strong> unless they are hemodynamically unstable or have other clear contraindications. Hospitalization is also the ideal time to <strong>initiate GDMT</strong> in eligible, previously untreated patients.
              </p>
            </ContentSection>

            <ContentSection title="2.5.1 The Four Foundational Medication Classes for HFrEF">
              <p className="mb-4">
                Guideline-Directed Medical Therapy for Heart Failure with reduced Ejection Fraction (HFrEF, LVEF ≤40%) is built upon four pillars:
              </p>

              <ol className="list-decimal pl-6 mb-6 space-y-3">
                <li>
                  <strong>ARNi</strong> (angiotensin receptor-neprilysin inhibitors), <strong>ACEi</strong> (angiotensin-converting enzyme inhibitors), or <strong>ARB</strong> (angiotensin receptor blockers)
                </li>
                <li>
                  <strong>Beta-Blockers</strong> (evidence-based: carvedilol, metoprolol succinate [not tartrate], bisoprolol)
                </li>
                <li>
                  <strong>MRAs</strong> (mineralocorticoid receptor antagonists, e.g., spironolactone, eplerenone)
                </li>
                <li>
                  <strong>SGLT2i</strong> (sodium-glucose cotransporter-2 inhibitors, e.g., dapagliflozin, empagliflozin)
                </li>
              </ol>

              <AlertBox type="info" title="Initiation Strategy">
                Medications may be started simultaneously at low doses or sequentially, depending on the clinical scenario. In general, beta blockade is not initiated until the patient is approaching euvolemia and afterload reduction has been accomplished with ARNi/ACEi/ARB or hydralazine.
              </AlertBox>

              <p className="mb-4">
                Initiating these medications in eligible hospitalized patients prior to discharge is beneficial for improving post-discharge outcomes.
              </p>

              <AlertBox type="warning" title="Important Note">
                These medications are not strictly for blood pressure control and should be initiated even if the patient is normotensive.
              </AlertBox>

              <p className="mt-4 text-muted-foreground italic">
                Successfully optimizing GDMT requires anticipating and managing common clinical challenges such as hypotension and renal dysfunction.
              </p>
            </ContentSection>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default GDMT;