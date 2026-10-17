import type { Metadata } from "next";
import { ProjectPlanner } from "@/components/project-planner";
export const metadata: Metadata = { title: "Project planner", description: "Prepare an initial project scope with a structured five-step planner." };
export default function PlannerPage(){return <><section className="page-hero"><div className="wrap"><div className="eyebrow">Project planning</div><h1 style={{marginTop:12}}>Turn an idea into a clearer brief.</h1><p>Share the industry, project type, stage and constraints. The planner prepares an initial scope with suggested services, deliverables, roles, risks and next steps.</p></div></section><section className="section"><div className="wrap"><ProjectPlanner/></div></section></>}
