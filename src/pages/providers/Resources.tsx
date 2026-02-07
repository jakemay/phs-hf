import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import ContentSection from "@/components/ui/ContentSection";
import SideNav from "@/components/ui/SideNav";
import MobileBottomNav from "@/components/ui/MobileBottomNav";
import { providerNavItems } from "@/data/navigation";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FlaskConical } from "lucide-react";

const Resources = () => {
  return (
    <Layout>
      <PageHeader
        title="Resources"
        subtitle="Key guidelines and landmark clinical trials that define contemporary heart failure care."
        discipline="provider"
        breadcrumbs={[
          { label: "Providers", href: "/providers/phenotyping" },
          { label: "Resources" },
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <SideNav items={providerNavItems} discipline="provider" />

          <article className="flex-1 max-w-4xl">
            <ContentSection>
              <p className="text-lg text-muted-foreground mb-6">
                The most recent heart failure guidelines are the 2022 AHA/ACC/HFSA guideline and the 2021 ESC guideline, with a 2023 ESC focused update. The most important late-breaking trials of the past 20 years include PARADIGM-HF, DAPA-HF, EMPEROR-Reduced, EMPEROR-Preserved, DELIVER, and VICTORIA. These trials reshaped therapy by establishing the four pillars for HFrEF (ARNI/ACEi, beta-blocker, MRA, SGLT2i) and extending SGLT2 inhibitors to HFpEF, while vericiguat added a novel option for worsening HFrEF.
              </p>
            </ContentSection>

            {/* Guidelines Section */}
            <ContentSection title="Heart Failure Guidelines">
              <Card className="mb-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BookOpen className="h-5 w-5 text-provider" />
                    Most Recent Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[180px]">Guideline</TableHead>
                        <TableHead className="w-[80px]">Year</TableHead>
                        <TableHead>Key Updates and Recommendations</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">AHA/ACC/HFSA Guideline</TableCell>
                        <TableCell>2022</TableCell>
                        <TableCell>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Introduces four pillars of HFrEF therapy (ARNI/ACEi, beta-blocker, MRA, SGLT2i)</li>
                            <li>Recommends SGLT2 inhibitors for HFrEF regardless of diabetes</li>
                            <li>Provides guidance on HFpEF, HFmrEF, and HFimpEF</li>
                            <li>Emphasizes early initiation and titration of GDMT</li>
                            <li>Includes palliative care and social determinants of health</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">ESC Guideline</TableCell>
                        <TableCell>2021</TableCell>
                        <TableCell>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Provides detailed guidance on HFpEF diagnosis and management</li>
                            <li>Emphasizes multidisciplinary care and patient education</li>
                            <li>Incorporates new evidence on SGLT2 inhibitors in HFpEF</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">ESC Focused Update</TableCell>
                        <TableCell>2023</TableCell>
                        <TableCell>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Updates recommendations on ARNIs, MRAs, and device therapy</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </ContentSection>

            {/* Clinical Trials Section */}
            <ContentSection title="Landmark Clinical Trials (2005-2025)">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FlaskConical className="h-5 w-5 text-provider" />
                    Most Important Late-Breaking Trials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[140px]">Trial</TableHead>
                        <TableHead className="w-[60px]">Year</TableHead>
                        <TableHead className="w-[220px]">Intervention</TableHead>
                        <TableHead>Key Findings</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">PARADIGM-HF</TableCell>
                        <TableCell>2014</TableCell>
                        <TableCell className="text-sm">Sacubitril/valsartan vs. enalapril</TableCell>
                        <TableCell>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Reduced CV death and HF hospitalization by 20%</li>
                            <li>Established ARNI as first-line therapy for HFrEF</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">DAPA-HF</TableCell>
                        <TableCell>2019</TableCell>
                        <TableCell className="text-sm">Dapagliflozin vs. placebo</TableCell>
                        <TableCell>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Reduced CV death and HF hospitalization by 26%</li>
                            <li>Established SGLT2 inhibitors for HFrEF regardless of diabetes</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">EMPEROR-Reduced</TableCell>
                        <TableCell>2020</TableCell>
                        <TableCell className="text-sm">Empagliflozin vs. placebo</TableCell>
                        <TableCell>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Reduced CV death and HF hospitalization by 25%</li>
                            <li>Confirmed SGLT2 benefit in HFrEF</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">EMPEROR-Preserved</TableCell>
                        <TableCell>2021</TableCell>
                        <TableCell className="text-sm">Empagliflozin vs. placebo</TableCell>
                        <TableCell>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Reduced HF hospitalization by 21% in HFpEF</li>
                            <li>Extended SGLT2 benefit to HFpEF</li>
                            <li>Reduced CV death and HF hospitalization by 18% in HFpEF</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">DELIVER</TableCell>
                        <TableCell>2022</TableCell>
                        <TableCell className="text-sm">Dapagliflozin vs. placebo</TableCell>
                        <TableCell>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Reinforced SGLT2 benefit across EF spectrum</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">VICTORIA</TableCell>
                        <TableCell>2020</TableCell>
                        <TableCell className="text-sm">Vericiguat vs. placebo</TableCell>
                        <TableCell>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Reduced HF hospitalization by 10% in high-risk HFrEF</li>
                            <li>Added novel therapy for worsening HFrEF</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">TOPCAT</TableCell>
                        <TableCell>2014</TableCell>
                        <TableCell className="text-sm">Spironolactone vs. placebo</TableCell>
                        <TableCell>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Reduced HF hospitalization in HFpEF</li>
                            <li>Supported MRA use in selected HFpEF patients</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">CHARM-Preserved</TableCell>
                        <TableCell>2003</TableCell>
                        <TableCell className="text-sm">Candesartan vs. placebo</TableCell>
                        <TableCell>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Reduced HF hospitalization in HFpEF</li>
                            <li>Early evidence for RAAS blockade in HFpEF</li>
                            <li>Reduced CV death and HF hospitalization</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">SHIFT</TableCell>
                        <TableCell>2010</TableCell>
                        <TableCell className="text-sm">Ivabradine vs. placebo</TableCell>
                        <TableCell>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Added heart rate-lowering therapy for HFrEF</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">ATMOSPHERE</TableCell>
                        <TableCell>2016</TableCell>
                        <TableCell className="text-sm">Aliskiren vs. enalapril vs. combination</TableCell>
                        <TableCell>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>No added benefit with aliskiren</li>
                            <li>Clarified RAAS modulation limits</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </ContentSection>

            {/* Summary */}
            <ContentSection>
              <p className="text-muted-foreground italic">
                These guidelines and trials collectively define contemporary heart failure care, emphasizing early, comprehensive, evidence-based therapy and extending benefits across the ejection fraction spectrum.
              </p>
            </ContentSection>

            {/* Sources */}
            <ContentSection title="Sources">
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>2022 AHA/ACC/HFSA guideline for the management of heart failure: executive summary. <em>Circulation</em>, 2022</li>
                <li>Contemporary American and European guidelines for heart failure management: JACC guideline comparison. <em>JACC: Heart Failure</em>, 2024</li>
                <li>2024 ACC expert consensus decision pathway for treatment of heart failure with reduced ejection fraction. <em>Journal of the American College of Cardiology</em>, 2024</li>
                <li>2022 AHA/ACC/HFSA guideline for the management of heart failure. <em>Journal of the American College of Cardiology</em>, 2022</li>
                <li>2024 update to the 2020 ACC/AHA clinical performance and quality measures for adults with heart failure. <em>Circulation: Cardiovascular Quality and Outcomes</em>, 2024</li>
                <li>Sodium-glucose cotransporter-2 inhibition for heart failure with preserved ejection fraction and chronic kidney disease. <em>Cardiovascular Diabetology</em>, 2023</li>
              </ol>
            </ContentSection>

            <MobileBottomNav items={providerNavItems} discipline="provider" />
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
