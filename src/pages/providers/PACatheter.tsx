import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import MobileBottomNav from "@/components/ui/MobileBottomNav";
import ClinicalTable from "@/components/ui/ClinicalTable";
import AlertBox from "@/components/ui/AlertBox";
import { providerNavItems } from "@/data/navigation";
import forresterImage from "@/assets/forrester-classification.png";

const rhcParameters = [
  { parameter: "Right atrial pressure (RAP)", normal: "2–10 mmHg", significance: "Elevated in right heart failure, volume overload, tricuspid regurgitation" },
  { parameter: "Pulmonary artery systolic pressure (PASP)", normal: "15–30 mmHg", significance: "Elevated in pulmonary hypertension, left heart disease" },
  { parameter: "Pulmonary artery diastolic pressure (PADP)", normal: "4–12 mmHg", significance: "Correlates with PCWP in absence of pulmonary vascular disease" },
  { parameter: "Mean pulmonary artery pressure (mPAP)", normal: "8–20 mmHg", significance: "Defines pulmonary hypertension if ≥20 mmHg" },
  { parameter: "Pulmonary capillary wedge pressure (PCWP)", normal: "≤15 mmHg", significance: "Reflects left atrial/LV filling pressure; elevated in LV failure" },
  { parameter: "Cardiac output (CO)", normal: "4–8 L/min", significance: "Reduced in cardiogenic shock, advanced HF" },
  { parameter: "Cardiac index (CI)", normal: "2.5–4.0 L/min/m²", significance: "CI < 2.2 indicates hypoperfusion ('cold')" },
  { parameter: "Mixed venous O2 saturation (SvO2)", normal: "65–80%", significance: "Low values indicate increased oxygen extraction (poor perfusion)" },
  { parameter: "Systemic vascular resistance (SVR)", normal: "800–1,200 dynes·s/cm⁵", significance: "Elevated in cardiogenic shock; target for vasodilators" },
  { parameter: "Pulmonary vascular resistance (PVR)", normal: "< 2 Wood units", significance: "Elevated in pulmonary vascular disease; important for transplant evaluation" },
];

const profileInterventions = [
  { profile: "Profile I: Warm & Dry", ci: "≥ 2.2", pcwp: "≤ 18", treatment: "Optimize oral GDMT; this is the goal state" },
  { profile: "Profile II: Warm & Wet", ci: "≥ 2.2", pcwp: "> 18", treatment: "IV diuretics ± vasodilators; most common presentation" },
  { profile: "Profile III: Cold & Dry", ci: "< 2.2", pcwp: "≤ 18", treatment: "Cautious volume challenge ± inotropes; consider other causes of hypoperfusion" },
  { profile: "Profile IV: Cold & Wet", ci: "< 2.2", pcwp: "> 18", treatment: "Diuretics + inotropes/vasopressors ± MCS; highest mortality risk" },
];

const PACatheter = () => {
  return (
    <Layout>
      <PageHeader
        title="Invasive Hemodynamic Monitoring"
        subtitle="Right heart catheterization and PA catheter interpretation"
        discipline="provider"
        breadcrumbs={[
          { label: "Providers", href: "/providers/ordersets" },
          { label: "PA Catheter" },
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
                Invasive hemodynamic monitoring via pulmonary artery (PA) catheterization provides direct measurement of intracardiac pressures and cardiac output. This information is invaluable for guiding therapy in patients with cardiogenic shock, unclear volume status, or inadequate response to empiric treatment.
              </p>

              <AlertBox type="info" title="Indications for PA Catheterization">
                Consider invasive monitoring when clinical assessment is inadequate to determine volume status and cardiac output, particularly in patients with cardiogenic shock, refractory congestion, or complex hemodynamic profiles.
              </AlertBox>
            </ContentSection>

            <ContentSection title="Hemodynamic Parameters">
              <ClinicalTable
                columns={[
                  { key: "parameter", header: "Parameter" },
                  { key: "normal", header: "Normal Range" },
                  { key: "significance", header: "Clinical Significance" },
                ]}
                data={rhcParameters}
              />
            </ContentSection>

            <ContentSection title="Forrester Classification">
              <p className="mb-4">
                The Forrester classification uses cardiac index (CI) and pulmonary capillary wedge pressure (PCWP) to categorize patients into hemodynamic profiles that guide therapeutic decisions.
              </p>

              <figure className="my-8">
                <img 
                  src={forresterImage} 
                  alt="Forrester Classification of Acute Heart Failure" 
                  className="w-full rounded-lg shadow-md"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center">
                  The Forrester classification uses CI (threshold 2.2 L/min/m²) and PCWP (threshold 18 mmHg) to define four hemodynamic profiles.
                </figcaption>
              </figure>

              <ClinicalTable
                columns={[
                  { key: "profile", header: "Profile" },
                  { key: "ci", header: "CI (L/min/m²)" },
                  { key: "pcwp", header: "PCWP (mmHg)" },
                  { key: "treatment", header: "Treatment Focus" },
                ]}
                data={profileInterventions}
              />
            </ContentSection>

            <ContentSection title="Clinical Application">
              <h3 className="text-lg font-semibold mb-3">Guiding Diuresis</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Goal PCWP:</strong> Generally 15-18 mmHg; lower targets may be tolerated in compensated patients</li>
                <li><strong>Monitoring response:</strong> Serial PCWP measurements guide diuretic titration</li>
                <li><strong>Avoiding over-diuresis:</strong> Watch for declining CI as filling pressures drop</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3">Guiding Vasoactive Therapy</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>High SVR:</strong> Consider vasodilators (nitroprusside, nitroglycerin) if BP allows</li>
                <li><strong>Low CI:</strong> Inotropes (dobutamine, milrinone) to improve cardiac output</li>
                <li><strong>Cardiogenic shock:</strong> Combination therapy often needed; consider MCS early</li>
              </ul>

              <AlertBox type="warning" title="PHG Consultation">
                Consult PHG Heart Failure or Cardiac Critical Care for patients requiring invasive hemodynamic monitoring, especially those with cardiogenic shock (Profile IV) or consideration of mechanical circulatory support.
              </AlertBox>
            </ContentSection>

            <ContentSection title="Practical Considerations">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Zeroing:</strong> Transducer should be zeroed at the phlebostatic axis (4th intercostal space, mid-axillary line)</li>
                <li><strong>Waveform analysis:</strong> Ensure proper positioning by confirming characteristic waveforms</li>
                <li><strong>PCWP measurement:</strong> Obtain at end-expiration for accuracy</li>
                <li><strong>Complications:</strong> Arrhythmias, pulmonary artery rupture (rare), infection, thrombosis</li>
                <li><strong>Duration:</strong> Remove as soon as clinical goals are met; reassess need daily</li>
              </ul>
            </ContentSection>

            <MobileBottomNav items={providerNavItems} discipline="provider" />
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default PACatheter;
