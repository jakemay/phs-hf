import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Provider pages
import Ordersets from "./pages/providers/Ordersets";
import Phenotyping from "./pages/providers/Phenotyping";
import Exacerbations from "./pages/providers/Exacerbations";
import Evaluation from "./pages/providers/Evaluation";
import Diuresis from "./pages/providers/Diuresis";
import GDMT from "./pages/providers/GDMT";
import Hypotension from "./pages/providers/Hypotension";
import PACatheter from "./pages/providers/PACatheter";
import MedicationsToAvoid from "./pages/providers/MedicationsToAvoid";
import AdvancedHF from "./pages/providers/AdvancedHF";
import Discharge from "./pages/providers/Discharge";
import FluidManagement from "./pages/providers/FluidManagement";

// Nursing pages
import NursingAssessment from "./pages/nursing/Assessment";
import NursingGDMT from "./pages/nursing/GDMT";
import IOWeights from "./pages/nursing/IOWeights";
import NursingDiuretics from "./pages/nursing/Diuretics";
import Vitals from "./pages/nursing/Vitals";
import NursingPACatheter from "./pages/nursing/PACatheter";
import NursingExacerbations from "./pages/nursing/Exacerbations";
import Education from "./pages/nursing/Education";
import Escalation from "./pages/nursing/Escalation";
import NursingDischarge from "./pages/nursing/Discharge";

// Other pages
import Pharmacy from "./pages/Pharmacy";
import Therapy from "./pages/Therapy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Provider routes */}
          <Route path="/providers/ordersets" element={<Ordersets />} />
          <Route path="/providers/phenotyping" element={<Phenotyping />} />
          <Route path="/providers/exacerbations" element={<Exacerbations />} />
          <Route path="/providers/evaluation" element={<Evaluation />} />
          <Route path="/providers/diuresis" element={<Diuresis />} />
          <Route path="/providers/gdmt" element={<GDMT />} />
          <Route path="/providers/hypotension" element={<Hypotension />} />
          <Route path="/providers/pa-catheter" element={<PACatheter />} />
          <Route path="/providers/medications-to-avoid" element={<MedicationsToAvoid />} />
          <Route path="/providers/advanced-hf" element={<AdvancedHF />} />
          <Route path="/providers/discharge" element={<Discharge />} />
          <Route path="/providers/fluid-management" element={<FluidManagement />} />
          
          {/* Nursing routes */}
          <Route path="/nursing/assessment" element={<NursingAssessment />} />
          <Route path="/nursing/gdmt" element={<NursingGDMT />} />
          <Route path="/nursing/io-weights" element={<IOWeights />} />
          <Route path="/nursing/diuretics" element={<NursingDiuretics />} />
          <Route path="/nursing/vitals" element={<Vitals />} />
          <Route path="/nursing/pa-catheter" element={<NursingPACatheter />} />
          <Route path="/nursing/exacerbations" element={<NursingExacerbations />} />
          <Route path="/nursing/education" element={<Education />} />
          <Route path="/nursing/escalation" element={<Escalation />} />
          <Route path="/nursing/discharge" element={<NursingDischarge />} />
          
          {/* Other routes */}
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/therapy" element={<Therapy />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
