import { z } from "zod";

export const scopeSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(30).optional().default(""),
  industry: z.enum(["Manufacturing", "Education", "Healthcare", "Finance", "Logistics", "Energy", "Other"]),
  projectType: z.enum(["Website or web application", "Mobile application", "AI or data solution", "Automation or IoT", "Drone or aerospace", "Energy monitoring", "Custom software"]),
  stage: z.enum(["Idea", "Planning", "Prototype", "Existing system"]),
  timeline: z.enum(["2 to 4 weeks", "1 to 2 months", "3 months or more", "Flexible"]),
  budget: z.enum(["Under ₹50,000", "₹50,000 to ₹2 lakh", "₹2 to ₹5 lakh", "Above ₹5 lakh", "Not decided"]),
  goals: z.string().trim().min(20).max(1800),
  consent: z.literal(true)
});

export type ScopeInput = z.infer<typeof scopeSchema>;

const rules: Record<string, { services: string[]; deliverables: string[]; roles: string[]; timeline: string; risks: string[] }> = {
  "Website or web application": { services: ["UI/UX design", "Full-stack development", "API integrations"], deliverables: ["Requirements and user journeys", "Responsive interface", "Backend and data model", "Testing and release checklist"], roles: ["Project lead", "UI/UX designer", "Frontend and backend developer", "QA reviewer"], timeline: "4 to 8 weeks for an initial release", risks: ["Unclear content ownership", "Late feature changes"] },
  "Mobile application": { services: ["Software development", "UI/UX design", "API integrations"], deliverables: ["Platform and feature definition", "Screen flows", "API and data plan", "Test and release plan"], roles: ["Product lead", "Mobile developer", "Backend developer", "QA reviewer"], timeline: "6 to 12 weeks for an initial release", risks: ["App-store requirements", "Device and OS coverage"] },
  "AI or data solution": { services: ["AI and machine learning", "API integrations", "Software development"], deliverables: ["Use-case and data assessment", "Evaluation criteria", "Prototype workflow", "Privacy and monitoring plan"], roles: ["Domain specialist", "Data / ML engineer", "Backend developer", "QA reviewer"], timeline: "4 to 10 weeks for a scoped prototype", risks: ["Data availability and quality", "Evaluation and privacy constraints"] },
  "Automation or IoT": { services: ["Software development", "API integrations", "Energy management"], deliverables: ["Device and signal inventory", "Connectivity plan", "Monitoring interface", "Failure and safety checklist"], roles: ["Systems engineer", "Embedded / IoT engineer", "Backend developer", "QA reviewer"], timeline: "6 to 12 weeks for a prototype", risks: ["Hardware availability", "Connectivity and field testing"] },
  "Drone or aerospace": { services: ["Drone technology", "Software development", "API integrations"], deliverables: ["Use-case and feasibility review", "Data and control requirements", "Prototype plan", "Compliance and field-test checklist"], roles: ["Domain specialist", "Systems / controls engineer", "Software developer", "Test lead"], timeline: "6 to 12 weeks for a feasibility-led prototype", risks: ["Safety and regulatory approvals", "Hardware and field-test dependencies"] },
  "Energy monitoring": { services: ["Energy management", "API integrations", "Full-stack development"], deliverables: ["Meter and sensor inventory", "Data model", "Monitoring dashboard", "Reporting and alert plan"], roles: ["Energy-domain specialist", "IoT / data engineer", "Frontend developer", "QA reviewer"], timeline: "4 to 10 weeks for an initial monitoring workflow", risks: ["Sensor compatibility", "Data quality and installation access"] },
  "Custom software": { services: ["Software development", "UI/UX design", "API integrations"], deliverables: ["Requirements and acceptance criteria", "Architecture outline", "Working prototype plan", "Testing and handover checklist"], roles: ["Project lead", "Software engineer", "UX designer as needed", "QA reviewer"], timeline: "4 to 10 weeks for a first release", risks: ["Scope changes", "Legacy-system dependencies"] }
};

export function deterministicScope(data: ScopeInput) {
  const selected = rules[data.projectType];
  const industryNotes: Record<string, string> = {
    Manufacturing: "Confirm machine interfaces, operational constraints and downtime windows.",
    Education: "Confirm learner roles, content ownership, accessibility needs and data permissions.",
    Healthcare: "Review sensitive-data handling and applicable compliance before using real patient data.",
    Finance: "Define auditability, access control and data-retention requirements early.",
    Logistics: "Confirm integration points and handling of delayed or missing events.",
    Energy: "Confirm sensor accuracy, reporting intervals and safe access to operational systems.",
    Other: "Confirm domain-specific rules, stakeholders and success criteria during discovery."
  };
  return {
    title: `${data.projectType}: initial project scope`,
    summary: `A first-pass plan for a ${data.industry.toLowerCase()} project at the ${data.stage.toLowerCase()} stage. This is a discussion draft, not a fixed quote or delivery commitment.`,
    recommendedServices: selected.services,
    deliverables: selected.deliverables,
    suggestedTeam: selected.roles,
    indicativeTimeline: selected.timeline,
    phases: [
      { title: "Discover", description: "Confirm users, problem, constraints and a measurable first-release outcome." },
      { title: "Define", description: "Agree scope, acceptance criteria, data needs and integration boundaries." },
      { title: "Build and validate", description: "Deliver a small working increment and test against agreed criteria." },
      { title: "Release and hand over", description: "Prepare deployment, documentation, ownership and ongoing support." }
    ],
    risks: [...selected.risks, industryNotes[data.industry]],
    assumptions: [`Target timing: ${data.timeline}.`, `Budget range: ${data.budget}.`, "Final scope, effort and pricing require discovery and technical review."],
    method: "Rules-based planning template. It is not AI-generated."
  };
}
