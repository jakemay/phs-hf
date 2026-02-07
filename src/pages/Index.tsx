import { Heart, Stethoscope, Activity, Pill, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import DisciplineCard from "@/components/ui/DisciplineCard";
import ContactTable from "@/components/ui/ContactTable";

const providerLinks = [
  { title: "Admission Phenotyping", href: "/providers/phenotyping" },
  { title: "Epic Ordersets", href: "/providers/ordersets" },
  { title: "Initial Evaluation & Risk", href: "/providers/evaluation" },
  { title: "Diuresis Strategies", href: "/providers/diuresis" },
  { title: "GDMT Management", href: "/providers/gdmt" },
];

const nursingLinks = [
  { title: "Daily Assessment", href: "/nursing/assessment" },
  { title: "GDMT Nursing Role", href: "/nursing/gdmt" },
  { title: "I/O & Daily Weights", href: "/nursing/io-weights" },
  { title: "IV Diuretic Monitoring", href: "/nursing/diuretics" },
  { title: "Vital Signs & Telemetry", href: "/nursing/vitals" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyek0zNiAyNnYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">Presbyterian Heart Group</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Clinical Guidance for{" "}
              <span className="text-accent">Heart Failure</span> Care
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-3xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              The optimal care of the hospitalized patient with heart failure is not the result of isolated actions, but the product of a coordinated symphony of expertise. By integrating evidence-based medicine, vigilant nursing assessment, precise pharmaceutical management, and targeted rehabilitative therapy, this multidisciplinary team transforms a high-risk hospitalization into a durable bridge back to a patient's life and community.
            </p>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80V40C240 70 480 10 720 40C960 70 1200 10 1440 40V80H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Discipline Navigation Cards */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Guidance by Discipline
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select your discipline to access specialized clinical guidance for managing hospitalized heart failure patients.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <DisciplineCard
            title="Providers (MD/DO/APC)"
            description="Evidence-based guidance for diagnosis, risk stratification, diuresis strategies, GDMT optimization, and management of complex HF presentations."
            icon={Stethoscope}
            href="/providers/phenotyping"
            discipline="provider"
            subLinks={providerLinks}
          />

          <DisciplineCard
            title="Nursing"
            description="Daily assessment protocols, medication administration guidance, vital sign monitoring, patient education, and escalation pathways."
            icon={Activity}
            href="/nursing/assessment"
            discipline="nursing"
            subLinks={nursingLinks}
          />

          <DisciplineCard
            title="Pharmacy"
            description="Medication reconciliation, GDMT optimization, diuretic management, drug interactions, renal/electrolyte monitoring, and patient counseling."
            icon={Pill}
            href="/pharmacy"
            discipline="pharmacy"
          />

          <DisciplineCard
            title="Physical & Occupational Therapy"
            description="Functional assessment, early mobility protocols, energy conservation techniques, fall prevention, and discharge disposition recommendations."
            icon={Users}
            href="/therapy"
            discipline="therapy"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              How to Contact the Presbyterian Heart Group (PHG)
            </h2>
            <p className="text-muted-foreground mb-8">
              Rapid, clear communication with the cardiology team is critical for optimizing the care of hospitalized patients with heart failure. PHG prefers to be consulted regarding any patient with decompensated heart failure.
            </p>

            <ContactTable />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;