import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import { providerNavItems } from "@/data/navigation";

const Ordersets = () => {
  return (
    <Layout>
      <PageHeader
        title="Presbyterian Epic Ordersets for Heart Failure"
        subtitle="Systematic approaches for diagnostic workup and inpatient management of heart failure."
        discipline="provider"
        breadcrumbs={[
          { label: "Providers", href: "/providers/ordersets" },
          { label: "Epic Ordersets" },
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          <aside className="hidden lg:block">
            <SideNav items={providerNavItems} discipline="provider" />
          </aside>

          <article className="max-w-4xl">
            <ContentSection title="2.1.1 Adult Cardiomyopathy Diagnostic Orders">
              <h3 className="text-lg font-semibold mb-3">Purpose and Scope</h3>
              <p className="mb-4">
                This order set is designed for systematic etiologic evaluation of suspected or established cardiomyopathy, independent of heart failure acuity. It operationalizes a phenotype-driven, multiparametric diagnostic approach, consistent with contemporary guideline recommendations for cardiomyopathy evaluation.
              </p>

              <h3 className="text-lg font-semibold mb-3">Core Design Principles</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Universal first-line evaluation:</strong> Broad laboratory screening (iron studies, TSH, ANA, HIV, toxicology) supports identification of reversible, systemic, metabolic, infectious, and autoimmune causes.
                </li>
                <li>
                  <strong>Phenotype-specific branching logic:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Unexplained symmetric hypertrophy or apical sparing → suspect amyloidosis; monoclonal protein studies, free light chains, amyloid imaging (only after AL amyloid excluded), strain echocardiography.</li>
                    <li>Marked asymmetric hypertrophy → suspect HCM; cardiac MRI and extended Holter monitoring for fibrosis and arrhythmic risk.</li>
                    <li>Dilated cardiomyopathy → toxicology, iron studies, thyroid testing, autoimmune and infectious screening, and cardiac MRI.</li>
                  </ul>
                </li>
                <li>
                  <strong>Multimodality imaging and rhythm assessment:</strong> Routine access to CMR, strain echocardiography, and extended ambulatory monitoring reflects guideline-endorsed comprehensive phenotyping.
                </li>
                <li>
                  <strong>PHG Cardiogenetics Clinic referral</strong> for patients with suspected heritable cardiomyopathies.
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3">Clinical Role</h3>
              <p className="mb-6">
                This order set is best used early in the diagnostic journey to reduce diagnostic uncertainty, avoid fragmented testing, and guide targeted management. Its design aligns with modern recognition of heterogeneous cardiomyopathy subtypes, including genetic and inflammatory etiologies.
              </p>
            </ContentSection>

            <ContentSection title="2.1.2 Adult Congestive Heart Failure Orders">
              <h3 className="text-lg font-semibold mb-3">Purpose and Scope</h3>
              <p className="mb-4">
                This order set is intended for inpatient management of acute or chronic heart failure, focusing on stabilization, congestion management, initiation or optimization of guideline-directed medical therapy (GDMT), and safe transition of care.
              </p>

              <h3 className="text-lg font-semibold mb-3">Core Design Principles</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Standardized clinical monitoring:</strong> Nursing orders for daily weights, strict intake/output, orthostatic vitals, and electrolyte surveillance support safe volume management during hospitalization.
                </li>
                <li>
                  <strong>HF severity assessment and prognostication:</strong> Routine inclusion of natriuretic peptides and metabolic panels aligns with established HF diagnostic and prognostic frameworks.
                </li>
                <li>
                  <strong>Early GDMT implementation:</strong> Structured medication sections facilitate initiation or continuation of ACEi/ARB/ARNI, beta-blockers, MRAs, and diuretics during hospitalization, a key determinant of post-discharge outcomes.
                </li>
                <li>
                  <strong>Comorbidity and risk factor management:</strong> Embedded screening for sleep-disordered breathing, diabetes, and dyslipidemia reflects holistic HF care principles.
                </li>
                <li>
                  <strong>Care transitions and education:</strong> Discharge planning, patient education, and referral workflows are integrated to reduce readmissions and improve continuity of care.
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-3">Clinical Role</h3>
              <p className="mb-6">
                This order set should be used whenever heart failure is the primary reason for admission, regardless of underlying cardiomyopathy subtype. It complements—but does not replace—the cardiomyopathy diagnostic pathway. Family history assessment remains important when HF is due to cardiomyopathy, particularly to identify inherited disease.
              </p>
            </ContentSection>

            <ContentSection title="2.1.3 Bottom Line">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Adult Cardiomyopathy Diagnostic Orders:</strong> etiologic, phenotype-driven investigation of myocardial disease.
                </li>
                <li>
                  <strong>Adult Congestive Heart Failure Orders:</strong> acuity-focused, guideline-aligned inpatient management of HF.
                </li>
              </ul>
              <p className="mt-4">
                Used together, these order sets allow clinicians to separate diagnosis from decompensation, improving diagnostic precision while maintaining high-quality, standardized HF care.
              </p>
            </ContentSection>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Ordersets;