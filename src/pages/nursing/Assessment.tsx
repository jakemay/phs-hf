import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import AlertBox from "@/components/ui/AlertBox";
import { nursingNavItems } from "@/data/navigation";

const NursingAssessment = () => {
  return (
    <Layout>
      <PageHeader
        title="Daily Heart Failure Nursing Assessment and Red Flags"
        subtitle="Vigilant assessment for detecting early signs of clinical change."
        discipline="nursing"
        breadcrumbs={[
          { label: "Nursing", href: "/nursing/assessment" },
          { label: "Daily Assessment" },
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          <aside className="hidden lg:block">
            <SideNav items={nursingNavItems} discipline="nursing" />
          </aside>

          <article className="max-w-4xl">
            <ContentSection>
              <p className="text-lg mb-4">
                The nurse is central to the successful management of the hospitalized HF patient. Vigilant daily assessment is paramount for detecting early signs of clinical deterioration or response to therapy, enabling the care team to intervene proactively.
              </p>

              <AlertBox type="info" title="PHG Resource">
                The <strong>CDS PHG Heart Failure Transition of Care Managers</strong> Epic chat group is staffed by skilled HF RNs who can answer non-urgent questions about effective nursing care for patients with heart failure.
              </AlertBox>
            </ContentSection>

            <ContentSection title="3.1.1 Core Components of the Daily Nursing Assessment">
              <ul className="space-y-4">
                <li>
                  <strong>Symptom Evaluation:</strong> Assess for any change in dyspnea (at rest and with exertion), orthopnea (number of pillows needed), fatigue, and weakness.
                </li>
                <li>
                  <strong>Fluid Status Assessment:</strong> Meticulously assess for peripheral edema, jugular venous distention (JVD), and auscultate for pulmonary crackles.
                </li>
                <li>
                  <strong>Vital Signs:</strong> Monitor blood pressure, heart rate, and oxygen saturation, noting trends and any values outside expected parameters.
                </li>
                <li>
                  <strong>Intake, Output, and Daily Weight:</strong> Emphasize the crucial nature of these objective measurements as the most sensitive indicators of fluid shifts.
                </li>
              </ul>
            </ContentSection>

            <ContentSection title="3.1.2 Key Decompensation Alerts (Yellow & Red Zone Indicators)">
              <p className="mb-6">
                These signs, adapted from patient-facing tools, signal clinical worsening and require a structured response.
              </p>

              <div className="space-y-6">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <h4 className="font-semibold text-amber-900 text-lg mb-3">Yellow Zone (Requires Provider Notification)</h4>
                  <ul className="list-disc pl-6 text-amber-800 space-y-2">
                    <li>Weight gain of 3 or more pounds in 2 days</li>
                    <li>Increased swelling in the feet, ankles, legs, or abdomen</li>
                    <li>Increased shortness of breath with activity or increased number of pillows needed to sleep</li>
                    <li>Increased, persistent cough</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h4 className="font-semibold text-red-900 text-lg mb-3">Red Zone (Requires Immediate Escalation)</h4>
                  <ul className="list-disc pl-6 text-red-800 space-y-2">
                    <li>Unrelieved shortness of breath while at rest</li>
                    <li>Wheezing or chest tightness at rest</li>
                    <li>Weight gain of more than 5 pounds in 2 days</li>
                    <li>New confusion or inability to think clearly</li>
                  </ul>
                </div>
              </div>

              <p className="mt-6 text-muted-foreground italic">
                The objective assessment of fluid balance hinges on the practical and consistent execution of obtaining accurate measurements.
              </p>
            </ContentSection>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default NursingAssessment;