import { sql } from "@vercel/postgres";

export async function saveContact(input: { id: string; name: string; email: string; phone: string; message: string }) {
  await sql`
    INSERT INTO contact_submissions (id, name, email, phone, message, consent)
    VALUES (${input.id}::uuid, ${input.name}, ${input.email}, ${input.phone || null}, ${input.message}, true)
  `;
}

export async function saveScope(input: {
  id: string; name: string; email: string; phone: string; industry: string; projectType: string;
  stage: string; timeline: string; budget: string; goals: string; plan: unknown;
}) {
  await sql`
    INSERT INTO project_scope_requests
    (id, name, email, phone, industry, project_type, stage, timeline, budget, goals, scope_json, consent)
    VALUES (${input.id}::uuid, ${input.name}, ${input.email}, ${input.phone || null}, ${input.industry},
    ${input.projectType}, ${input.stage}, ${input.timeline}, ${input.budget}, ${input.goals},
    ${JSON.stringify(input.plan)}::jsonb, true)
  `;
}

export async function countRecentSubmissions(table: "contact_submissions" | "project_scope_requests", email: string) {
  // Table name is a closed union, never user-controlled.
  const result = table === "contact_submissions"
    ? await sql`SELECT COUNT(*)::int AS count FROM contact_submissions WHERE lower(email)=lower(${email}) AND created_at > NOW() - INTERVAL '1 hour'`
    : await sql`SELECT COUNT(*)::int AS count FROM project_scope_requests WHERE lower(email)=lower(${email}) AND created_at > NOW() - INTERVAL '1 hour'`;
  return Number(result.rows[0]?.count ?? 0);
}
