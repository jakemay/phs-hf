import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import ClinicalTable from "@/components/ui/ClinicalTable";
import AlertBox from "@/components/ui/AlertBox";
import { providerNavItems } from "@/data/navigation";

const medicationData = [
  {
    drugClass: "Alpha agonists",
    examples: "Midodrine",
    mechanism: "Increases myocardial stress and congestion",
  },
  {
    drugClass: "Volume expanders",
    examples: "Albumin",
    mechanism: "Can worsen fluid overload and pulmonary edema. No proven benefit in HF-related hypoalbuminemia.",
  },
  {
    drugClass: "NSAIDs (Nonselective and COX-2 selective)",
    examples: "Ibuprofen, Naproxen, Celecoxib",
    mechanism: "Cause sodium and water retention and blunt the response to diuretics.",
  },
  {
    drugClass: "Thiazolidinediones",
    examples: "Pioglitazone, Rosiglitazone",
    mechanism: "Increase the risk of developing or worsening heart failure.",
  },
  {
    drugClass: "DPP-4 Inhibitors",
    examples: "Saxagliptin, Alogliptin",
    mechanism: "Associated with an increased risk of HF hospitalization.",
  },
  {
    drugClass: "Non-dihydropyridine Calcium Channel Blockers",
    examples: "Diltiazem, Verapamil",
    mechanism: "Exert negative inotropic effects, weakening cardiac contractility.",
  },
  {
    drugClass: "Class I and III Antiarrhythmics",
    examples: "Flecainide, Sotalol, Dronedarone",
    mechanism:
      "Can have proarrhythmic and/or negative inotropic effects. Amiodarone and dofetilide have shown neutral effects on mortality in HFrEF trials.",
  },
];

const MedicationsToAvoid = () => {
  return (
    <Layout>
      <PageHeader
        title="Medications to Avoid in Heart Failure"
        subtitle="Critical medication safety review for HF patients."
        discipline="provider"
        breadcrumbs={[{ label: "Providers", href: "/providers/ordersets" }, { label: "Medications to Avoid" }]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          <aside className="hidden lg:block">
            <SideNav items={providerNavItems} discipline="provider" />
          </aside>

          <article className="max-w-4xl">
            <ContentSection>
              <p className="text-lg mb-6">
                A meticulous review of a patient's medication list is a <strong>critical safety step</strong> upon
                admission. Certain common medications can exacerbate heart failure by causing sodium and water
                retention, increasing systemic vascular resistance, or exerting direct negative inotropic effects.
              </p>
            </ContentSection>

            <ContentSection title="Drugs That May Cause or Exacerbate Heart Failure">
              <ClinicalTable
                columns={[
                  { key: "drugClass", header: "Drug Class" },
                  { key: "examples", header: "Specific Examples" },
                  { key: "mechanism", header: "Mechanism of Harm" },
                ]}
                data={medicationData}
              />

              <AlertBox type="danger" title="Critical Action">
                A thorough medication reconciliation on admission is essential to identify and discontinue these and
                other potentially harmful agents.
              </AlertBox>
            </ContentSection>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default MedicationsToAvoid;
