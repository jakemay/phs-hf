import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import AlertBox from "@/components/ui/AlertBox";
import { nursingNavItems } from "@/data/navigation";

const Vitals = () => {
  return (
    <Layout>
      <PageHeader
        title="Vital Sign and Telemetry Considerations"
        subtitle="Continuous monitoring for hemodynamic stability and therapy response."
        discipline="nursing"
        breadcrumbs={[
          { label: "Nursing", href: "/nursing/assessment" },
          { label: "Vital Signs & Telemetry" },
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
                Continuous monitoring of vital signs and cardiac rhythm provides a real-time window into the patient's hemodynamic stability and response to therapy. It allows for the early detection of adverse effects from medications and signs of clinical decompensation.
              </p>
            </ContentSection>

            <ContentSection title="3.5.1 Specific Vital Sign Parameters to Monitor">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Hypotension</h4>
                  <p className="mb-2">
                    Be particularly alert for low blood pressure in patients receiving vasodilators or during the uptitration of GDMT.
                  </p>
                  <AlertBox type="info">
                    Blood pressures in the 90s/50s mmHg can be normal in patients with heart failure, but it is always reasonable to reach out to PHG with questions or concerns regarding BP.
                  </AlertBox>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Tachycardia</h4>
                  <p>
                    An elevated heart rate may indicate worsening HF, arrhythmia, or be a side effect of inotropic medications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Bradycardia</h4>
                  <p>
                    A slow heart rate is an expected effect of beta-blocker therapy but should be monitored to ensure it does not become symptomatic or excessive.
                  </p>
                </div>
              </div>
            </ContentSection>

            <ContentSection title="Telemetry Monitoring">
              <p className="mb-4">
                Telemetry monitoring is crucial for detecting arrhythmias, such as atrial fibrillation, which are common in patients with HF.
              </p>

              <AlertBox type="warning" title="Inotropic Infusions">
                Telemetry is of particular importance for patients receiving continuous infusions of inotropic medications like dobutamine and milrinone, which carry a risk of ventricular arrhythmias.
              </AlertBox>

              <p className="mt-4 text-muted-foreground italic">
                The nurse's role in clinical monitoring is complemented by the equally important function of patient education.
              </p>
            </ContentSection>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Vitals;