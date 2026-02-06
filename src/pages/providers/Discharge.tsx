import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import AlertBox from "@/components/ui/AlertBox";
import { providerNavItems } from "@/data/navigation";

const Discharge = () => {
  return (
    <Layout>
      <PageHeader
        title="Discharge Planning and Transitions of Care"
        subtitle="Ensuring safe transitions and reducing readmissions."
        discipline="provider"
        breadcrumbs={[
          { label: "Providers", href: "/providers/ordersets" },
          { label: "Discharge Planning" },
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
                A carefully planned discharge is essential to prevent early readmission and ensure continuity of care. The transition from hospital to home is a vulnerable period for patients with heart failure.
              </p>
            </ContentSection>

            <ContentSection title="Key Discharge Criteria">
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Patient is <strong>euvolemic</strong> or near euvolemic on a stable oral diuretic regimen</li>
                <li>GDMT has been optimized or clear plan for outpatient optimization exists</li>
                <li>Patient and/or caregiver has received comprehensive education</li>
                <li>Follow-up appointment scheduled within 7 days</li>
                <li>Medication reconciliation completed</li>
              </ul>
            </ContentSection>

            <ContentSection title="Provider Discharge Checklist">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span><strong>Medications:</strong> Review and optimize GDMT; provide clear, written medication list</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span><strong>Follow-up:</strong> Schedule appointment within 7 days; consider earlier if high-risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span><strong>Education:</strong> Ensure patient understands symptoms, diet, weight monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span><strong>Labs:</strong> Check electrolytes and renal function before discharge</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" disabled />
                  <span><strong>Activity:</strong> Discuss activity recommendations and cardiac rehabilitation referral</span>
                </li>
              </ul>
            </ContentSection>

            <ContentSection title="PHG Heart Failure Transition of Care Managers">
              <AlertBox type="info">
                The Epic chat group <strong>CDS PHG Heart Failure Transition of Care Managers</strong> is staffed by skilled HF Registered Nurses (RNs). They assist providers, nurses, and PT/OT with patient education and discharge planning.
              </AlertBox>
            </ContentSection>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Discharge;