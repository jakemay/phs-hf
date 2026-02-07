import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import MobileBottomNav from "@/components/ui/MobileBottomNav";
import ClinicalTable from "@/components/ui/ClinicalTable";
import AlertBox from "@/components/ui/AlertBox";
import { nursingNavItems } from "@/data/navigation";
import hfStabilityImage from "@/assets/hf-stability-vs-crisis.png";

const nursingAssessmentFindings = [
  {
    trigger: <strong>Volume Overload</strong>,
    signs: "Weight gain, edema, JVD, crackles, orthopnea",
    questions: "Diet changes? Salt intake? Missed diuretics? New medications (NSAIDs, steroids)?",
  },
  {
    trigger: <strong>Afterload Increase</strong>,
    signs: "Elevated BP, new or worsening murmur, signs of hyperthyroidism",
    questions: "BP medication compliance? Chest pain? Thyroid symptoms?",
  },
  {
    trigger: <strong>Increased Demand</strong>,
    signs: "Fever, tachycardia, signs of infection, pallor (anemia)",
    questions: "Fever/chills? Cough? Dysuria? Recent surgery/stress? Substance use?",
  },
  {
    trigger: <strong>Arrhythmia</strong>,
    signs: "Irregular pulse, tachycardia/bradycardia, palpitations",
    questions: "Palpitations? Dizziness? Syncope? Medication compliance?",
  },
  {
    trigger: <strong>Cardiac Injury</strong>,
    signs: "Chest pain, new ECG changes, elevated troponin",
    questions: "Chest pain/pressure? Shortness of breath? Known CAD?",
  },
];

const commonCauses = [
  { cause: "Dietary Indiscretion", nursingAction: "Reinforce low-sodium diet education; assess for knowledge gaps" },
  { cause: "Medication Non-Compliance", nursingAction: "Medication reconciliation; identify barriers (cost, access, understanding)" },
  { cause: "Infections", nursingAction: "Monitor for signs of infection; report fever promptly" },
  { cause: "Arrhythmias", nursingAction: "Telemetry monitoring; report irregular rhythms immediately" },
  { cause: "Ischemia/ACS", nursingAction: "Monitor for chest pain; obtain ECG if symptoms present" },
  { cause: "Hypertensive Crisis", nursingAction: "Frequent BP monitoring; ensure antihypertensive administration" },
];

const NursingExacerbations = () => {
  return (
    <Layout>
      <PageHeader
        title="Recognizing HF Exacerbation Triggers"
        subtitle="Nursing assessment and early identification of decompensation causes"
        discipline="nursing"
        breadcrumbs={[
          { label: "Nursing", href: "/nursing/assessment" },
          { label: "HF Exacerbations" },
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          <aside className="hidden lg:block">
            <SideNav items={nursingNavItems} discipline="nursing" />
          </aside>

          <article className="max-w-4xl">
            <ContentSection>
              <p className="text-lg mb-6">
                Nurses play a critical role in identifying the triggers that lead to heart failure exacerbation. Early recognition of these factors enables prompt intervention and helps prevent further deterioration.
              </p>

              <figure className="my-8">
                <img 
                  src={hfStabilityImage} 
                  alt="Heart Failure: The Spectrum of Stability vs. Crisis" 
                  className="w-full rounded-lg shadow-md"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center">
                  Understanding the transition from compensated to decompensated heart failure guides nursing assessment priorities.
                </figcaption>
              </figure>
            </ContentSection>

            <ContentSection title="Key Assessment Questions by Trigger Category">
              <ClinicalTable
                columns={[
                  { key: "trigger", header: "Trigger Category" },
                  { key: "signs", header: "Clinical Signs" },
                  { key: "questions", header: "Assessment Questions" },
                ]}
                data={nursingAssessmentFindings}
              />
            </ContentSection>

            <ContentSection title="Most Common Causes & Nursing Actions">
              <AlertBox type="info" title="Nursing Focus">
                The most common causes of HF exacerbation are often modifiable through patient education and close monitoring. Identifying these early can prevent hospitalization.
              </AlertBox>

              <ClinicalTable
                columns={[
                  { key: "cause", header: "Common Cause" },
                  { key: "nursingAction", header: "Nursing Action" },
                ]}
                data={commonCauses}
              />
            </ContentSection>

            <ContentSection title="Nursing Assessment Priorities">
              <h3 className="text-lg font-semibold mb-3">Admission Assessment</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Obtain accurate daily weight and compare to "dry weight"</li>
                <li>Assess volume status: JVD, peripheral edema, lung sounds</li>
                <li>Review medication list and identify recent changes</li>
                <li>Ask about dietary sodium and fluid intake</li>
                <li>Screen for recent illness, fever, or infection symptoms</li>
                <li>Document baseline mental status and functional capacity</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3">Ongoing Monitoring</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Daily weights at same time, same scale, same clothing</li>
                <li>Strict intake and output documentation</li>
                <li>Continuous telemetry monitoring for arrhythmias</li>
                <li>Vital signs per unit protocol (minimum q4h)</li>
                <li>Reassess volume status with each shift</li>
              </ul>

              <AlertBox type="warning" title="Red Flags to Report">
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Weight gain &gt;2 lbs in 24 hours or &gt;5 lbs in 1 week</li>
                  <li>New or worsening shortness of breath at rest</li>
                  <li>New chest pain or changes in chest pain pattern</li>
                  <li>New arrhythmias or significant rate changes</li>
                  <li>Declining urine output (&lt;0.5 mL/kg/hr)</li>
                  <li>Worsening mental status or confusion</li>
                </ul>
              </AlertBox>
            </ContentSection>

            <MobileBottomNav items={nursingNavItems} discipline="nursing" />
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default NursingExacerbations;
