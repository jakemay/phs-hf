import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import ClinicalTable from "@/components/ui/ClinicalTable";
import AlertBox from "@/components/ui/AlertBox";

const diureticData = [
  { drug: "Furosemide", initial: "20–40 mg once or twice", max: "600 mg" },
  { drug: "Bumetanide", initial: "0.5–1.0 mg once or twice", max: "10 mg" },
  { drug: "Torsemide", initial: "10–20 mg once", max: "200 mg" },
];

const Pharmacy = () => {
  return (
    <Layout>
      <PageHeader
        title="Guidance for Pharmacists"
        subtitle="Comprehensive pharmaceutical management for hospitalized heart failure patients."
        discipline="pharmacy"
        breadcrumbs={[{ label: "Pharmacy" }]}
      />

      <div className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <ContentSection title="Medication Reconciliation on Admission and Discharge">
            <p className="mb-4">
              Medication reconciliation is a <strong>critical safety process</strong> and a core pharmacist
              responsibility. It serves a strategic role in preventing adverse drug events, identifying medications that
              exacerbate heart failure, and ensuring a seamless transition of care.
            </p>
            <p className="mb-4">
              <strong>On admission:</strong> Create the best possible medication history, with special attention to
              identifying and flagging drugs known to worsen HF (e.g., NSAIDs, non-dihydropyridine CCBs).
            </p>
            <p>
              <strong>On discharge:</strong> Meticulously compare the pre-admission medication list with the final
              inpatient regimen, clearly document all changes, and communicate the rationale for these changes.
            </p>
          </ContentSection>

          <ContentSection title="Optimization of GDMT Dosing and Drug Interactions">
            <p className="mb-4">
              The clinical pharmacist plays a central role in translating guideline recommendations into safe and
              effective patient-specific regimens.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Titration Strategies:</strong> Assist the team in titrating medications toward target doses
                proven effective in clinical trials.
              </li>
              <li>
                <strong>Sequencing:</strong> When switching from ACEi to ARNi, a 36-hour washout period is mandatory.
              </li>
              <li>
                <strong>Drug Interactions:</strong> Monitor for additive hyperkalemia risk with MRAs and cumulative
                hypotensive effects.
              </li>
            </ul>
          </ContentSection>

          <ContentSection title="Diuretic Equivalence, Resistance, and Adjunctive Therapies">
            <ClinicalTable
              caption="Oral Loop Diuretic Dosing Guide"
              columns={[
                { key: "drug", header: "Drug" },
                { key: "initial", header: "Initial Daily Dose" },
                { key: "max", header: "Maximum Daily Dose without PHG or Nephrology Consultation" },
              ]}
              data={diureticData}
            />
            <p>
              <strong>Diuretic resistance:</strong> The primary strategy is adding a thiazide diuretic (e.g.,
              metolazone) for sequential nephron blockade.
            </p>
          </ContentSection>

          <ContentSection title="Renal Function and Electrolyte Management">
            <p className="mb-4">Key monitoring requirements:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Potassium:</strong> MRA therapy only if baseline K+ &lt;5.0 mEq/L
              </li>
              <li>
                <strong>Renal Function:</strong> Monitor creatinine and eGFR carefully during GDMT titration
              </li>
            </ul>
          </ContentSection>

          <ContentSection title="Anticoagulation and Antiplatelet Considerations">
            <p className="mb-4">
              <strong>VTE Prophylaxis:</strong> Prophylactic anticoagulation with enoxaparin or unfractionated heparin
              is recommended.
            </p>
            <p>
              <strong>Anticoagulation in AF:</strong> Based on CHA₂DS₂-VASc score. DOACs are generally preferred over
              warfarin.
            </p>
          </ContentSection>

          <ContentSection title="Patient Counseling and Adherence Support">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Medication Purpose:</strong> Explain why each medication is important
              </li>
              <li>
                <strong>Dosing and Administration:</strong> Review specific instructions
              </li>
              <li>
                <strong>Adherence Strategies:</strong> Suggest pill boxes, medication lists, reminders
              </li>
              <li>
                <strong>Side Effects:</strong> Advise to call their doctor—not stop the medicine
              </li>
            </ul>
          </ContentSection>

          <ContentSection title="Prior Authorization and Access to HF Medications">
            <AlertBox type="info" title="PHG Resource">
              The Epic chat group <strong>CDS PHG Heart Failure Transition of Care Managers</strong> can help facilitate
              outpatient PA and copay assistance.
            </AlertBox>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proactively manage prior authorizations for ARNIs and SGLT2 inhibitors</li>
              <li>Connect patients with manufacturer copay programs and patient assistance programs</li>
              <li>Recommend therapeutically equivalent alternatives when appropriate</li>
            </ul>
          </ContentSection>
        </article>
      </div>
    </Layout>
  );
};

export default Pharmacy;
