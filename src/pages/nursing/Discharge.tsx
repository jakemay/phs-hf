import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import MobileBottomNav from "@/components/ui/MobileBottomNav";
import AlertBox from "@/components/ui/AlertBox";
import { nursingNavItems } from "@/data/navigation";

const NursingDischarge = () => {
  return (
    <Layout>
      <PageHeader
        title="Discharge Teaching and Transition of Care Checklist"
        subtitle="Empowering patients for safe self-management at home."
        discipline="nursing"
        breadcrumbs={[{ label: "Nursing", href: "/nursing/assessment" }, { label: "Discharge Teaching" }]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          <aside className="hidden lg:block">
            <SideNav items={nursingNavItems} discipline="nursing" />
          </aside>

          <article className="max-w-4xl">
            <ContentSection>
              <p className="text-lg mb-6">
                Discharge teaching is not a single event but a <strong>comprehensive process</strong> that begins on
                admission and culminates in empowering the patient for safe self-management at home. The nurse plays a
                vital role in preventing medication errors and ensuring continuity of care.
              </p>
            </ContentSection>

            <ContentSection title="Sodium Guidance at Discharge">
              <div className="bg-muted/50 rounded-xl p-5 mb-4">
                <p className="italic font-medium mb-2">"You do not need an extreme low-salt diet."</p>
                <p className="mb-2">
                  Target: ≈2,000–3,000 mg sodium per day, unless a different goal is written in your discharge
                  instructions.
                </p>
                <p>Focus on avoiding very high-salt foods, not eliminating salt entirely.</p>
              </div>

              <h4 className="font-semibold mb-2">Practical Nurse Teaching Points</h4>
              <p className="mb-2">
                <strong>Review:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Common high-salt foods (processed meats, canned soups, fast food)</li>
                <li>How to read food labels (mg sodium per serving)</li>
              </ul>

              <p className="mb-2">
                <strong>Reinforce:</strong>
              </p>
              <p className="mb-4">Adequate nutrition is important—patients should eat regularly.</p>

              <p className="mb-2">
                <strong>Use teach-back:</strong>
              </p>
              <p className="italic">"Can you tell me one food you'll try to limit because of salt?"</p>
            </ContentSection>

            <ContentSection title="Fluid Guidance at Discharge">
              <AlertBox type="info" title="Key Principle">
                Fluid restriction used in the hospital is usually temporary. Most patients go home on liberalized fluids
                unless a restriction is clearly prescribed.
              </AlertBox>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <h5 className="font-semibold text-green-900 mb-2">If NO fluid restriction is ordered:</h5>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>"Drink to thirst. Avoid excessive fluid intake."</li>
                    <li>"Avoid electrolyte drinks."</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <h5 className="font-semibold text-amber-900 mb-2">If a fluid restriction IS ordered:</h5>
                  <ul className="text-amber-800 text-sm space-y-1">
                    <li>Clearly state daily limit (e.g., 2 liters / ≈64 oz per day)</li>
                    <li>How long it applies (often reassessed at follow-up)</li>
                    <li>Explain: Fluids include water, coffee, tea, soda, soup, ice, gelatin</li>
                  </ul>
                </div>
              </div>
            </ContentSection>

            <ContentSection title="Daily Weights: The Anchor Behavior">
              <p className="mb-4 font-medium">
                Daily weights are more important than diet rules for early detection of fluid retention.
              </p>

              <h4 className="font-semibold mb-2">Teach Every Patient</h4>
              <p className="mb-2">Weigh yourself:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Every morning</li>
                <li>After urinating</li>
                <li>Before eating</li>
                <li>Same scale, same clothing</li>
              </ul>

              <AlertBox type="warning" title="Call If:">
                Weight increases by 3+ lbs in 2 days or 5+ lbs in one week.
              </AlertBox>
            </ContentSection>

            <ContentSection title="Nursing Discharge Teaching Checklist">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg">
                  <input type="checkbox" className="mt-1" disabled />
                  <div>
                    <strong>Medications:</strong> Review each medication, its purpose, dose, and key side effects.
                    Provide a clear, written medication list.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg">
                  <input type="checkbox" className="mt-1" disabled />
                  <div>
                    <strong>Diet:</strong> Reiterate the specific sodium and any fluid restriction guidelines as
                    described above.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg">
                  <input type="checkbox" className="mt-1" disabled />
                  <div>
                    <strong>Activity:</strong> Discuss recommended activity levels, any restrictions, and the plan for
                    cardiac rehabilitation.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg">
                  <input type="checkbox" className="mt-1" disabled />
                  <div>
                    <strong>Follow-up:</strong> Confirm the patient and/or caregiver knows the exact date, time, and
                    location of their scheduled follow-up appointment.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg">
                  <input type="checkbox" className="mt-1" disabled />
                  <div>
                    <strong>Symptom Monitoring:</strong> Review the use of the daily weight log and the "Yellow Zone/Red
                    Zone" action plan one final time.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg">
                  <input type="checkbox" className="mt-1" disabled />
                  <div>
                    <strong>Contact Information:</strong> Ensure the patient knows who to call with questions.
                  </div>
                </div>
              </div>

              <AlertBox type="success" title="Teach-Back Method">
                The "teach-back" method should be used to confirm that the patient and caregiver can verbalize their
                understanding of the key components of the discharge plan.
              </AlertBox>
            </ContentSection>

            <MobileBottomNav items={nursingNavItems} discipline="nursing" />
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default NursingDischarge;
