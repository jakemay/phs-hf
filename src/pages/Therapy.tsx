import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import AlertBox from "@/components/ui/AlertBox";

const Therapy = () => {
  return (
    <Layout>
      <PageHeader
        title="Guidance for Physical & Occupational Therapy"
        subtitle="Functional assessment, mobility, and safe discharge planning."
        discipline="therapy"
        breadcrumbs={[{ label: "PT/OT" }]}
      />

      <div className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <ContentSection title="5.1 Functional Assessment in Hospitalized Heart Failure Patients">
            <p className="mb-4">
              Functional assessment is the cornerstone of rehabilitation for hospitalized HF patients. Objective evaluation includes standardized tests (6-minute walk test—distance &lt;300m indicates advanced HF) and bedside assessments of transfers, gait, and ADL performance.
            </p>
            <p>The goal is to establish a baseline, identify functional deficits, set therapy goals, and measure progress.</p>
          </ContentSection>

          <ContentSection title="5.2 Early Mobility and Activity Progression">
            <AlertBox type="info">
              Prolonged bed rest is a risk, while early mobility is a key therapeutic intervention.
            </AlertBox>
            <h4 className="font-semibold mt-4 mb-2">Sample Progressive Mobility Plan</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Phase 1 (Bed Level):</strong> Active range of motion, bridging, rolling, sitting at edge of bed</li>
              <li><strong>Phase 2 (Room Level):</strong> Sit-to-stand transfers, marching in place, ambulation in room</li>
              <li><strong>Phase 3 (Hallway Level):</strong> Progressive distance ambulation in the hallway</li>
            </ol>
            <p className="mt-4">Monitor vital signs and symptoms before, during, and after activity.</p>
          </ContentSection>

          <ContentSection title="5.3 Energy Conservation Techniques">
            <p className="mb-4">Teaching patients to perform daily tasks more efficiently is a key OT intervention.</p>
            <h4 className="font-semibold mb-2">The "4 P's" of Energy Conservation</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Prioritize:</strong> Identify which activities are most important</li>
              <li><strong>Plan:</strong> Perform tasks after rest periods; spread demanding activities throughout the day</li>
              <li><strong>Pace:</strong> Work at a moderate, steady pace with frequent rest breaks</li>
              <li><strong>Position:</strong> Sit instead of stand for activities; use proper body mechanics</li>
            </ul>
          </ContentSection>

          <ContentSection title="5.4 Orthostatic Intolerance and Fall Risk Mitigation">
            <h4 className="font-semibold mb-2">Key Fall Prevention Strategies</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encourage slow, staged positional changes</li>
              <li>Instruct patients to sit at the edge of the bed before standing</li>
              <li>Ensure a clear, uncluttered environment</li>
              <li>Recommend appropriate, non-slip footwear</li>
              <li>Assess the need for an assistive device (walker, cane)</li>
            </ul>
          </ContentSection>

          <ContentSection title="5.5 Discharge Disposition Recommendations">
            <p className="mb-4">Key Factors Influencing Disposition:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Functional Status:</strong> Level of independence with mobility and ADLs</li>
              <li><strong>Safety:</strong> Ability to safely navigate living environment</li>
              <li><strong>Caregiver Support:</strong> Availability of assistance at home</li>
              <li><strong>Endurance:</strong> Ability to tolerate therapy intensity at next level of care</li>
            </ul>
          </ContentSection>

          <ContentSection title="5.6 Home Safety and Equipment Needs">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg">
                <input type="checkbox" className="mt-1" disabled />
                <span><strong>Bathroom Safety:</strong> Tub bench/shower chair, grab bars, non-slip bath mat</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg">
                <input type="checkbox" className="mt-1" disabled />
                <span><strong>Mobility:</strong> Clear pathways, remove throw rugs, improve lighting</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg">
                <input type="checkbox" className="mt-1" disabled />
                <span><strong>ADLs:</strong> Long-handled equipment, wheeled cart for transporting items</span>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="5.7 Coordination with Nursing and Case Management">
            <h4 className="font-semibold mb-2">Key Areas for Collaboration with Nursing</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Scheduling therapy around medications and rest periods</li>
              <li>Communicating patient's mobility status and assistance needs</li>
              <li>Reporting adverse responses to activity</li>
            </ul>
            <h4 className="font-semibold mb-2">Communication with Case Management</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Providing timely discharge disposition recommendations</li>
              <li>Communicating DME and home health therapy needs</li>
            </ul>
          </ContentSection>
        </article>
      </div>
    </Layout>
  );
};

export default Therapy;