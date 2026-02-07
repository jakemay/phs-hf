import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import MobileBottomNav from "@/components/ui/MobileBottomNav";
import AlertBox from "@/components/ui/AlertBox";
import { providerNavItems } from "@/data/navigation";

const AdvancedHF = () => {
  return (
    <Layout>
      <PageHeader
        title="Valvular Disease, Cardiomyopathy, and Advanced HF"
        subtitle="Specialized evaluation and intervention for complex HF presentations."
        discipline="provider"
        breadcrumbs={[
          { label: "Providers", href: "/providers/ordersets" },
          { label: "Advanced HF" },
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
                While GDMT is central to HF care, a subset of patients have underlying structural issues or advanced disease that require specialized evaluation and intervention. This section outlines the approach to these complex scenarios.
              </p>
            </ContentSection>

            <ContentSection title="Valvular Heart Disease (VHD)">
              <p className="mb-4">
                The management of significant VHD in HF patients must be conducted by a <strong>multidisciplinary heart team</strong>.
              </p>
              <AlertBox type="info" title="Key Principle">
                For patients with HFrEF and chronic severe secondary mitral regurgitation (MR), it is imperative that GDMT be fully optimized before any transcatheter or surgical intervention is considered.
              </AlertBox>
            </ContentSection>

            <ContentSection title="Cardiomyopathy">
              <p className="mb-4">
                Clinicians must always seek the underlying cause of a patient's HF, as treatment may be determined by the specific etiology. This includes conditions that require disease-specific therapies, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Amyloidosis</li>
                <li>Myocarditis</li>
                <li>Peripartum Cardiomyopathy</li>
                <li>Sarcoidosis</li>
              </ul>
            </ContentSection>

            <ContentSection title="Advanced (Stage D) Heart Failure">
              <p className="mb-4">
                The presence of advanced HF should be recognized when patients exhibit certain clinical indicators, even with optimal medical therapy. These include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Repeated hospitalizations for HF</li>
                <li>Need for inotropic support</li>
                <li>Severe limitation in functional capacity</li>
                <li>Intolerance to GDMT due to hypotension or renal dysfunction</li>
              </ul>

              <AlertBox type="warning" title="PHG Referral">
                Patients with advanced HF should be referred to the PHG Heart Failure service for evaluation of advanced therapies including mechanical circulatory support and heart transplantation.
              </AlertBox>
            </ContentSection>

            <MobileBottomNav items={providerNavItems} discipline="provider" />
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default AdvancedHF;