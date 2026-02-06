import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import { providerNavItems } from "@/data/navigation";

const Evaluation = () => {
  return (
    <Layout>
      <PageHeader
        title="Initial Evaluation and Risk Stratification"
        subtitle="A systematic approach to quantify risk and guide intensity of care."
        discipline="provider"
        breadcrumbs={[
          { label: "Providers", href: "/providers/ordersets" },
          { label: "Initial Evaluation" },
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
                A systematic initial evaluation is strategically paramount, as it extends beyond diagnosis to quantify the patient's risk. This risk assessment directly informs the necessary intensity of monitoring and therapy throughout the hospitalization and helps set realistic expectations for the clinical course.
              </p>
            </ContentSection>

            <ContentSection title="Key Components of Initial Assessment">
              <h3 className="text-lg font-semibold mb-3">History</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Obtain a <strong>3-generation family history</strong> to screen for inherited cardiomyopathy.</li>
                <li>Assess for <strong>clinical indicators of advanced HF</strong>, such as repeated hospitalizations or intolerance to GDMT.</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3">Physical Examination</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Congestion:</strong> Actively seek key signs, including jugular venous distention (JVD), orthopnea, bendopnea, and peripheral leg edema.
                </li>
                <li>
                  <strong>Perfusion:</strong> A narrow pulse pressure and cool extremities are critical indicators of hypoperfusion.
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3">Laboratory and Biomarker Assessment</h3>
              <p className="mb-4">
                Measurement of <strong>B-type natriuretic peptide (BNP)</strong> or <strong>N-terminal pro-B type natriuretic peptide (NT-proBNP)</strong> is crucial. These biomarkers are essential for confirming the diagnosis of HF and establishing prognosis.
              </p>
              <p className="mb-6">
                <strong>Serum lactic acid</strong> is useful to screen for hypoperfusion.
              </p>

              <p className="text-muted-foreground italic">
                With the patient's phenotype and risk established, therapeutic efforts must immediately pivot to resolving the primary driver of symptoms and hospitalization: systemic congestion.
              </p>
            </ContentSection>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Evaluation;