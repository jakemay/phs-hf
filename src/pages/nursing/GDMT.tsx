import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import AlertBox from "@/components/ui/AlertBox";
import { nursingNavItems } from "@/data/navigation";

const NursingGDMT = () => {
  return (
    <Layout>
      <PageHeader
        title="Nursing Role in Guideline Directed Medical Therapy"
        subtitle="High-priority nursing tasks for diuretics and GDMT management."
        discipline="nursing"
        breadcrumbs={[{ label: "Nursing", href: "/nursing/assessment" }, { label: "GDMT Nursing Role" }]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          <aside className="hidden lg:block">
            <SideNav items={nursingNavItems} discipline="nursing" />
          </aside>

          <article className="max-w-4xl">
            <ContentSection title="Diuretics: High-Priority Inpatient Nursing Tasks">
              <p className="mb-4">
                Diuretics are actively titrated during hospitalization and depend on accurate nursing data.
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Strict I/O</strong> on all HF admissions
                </li>
                <li>
                  <strong>Daily standing weight</strong> every morning (same scale; no bed weights unless unable to
                  stand)
                </li>
                <li>
                  <strong>Timely documentation</strong> of urine output after IV diuretics
                </li>
              </ul>

              <p className="font-semibold mb-2">Notify PHG of:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Inadequate urine output after diuretic dosing</li>
                <li>Weight increase or failure to diurese</li>
                <li>Symptoms of hypotension, dizziness, or worsening dyspnea</li>
              </ul>
            </ContentSection>

            <ContentSection title="GDMT Overview">
              <p className="mb-4">
                Most hospitalized HF patients should remain on GDMT during admission. These medications reduce mortality
                and readmissions and are commonly <strong>adjusted—not stopped</strong>—while inpatient.
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>ARNI / ACE inhibitor / ARB</strong> – continue if hemodynamically stable
                </li>
                <li>
                  <strong>Evidence-based beta blocker</strong> (carvedilol, metoprolol succinate, bisoprolol) – continue
                  unless in shock or severe bradycardia
                </li>
                <li>
                  <strong>Mineralocorticoid receptor antagonist (MRA)</strong> – monitor potassium and renal function
                  closely
                </li>
                <li>
                  <strong>SGLT2 inhibitor</strong> – continue or initiate if ordered; low hypoglycemia risk even without
                  diabetes
                </li>
              </ul>

              <AlertBox type="info" title="HFpEF">
                Focus is on SGLT2 inhibitors, MRAs, and aggressive congestion management with diuretics, along with
                blood pressure control and treatment of comorbidities.
              </AlertBox>
            </ContentSection>

            <ContentSection title="Medication Holding — Inpatient Policy">
              <AlertBox type="danger" title="Critical Policy">
                Do NOT hold GDMT medications without direct communication with PHG, except for emergencies.
              </AlertBox>

              <p className="mb-4 font-semibold">Do NOT automatically hold medications for:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>SBP in the 90s if patient is asymptomatic</li>
                <li>Mild creatinine rise during diuresis</li>
                <li>Stable bradycardia without symptoms</li>
              </ul>

              <p className="mb-4 font-semibold">Immediately notify PHG for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Symptomatic hypotension</li>
                <li>Escalating oxygen needs or pulmonary edema</li>
                <li>Acute kidney injury or potassium abnormalities</li>
                <li>Clinical concern for cardiogenic shock</li>
              </ul>
            </ContentSection>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default NursingGDMT;
