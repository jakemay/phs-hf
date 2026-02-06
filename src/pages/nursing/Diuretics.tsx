import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import { nursingNavItems } from "@/data/navigation";

const Diuretics = () => {
  return (
    <Layout>
      <PageHeader
        title="IV Diuretic Administration and Monitoring"
        subtitle="Safe and effective administration of intravenous diuretics."
        discipline="nursing"
        breadcrumbs={[{ label: "Nursing", href: "/nursing/assessment" }, { label: "IV Diuretic Monitoring" }]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[250px_1fr] gap-8">
          <aside className="hidden lg:block">
            <SideNav items={nursingNavItems} discipline="nursing" />
          </aside>

          <article className="max-w-4xl">
            <ContentSection>
              <p className="text-lg mb-6">
                The nurse plays a pivotal role in the safe and effective administration of intravenous (IV) diuretics.
                This responsibility encompasses not just medication administration, but also close monitoring of the
                patient's response and proactive surveillance for potential side effects.
              </p>

              <p className="mb-6">
                The purpose of IV diuretics is to achieve <strong>decongestion</strong> by removing excess fluid,
                thereby improving symptoms like dyspnea and edema.
              </p>
            </ContentSection>

            <ContentSection title="Key Nursing Monitoring During IV Diuresis">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-card border border-border rounded-xl p-5">
                  <h4 className="font-semibold text-lg mb-2">Efficacy</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitor urine output closely, expecting a significant increase. Assess for clinical symptom
                    improvement, such as easier breathing and decreased edema.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-5">
                  <h4 className="font-semibold text-lg mb-2">Hemodynamics</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitor blood pressure frequently for hypotension, which can result from excessive volume removal.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-5">
                  <h4 className="font-semibold text-lg mb-2">Electrolytes</h4>
                  <p className="text-sm text-muted-foreground">
                    Be vigilant for signs of electrolyte imbalances, particularly hypokalemia, a common side effect of
                    loop diuretics.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-5">
                  <h4 className="font-semibold text-lg mb-2">Renal Function</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitor trends in serum creatinine and BUN. A rapid rise may indicate over-diuresis or worsening
                    renal perfusion.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-muted-foreground italic">
                This focused monitoring of diuretic effects occurs within the broader context of continuous surveillance
                of the patient's hemodynamic and electrical stability.
              </p>
            </ContentSection>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Diuretics;
