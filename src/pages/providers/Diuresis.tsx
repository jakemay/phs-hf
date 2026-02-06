import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import AlertBox from "@/components/ui/AlertBox";
import { providerNavItems } from "@/data/navigation";

const Diuresis = () => {
  return (
    <Layout>
      <PageHeader
        title="Diuresis Strategies and Monitoring"
        subtitle="Achieving euvolemia through evidence-based diuretic management."
        discipline="provider"
        breadcrumbs={[{ label: "Providers", href: "/providers/ordersets" }, { label: "Diuresis Strategies" }]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          <aside className="hidden lg:block">
            <SideNav items={providerNavItems} discipline="provider" />
          </aside>

          <article className="max-w-4xl">
            <ContentSection>
              <p className="text-lg mb-4">
                Diuresis is the cornerstone of therapy for the majority of patients hospitalized with congestive heart
                failure. The primary goal is to achieve euvolemia to relieve symptoms such as dyspnea and edema.
              </p>

              <AlertBox type="danger" title="Critical Escalation">
                If inadequate urine output (&lt;150 mL/hr over the first 6 hours) occurs after the first dose,
                immediately escalate to ensure decongestion.
              </AlertBox>

              <p className="mb-4">
                <strong>Intravenous (IV) loop diuretics</strong> (e.g., furosemide, bumetanide) are the preferred agents
                for hospitalized patients with significant fluid overload. Early adjunctive use of acetazolamide has
                been shown to reduce length of stay.
              </p>
              <p className="mb-6">
                For patients with diuretic resistance or refractory edema, the adjunctive use of a{" "}
                <strong>thiazide or thiazide-like diuretic</strong> (e.g., metolazone, chlorothiazide) is a highly
                effective strategy to promote sequential nephron blockade and enhance fluid removal.
              </p>
            </ContentSection>

            <ContentSection title="Initial Loop Diuretic Therapy">
              <p className="mb-4">
                <strong>Initial dose:</strong> 1–2.5x the total daily outpatient oral loop diuretic dose IV, divided
                every 8–12 hours (e.g., furosemide 40–80 mg IV bid). For stable patients without a Foley catheter,
                consider using the BID-Lasix frequency which doses diuretics early morning and early afternoon, avoiding
                significant nocturia.
              </p>
              <p className="mb-4">
                <strong>Titration:</strong> If inadequate response, increase the dose by 50–100% or switch to continuous
                infusion (e.g., furosemide 5–20 mg/h with initial bolus).
              </p>
              <p className="mb-4">
                <strong>Monitoring:</strong> Track daily weight, urine output, electrolytes, and renal function; adjust
                based on response and tolerability.
              </p>
              <AlertBox type="warning">Twice daily BMP and Mg should be monitored for diuretic infusions.</AlertBox>
            </ContentSection>

            <ContentSection title="Addition of Acetazolamide">
              <p className="mb-4">
                <strong>Indication:</strong> Add for inadequate response to loop diuretics or to enhance diuretic
                efficiency.
              </p>
              <p className="mb-4">
                <strong>Dose:</strong> 500 mg IV/PO once daily for up to 3 days.
              </p>
              <p>
                <strong>Effect:</strong> Increases natriuresis and diuresis, with more pronounced effects in lower eGFR,
                but may cause transient worsening renal function without adverse outcomes.
              </p>
            </ContentSection>

            <ContentSection title="Addition of Thiazide Diuretics">
              <p className="mb-4">
                <strong>Indication:</strong> Use for persistent congestion despite adequate loop diuretic therapy
                (sequential nephron blockade).
              </p>
              <p className="mb-4">
                <strong>Dose:</strong> Metolazone 2.5–5 mg PO once daily; hydrochlorothiazide 25–50 mg PO once daily or
                chlorothiazide 500–1000 mg IV once daily (can be dosed bid as needed).
              </p>
              <AlertBox type="warning" title="Risks">
                Monitor for hypokalemia, hyponatremia, and worsening renal function; use the lowest effective dose.
              </AlertBox>
            </ContentSection>

            <ContentSection title="Essential Monitoring During Active Diuresis">
              <ul className="list-disc pl-6 space-y-2">
                <li>Vigilant and accurate tracking of fluid intake and output (I/O)</li>
                <li>Accurate daily weights, performed at the same time each day using the same scale</li>
                <li>Serial assessment of clinical signs of congestion (e.g., JVD, rales, peripheral edema)</li>
                <li>
                  Regular monitoring of renal function (BUN, creatinine) and electrolytes, with particular attention to
                  serum potassium
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground italic">
                While managing congestion is the immediate priority, it is equally important to concurrently optimize
                the foundational, long-term medical therapies that improve survival.
              </p>
            </ContentSection>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Diuresis;
