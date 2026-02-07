import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import MobileBottomNav from "@/components/ui/MobileBottomNav";
import ClinicalTable from "@/components/ui/ClinicalTable";
import AlertBox from "@/components/ui/AlertBox";
import { providerNavItems } from "@/data/navigation";
import forresterImage from "@/assets/forrester-classification.png";

const profileData = [
  {
    profile: <strong>Profile I: Warm and Dry (Normal)</strong>,
    characteristics: "Normal perfusion and volume status. This is the goal of therapy.",
    treatment: "Optimize oral GDMT.",
  },
  {
    profile: <strong>Profile II: Warm and Wet</strong>,
    characteristics: "Hypervolemic (congested) but well-perfused. This is the most common presentation.",
    treatment: "Primary goal is decongestion through intravenous diuresis.",
  },
  {
    profile: <strong>Profile III: Cold and Dry</strong>,
    characteristics: "Hypoperfused but euvolemic or even hypovolemic.",
    treatment:
      "Requires inotropes, vasopressors, and/or vasodilators to improve perfusion, and/or temporary mechanical circulatory support (MCS).",
  },
  {
    profile: <strong>Profile IV: Cold and Wet</strong>,
    characteristics:
      "Hypervolemic (congested) and hypoperfused (cardiogenic shock). This profile carries the highest mortality risk.",
    treatment:
      "Requires a combination of diuretics for congestion and inotropes/vasopressors to support perfusion, and/or temporary mechanical circulatory support (MCS).",
  },
];

const Phenotyping = () => {
  return (
    <Layout>
      <PageHeader
        title="Admission Phenotyping"
        subtitle="De Novo vs. Acute-on-Chronic and Hemodynamic Profiles"
        discipline="provider"
        breadcrumbs={[{ label: "Providers", href: "/providers/phenotyping" }, { label: "Admission Phenotyping" }]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          <aside className="hidden lg:block">
            <SideNav items={providerNavItems} discipline="provider" />
          </aside>

          <article className="max-w-4xl">
            <ContentSection>
              <AlertBox type="warning" title="PHG Consultation">
                Consultation with the PHG Heart Failure service is appropriate for all decompensated patients,
                particularly those presenting as "Cold and Dry" (Profile III) and "Cold and Wet" (Profile IV).
              </AlertBox>

              <br></br>

              <p className="text-lg mb-6">
                Accurately classifying a patient's heart failure presentation upon admission is the foundational step
                for tailoring initial therapy and predicting the clinical course. This requires distinguishing between
                new-onset disease and an acute exacerbation of a chronic condition, as well as rapidly assessing the
                patient's hemodynamic status to guide immediate interventions.
              </p>

              <p className="mb-6">
                Per the 2022 AHA/ACC/HFSA guidelines, it is crucial to differentiate between{" "}
                <strong>de novo (new-onset) HF</strong>, representing a new diagnosis, and{" "}
                <strong>acute-on-chronic decompensated HF</strong>, a deterioration of pre-existing disease. The
                Forrester classification system further refines this assessment by categorizing patients into one of
                four hemodynamic profiles based on perfusion (Warm vs. Cold) and congestion (Wet vs. Dry).
              </p>
            </ContentSection>

            <ContentSection title="Forrester Hemodynamic Profiles">
              <figure className="my-6">
                <img
                  src={forresterImage}
                  alt="Forrester Classification of Acute Heart Failure"
                  className="w-full rounded-lg shadow-md"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center">
                  The Forrester classification uses cardiac index (CI) and pulmonary capillary wedge pressure (PCWP) to
                  define hemodynamic profiles.
                </figcaption>
              </figure>

              <ClinicalTable
                columns={[
                  { key: "profile", header: "Profile" },
                  { key: "characteristics", header: "Characteristics" },
                  { key: "treatment", header: "Treatment Focus" },
                ]}
                data={profileData}
              />

              <p>
                With the patient's phenotype established, the next step is a comprehensive evaluation to quantify risk
                and further guide the intensity of care.
              </p>
            </ContentSection>

            <MobileBottomNav items={providerNavItems} discipline="provider" />
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Phenotyping;
