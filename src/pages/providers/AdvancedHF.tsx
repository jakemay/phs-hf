import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import MobileBottomNav from "@/components/ui/MobileBottomNav";
import AlertBox from "@/components/ui/AlertBox";
import { providerNavItems } from "@/data/navigation";
import advancedTherapiesImage from "@/assets/advanced-therapies-stage-d.png";
import palliativeCareImage from "@/assets/palliative-care-inotropes.png";

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

              <figure className="my-8">
                <img 
                  src={advancedTherapiesImage} 
                  alt="Navigating Advanced Therapies for Stage D Heart Failure" 
                  className="w-full rounded-lg shadow-md"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center">
                  Overview of durable mechanical support (LVAD, TAH) and heart transplantation for Stage D heart failure.
                </figcaption>
              </figure>

              <AlertBox type="warning" title="PHG Referral">
                Patients with advanced HF should be referred to the PHG Heart Failure service for evaluation of advanced therapies including mechanical circulatory support and heart transplantation.
              </AlertBox>
            </ContentSection>

            <ContentSection title="Palliative Care & Inotropic Support">
              <p className="mb-4">
                Advanced heart failure (Stage D) often necessitates a holistic approach, integrating interdisciplinary palliative care and, in specific cases, continuous inotropic support to maintain quality of life and manage symptoms.
              </p>

              <figure className="my-8">
                <img 
                  src={palliativeCareImage} 
                  alt="Managing Stage D Heart Failure: Palliative Care & Inotropic Support" 
                  className="w-full rounded-lg shadow-md"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center">
                  Integration of palliative care and home inotrope therapy in advanced heart failure management.
                </figcaption>
              </figure>

              <AlertBox type="info" title="Palliative Care Consultation">
                Palliative care consultation is recommended for LVAD evaluation, initiation of palliative inotropes, or consideration for heart transplantation. Early integration improves quality of life and supports shared decision-making.
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