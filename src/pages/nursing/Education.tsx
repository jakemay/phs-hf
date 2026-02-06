import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import { nursingNavItems } from "@/data/navigation";

const Education = () => {
  return (
    <Layout>
      <PageHeader
        title="Patient Education: Diet, Fluid Restriction, and Symptom Monitoring"
        subtitle="Empowering patients for effective self-care."
        discipline="nursing"
        breadcrumbs={[{ label: "Nursing", href: "/nursing/assessment" }, { label: "Patient Education" }]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          <aside className="hidden lg:block">
            <SideNav items={nursingNavItems} discipline="nursing" />
          </aside>

          <article className="max-w-4xl">
            <ContentSection>
              <p className="text-lg mb-4">
                Patient education is a cornerstone of successful heart failure management and a primary nursing
                responsibility. Empowering patients and their caregivers with the knowledge and skills for effective
                self-care is essential for preventing readmissions and improving quality of life.
              </p>

              <p className="mb-6 font-medium">
                Patients with HF benefit from exercise and should be encouraged to safely ambulate when feasible.
              </p>
            </ContentSection>

            <ContentSection title="Key Dietary Teaching Points">
              <h4 className="font-semibold text-lg mb-3">Sodium Restriction</h4>
              <div className="bg-muted/50 rounded-xl p-4 mb-4">
                <p className="italic mb-2">"You do not need an extreme low-salt diet."</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Target: ≈2,000–3,000 mg sodium per day, unless a different goal is written in your discharge
                    instructions.
                  </li>
                  <li>Focus on avoiding very high-salt foods, not eliminating salt entirely.</li>
                </ul>
              </div>

              <h4 className="font-semibold text-lg mb-3">Fluid Restriction</h4>
              <p className="mb-4">
                If a fluid restriction has been ordered by the provider, explain the specific daily limit and discuss
                strategies for tracking intake.
              </p>

              <h4 className="font-semibold text-lg mb-3">Reading Food Labels</h4>
              <p className="mb-2">Teach the 3-step process:</p>
              <ol className="list-decimal pl-6 space-y-1">
                <li>Check the serving size</li>
                <li>Check the milligrams (mg) of sodium per serving</li>
                <li>Calculate total sodium</li>
              </ol>
            </ContentSection>

            <ContentSection title="Teaching Symptom Self-Monitoring">
              <p className="mb-4">
                Use the <strong>"Green/Yellow/Red Zone" framework</strong> to provide a clear action plan.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Daily Check-up</h4>
                  <p className="text-green-800 text-sm">
                    Instruct the patient on the importance of a daily check of their weight, swelling, and overall
                    well-being.
                  </p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-900 mb-2">Yellow Zone (Caution)</h4>
                  <p className="text-amber-800 text-sm">
                    Review the specific symptoms (e.g., weight gain of 3+ lbs in 2 days) that require a call to their
                    provider's office.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h4 className="font-semibold text-red-900 mb-2">Red Zone (Medical Alert)</h4>
                  <p className="text-red-800 text-sm">
                    Review the severe symptoms (e.g., unrelieved shortness of breath at rest) that require immediate
                    medical attention or calling 911.
                  </p>
                </div>
              </div>
            </ContentSection>

            <ContentSection title="Additional Resources">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  American Heart Association:{" "}
                  <a href="https://www.heart.org" className="text-provider hover:underline">
                    www.heart.org
                  </a>
                </li>
                <li>
                  National Heart, Lung, and Blood Institute:{" "}
                  <a href="https://www.nhlbi.gov" className="text-provider hover:underline">
                    www.nhlbi.gov
                  </a>
                </li>
              </ul>

              <p className="mt-4 text-muted-foreground italic">
                Teaching patients to recognize symptoms is directly linked to the formal process for communicating
                concerns about a patient's clinical decline.
              </p>
            </ContentSection>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
