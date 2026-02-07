import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import MobileBottomNav from "@/components/ui/MobileBottomNav";
import ClinicalTable from "@/components/ui/ClinicalTable";
import AlertBox from "@/components/ui/AlertBox";
import { nursingNavItems } from "@/data/navigation";
import hemodynamicMonitoringImage from "@/assets/hemodynamic-monitoring-nursing.png";

const normalRanges = [
  { parameter: "Right atrial pressure (RAP)", normal: "2–10 mmHg", abnormal: "Elevated in RV failure, volume overload" },
  { parameter: "Pulmonary artery pressure (PA)", normal: "15–30/4–12 mmHg", abnormal: "Elevated in pulmonary hypertension, LV failure" },
  { parameter: "Pulmonary capillary wedge pressure (PCWP)", normal: "≤15 mmHg", abnormal: "Elevated suggests LV failure, congestion" },
  { parameter: "Cardiac output (CO)", normal: "4–8 L/min", abnormal: "Low indicates poor cardiac function" },
  { parameter: "Cardiac index (CI)", normal: "2.5–4.0 L/min/m²", abnormal: "CI < 2.2 = hypoperfusion ('cold')" },
  { parameter: "Mixed venous O2 saturation (SvO2)", normal: "65–80%", abnormal: "Low indicates poor perfusion" },
  { parameter: "Systemic vascular resistance (SVR)", normal: "800–1,200 dynes·s/cm⁵", abnormal: "Elevated in shock; low in sepsis" },
];

const nursingMonitoring = [
  { task: "Waveform assessment", frequency: "Continuous", considerations: "Verify characteristic waveforms; report damping or artifacts" },
  { task: "Zeroing transducer", frequency: "Q8h and with repositioning", considerations: "Zero at phlebostatic axis (4th ICS, mid-axillary)" },
  { task: "Hemodynamic readings", frequency: "Per order (typically Q1-4h)", considerations: "Obtain at end-expiration; document with vital signs" },
  { task: "Insertion site assessment", frequency: "Q shift minimum", considerations: "Assess for signs of infection, hematoma, bleeding" },
  { task: "Line patency", frequency: "Continuous", considerations: "Maintain heparinized flush; assess for clots" },
  { task: "Patient positioning", frequency: "With each reading", considerations: "HOB 0-60°; relevel with position changes" },
];

const interpretations = [
  { finding: "Low CI (< 2.2)", meaning: "Hypoperfusion ('cold')", action: "Expect inotropes (dobutamine, milrinone); monitor for arrhythmias" },
  { finding: "High RAP", meaning: "Volume overload / RV failure", action: "Expect IV diuretics; strict I&O; daily weights" },
  { finding: "High PCWP (> 18)", meaning: "LV congestion ('wet')", action: "Expect diuretics ± vasodilators; monitor respiratory status" },
  { finding: "High SVR", meaning: "Increased afterload", action: "May need vasodilators; monitor BP closely" },
  { finding: "Low SvO2", meaning: "Poor oxygen delivery", action: "Notify provider; may need increased support" },
];

const NursingPACatheter = () => {
  return (
    <Layout>
      <PageHeader
        title="Hemodynamic Monitoring"
        subtitle="Nursing guide to PA catheter management and interpretation"
        discipline="nursing"
        breadcrumbs={[
          { label: "Nursing", href: "/nursing/assessment" },
          { label: "PA Catheter" },
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
                Pulmonary artery (PA) catheter monitoring requires specialized nursing knowledge for accurate data collection, interpretation, and patient safety. Nurses are responsible for line positioning, documenting rhythms, recording intake/output volumes, and recognizing hemodynamic trends.
              </p>

              <figure className="my-8">
                <img 
                  src={hemodynamicMonitoringImage} 
                  alt="Hemodynamic Monitoring: A Nurse's Guide to Right Heart Catheterization" 
                  className="w-full rounded-lg shadow-md"
                />
                <figcaption className="text-sm text-muted-foreground mt-2 text-center">
                  Overview of hemodynamic parameters, normal ranges, and clinical interpretations for nursing practice.
                </figcaption>
              </figure>
            </ContentSection>

            <ContentSection title="Normal Hemodynamic Ranges">
              <ClinicalTable
                columns={[
                  { key: "parameter", header: "Parameter" },
                  { key: "normal", header: "Normal Range" },
                  { key: "abnormal", header: "When Abnormal" },
                ]}
                data={normalRanges}
              />
            </ContentSection>

            <ContentSection title="Nursing Monitoring Responsibilities">
              <ClinicalTable
                columns={[
                  { key: "task", header: "Task" },
                  { key: "frequency", header: "Frequency" },
                  { key: "considerations", header: "Key Considerations" },
                ]}
                data={nursingMonitoring}
              />
            </ContentSection>

            <ContentSection title="Interpreting Hemodynamic Data">
              <AlertBox type="info" title="Clinical Pearl">
                Hemodynamic values should always be interpreted in the clinical context. Trends over time are often more valuable than single readings.
              </AlertBox>

              <ClinicalTable
                columns={[
                  { key: "finding", header: "Finding" },
                  { key: "meaning", header: "Interpretation" },
                  { key: "action", header: "Nursing Considerations" },
                ]}
                data={interpretations}
              />
            </ContentSection>

            <ContentSection title="Safety Considerations">
              <h3 className="text-lg font-semibold mb-3">Complications to Monitor</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Arrhythmias:</strong> Ventricular ectopy during insertion/repositioning; keep lidocaine available</li>
                <li><strong>Pulmonary artery rupture:</strong> Rare but life-threatening; never over-inflate balloon</li>
                <li><strong>Catheter migration:</strong> Monitor waveform; spontaneous wedging requires immediate intervention</li>
                <li><strong>Infection:</strong> Sterile dressing changes; assess insertion site</li>
                <li><strong>Thrombosis:</strong> Maintain flush system; report damped waveforms</li>
              </ul>

              <AlertBox type="warning" title="Red Flags - Notify Provider Immediately">
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Spontaneous wedging (continuous wedge waveform)</li>
                  <li>Hemoptysis (may indicate PA rupture)</li>
                  <li>Persistent ventricular arrhythmias</li>
                  <li>Sudden change in hemodynamic values</li>
                  <li>Signs of line infection</li>
                </ul>
              </AlertBox>

              <h3 className="text-lg font-semibold mb-3 mt-6">Documentation Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All hemodynamic values with timestamp and patient position</li>
                <li>Response to interventions (diuretics, inotropes, vasodilators)</li>
                <li>Insertion site assessment</li>
                <li>Any complications or concerns communicated to provider</li>
              </ul>
            </ContentSection>

            <MobileBottomNav items={nursingNavItems} discipline="nursing" />
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default NursingPACatheter;
