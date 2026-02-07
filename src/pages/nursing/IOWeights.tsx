import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import MobileBottomNav from "@/components/ui/MobileBottomNav";
import AlertBox from "@/components/ui/AlertBox";
import { nursingNavItems } from "@/data/navigation";

const IOWeights = () => {
  return (
    <Layout>
      <PageHeader
        title="Intake/Output Accuracy and Daily Weights"
        subtitle="Critical diagnostic tools for heart failure management."
        discipline="nursing"
        breadcrumbs={[{ label: "Nursing", href: "/nursing/assessment" }, { label: "I/O & Daily Weights" }]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          <aside className="hidden lg:block">
            <SideNav items={nursingNavItems} discipline="nursing" />
          </aside>

          <article className="max-w-4xl">
            <ContentSection>
              <AlertBox type="warning" title="Critical Importance">
                Daily weights and meticulous intake/output (I/O) records are not routine tasks but{" "}
                <strong>critical diagnostic tools</strong> in heart failure management.
              </AlertBox>

              <p className="mb-6">
                They serve as the most sensitive indicators of daily fluid shifts, providing essential data to guide the
                dosing and titration of diuretic therapy.
              </p>
            </ContentSection>

            <ContentSection title="Instructions for Accurate Daily Weights">
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Weigh the patient at the same time each morning</strong>, after voiding and before breakfast.
                </li>
                <li>
                  <strong>Use the same calibrated scale</strong> for every measurement.
                </li>
                <li>
                  <strong>Ensure the patient is wearing a similar amount of clothing</strong> (e.g., hospital gown) for
                  each weigh-in.
                </li>
                <li>
                  <strong>Document the weight immediately</strong> and compare it to the previous day's reading,
                  alerting the provider to significant changes.
                </li>
              </ol>
            </ContentSection>

            <ContentSection title="I/O Accuracy">
              <AlertBox type="info" title="Key Principle">
                The importance of I/O accuracy cannot be overstated.
              </AlertBox>

              <p className="mb-4">
                All intake (oral fluids, IV fluids) and all output (urine, drains) must be recorded precisely to
                calculate an accurate net fluid balance and guide effective therapy.
              </p>

              <p>This data directly informs the administration and monitoring of diuretic medications.</p>
            </ContentSection>

            <MobileBottomNav items={nursingNavItems} discipline="nursing" />
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default IOWeights;
