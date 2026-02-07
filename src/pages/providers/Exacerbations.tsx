import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import MobileBottomNav from "@/components/ui/MobileBottomNav";
import ClinicalTable from "@/components/ui/ClinicalTable";
import AlertBox from "@/components/ui/AlertBox";
import { providerNavItems } from "@/data/navigation";
import hfStabilityImage from "@/assets/hf-stability-vs-crisis.png";

const exacerbationCategories = [
  {
    category: <strong>Too Much Volume</strong>,
    causes: "Dietary indiscretion, medication non-adherence, renal dysfunction/AKI, IV fluids/volume overload, NSAIDs, corticosteroids, rapid transfusions",
  },
  {
    category: <strong>Too Much Afterload</strong>,
    causes: "Uncontrolled hypertension, medications (vasoconstrictors), aortic stenosis, thyroid storm/hyperthyroidism, pulmonary causes (PE, pulmonary hypertension)",
  },
  {
    category: <strong>Too Much Demand</strong>,
    causes: "Infection (pneumonia, UTI, wounds), ischemia/ACS, thyroid disorders, acute anemia, surgical/stress events, toxins (meth, cocaine, alcohol)",
  },
  {
    category: <strong>Rate/Rhythm Disturbance</strong>,
    causes: "Atrial fibrillation/flutter, ventricular tachycardia, malignant bradycardia, medication non-adherence, electrolyte derangements",
  },
  {
    category: <strong>Direct Cardiac Injury</strong>,
    causes: "Ischemia/ACS/MI, cardiotoxic medications/chemotherapy, myocarditis, endocarditis",
  },
];

const mostCommonCauses = [
  { rank: "1", cause: "Dietary Indiscretion", notes: "Excessive sodium or fluid intake" },
  { rank: "2", cause: "Medication Noncompliance", notes: "Missing diuretics, GDMT, or antihypertensives" },
  { rank: "3", cause: "Infections", notes: "Pneumonia, influenza, UTI, wounds" },
  { rank: "4", cause: "Arrhythmias", notes: "New or uncontrolled atrial fibrillation/flutter" },
  { rank: "5", cause: "Ischemia / ACS", notes: "Acute coronary syndrome or silent ischemia" },
  { rank: "6", cause: "Hypertensive Crisis", notes: "Severe uncontrolled hypertension" },
];

const Exacerbations = () => {
  return (
    <Layout>
      <PageHeader
        title="Causes of Heart Failure Exacerbation"
        subtitle="Identifying and addressing triggers for acute decompensation"
        discipline="provider"
        breadcrumbs={[
          { label: "Providers", href: "/providers/ordersets" },
          { label: "HF Exacerbations" },
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
                Heart failure exacerbation occurs when a patient with previously stable heart failure (known or unknown) experiences acute clinical deterioration. Understanding the underlying triggers is essential for effective treatment and prevention of future episodes.
              </p>

              <figure className="my-8">
                <img 
                  src={hfStabilityImage} 
                  alt="Heart Failure: The Spectrum of Stability vs. Crisis" 
                  className="w-full rounded-lg shadow-md"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center">
                  Heart failure oscillates between compensated stability and decompensated crisis requiring urgent intervention.
                </figcaption>
              </figure>
            </ContentSection>

            <ContentSection title="Categories of Exacerbation Triggers">
              <p className="mb-4">
                Any state that causes too much volume, too much afterload, too much demand, a rate/rhythm disturbance, or direct cardiac injury can potentially lead to heart failure exacerbation.
              </p>

              <ClinicalTable
                columns={[
                  { key: "category", header: "Category" },
                  { key: "causes", header: "Common Causes" },
                ]}
                data={exacerbationCategories}
              />
            </ContentSection>

            <ContentSection title="Most Common Causes">
              <AlertBox type="info" title="Clinical Pearl">
                The most common causes of heart failure exacerbation are often modifiable and should be systematically evaluated in every patient presenting with acute decompensation.
              </AlertBox>

              <ClinicalTable
                columns={[
                  { key: "rank", header: "#" },
                  { key: "cause", header: "Cause" },
                  { key: "notes", header: "Clinical Notes" },
                ]}
                data={mostCommonCauses}
              />
            </ContentSection>

            <ContentSection title="Approach to Evaluation">
              <p className="mb-4">
                When evaluating a patient with acute decompensated heart failure, systematically consider each category of potential triggers:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>History:</strong> Dietary and medication adherence, recent infections, chest pain, palpitations</li>
                <li><strong>Vital signs:</strong> Hypertension, tachycardia, fever, hypoxia</li>
                <li><strong>Labs:</strong> BMP (renal function, electrolytes), CBC (anemia, infection), troponin, BNP/NT-proBNP, TSH</li>
                <li><strong>ECG:</strong> Arrhythmias, ischemic changes, conduction abnormalities</li>
                <li><strong>Imaging:</strong> Chest X-ray (pulmonary edema, infiltrates), echocardiogram (new wall motion abnormalities, valvular disease)</li>
              </ul>

              <AlertBox type="warning" title="Key Point">
                Always assess for ischemia in patients presenting with acute decompensation—ACS may present atypically or without typical chest pain in heart failure patients.
              </AlertBox>
            </ContentSection>

            <MobileBottomNav items={providerNavItems} discipline="provider" />
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Exacerbations;
