import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import MobileBottomNav from "@/components/ui/MobileBottomNav";
import AlertBox from "@/components/ui/AlertBox";
import { nursingNavItems } from "@/data/navigation";

const Escalation = () => {
  return (
    <Layout>
      <PageHeader
        title="Escalation Pathways for Decompensation"
        subtitle="Standardized process for reporting clinical changes."
        discipline="nursing"
        breadcrumbs={[
          { label: "Nursing", href: "/nursing/assessment" },
          { label: "Escalation Pathways" },
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
                A clear escalation pathway is a <strong>critical safety net</strong> that provides a standardized process for nurses to report concerning changes in a patient's condition to the medical team, ensuring timely intervention.
              </p>

              <p className="mb-6">
                This pathway uses the same "Yellow Zone/Red Zone" framework taught to patients.
              </p>
            </ContentSection>

            <ContentSection title='"Yellow Zone" Triggers (Prompt Notification)'>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-amber-900 mb-3">Signs</h4>
                <p className="text-amber-800 mb-4">
                  Early signs of decompensation, such as a 3lb weight gain in 2 days, increased peripheral edema, or increased cough.
                </p>

                <h4 className="font-semibold text-amber-900 mb-3">Nursing Action</h4>
                <p className="text-amber-800">
                  A prompt, non-emergent notification to the primary provider (MD/DO/APC) to report the change and request guidance.
                </p>
              </div>
            </ContentSection>

            <ContentSection title='"Red Zone" Triggers (Immediate Escalation)'>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-red-900 mb-3">Signs</h4>
                <p className="text-red-800 mb-4">
                  Severe decompensation, such as unrelieved shortness of breath at rest, new chest tightness, or new-onset confusion.
                </p>

                <h4 className="font-semibold text-red-900 mb-3">Nursing Action</h4>
                <p className="text-red-800">
                  Immediate notification of the provider and/or activation of the MET RN. Message PHG using the appropriate Epic secure chat group.
                </p>
              </div>

              <AlertBox type="info">
                As the liaison between the patient and the medical team, the nurse's timely and accurate assessments are what enable the team to adjust the treatment plan. This role culminates in ensuring a safe transition out of the hospital.
              </AlertBox>
            </ContentSection>

            <MobileBottomNav items={nursingNavItems} discipline="nursing" />
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Escalation;