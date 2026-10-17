
# Navirah

A professional, responsive Next.js rebuild with editable content, a project-scoping wizard, server-side validation and Postgres-backed form submissions.

## Design direction
- Cool white, deep navy and one muted blue accent.
- Readable typography, clear hierarchy, low-motion interactions.
- No decorative AI gradients, neon effects or autoplay animation.
- Existing public-facing Navirah service areas and team names are represented in editable data.
- Project entries are explicitly described as capability areas, not invented client case studies.

## Run locally
1. Install Node.js 20 or newer.
2. Copy `.env.example` to `.env.local`.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Pages
- `/` homepage
- `/services` services and deliverables
- `/projects` capability areas and project placeholders
- `/team` team directory
- `/project-planner` five-step scope planner
- `/contact` contact form

## Backend configuration
The API routes are server-side and validate payloads with Zod. To persist submissions, configure `POSTGRES_URL` with a managed PostgreSQL database, then run `db/schema.sql` using your provider's SQL console. Do not commit `.env.local`.

- `POST /api/contact`: validates and stores enquiries.
- `POST /api/project-scope`: validates the project brief, creates a scope, and stores it.
- If `OPENAI_API_KEY` is configured, the planner asks the model for a structured draft and validates the result. If not configured, it returns a deterministic rules-based plan and clearly labels it as such.
- If `RESEND_API_KEY`, `CONTACT_TO`, and `CONTACT_FROM` are configured, a submission notification is attempted after the database write. Email failure does not falsely report that the database write failed.

## Edit content
Edit `lib/content.ts` to add or update team members, services and capability/project entries. Team and projects are not hard-coded into page components.

## Before production
- Configure a managed database and run the schema.
- Configure and verify the sender domain before enabling email notifications.
- Add CAPTCHA/Turnstile or equivalent anti-abuse protection before public launch.
- Add an authenticated admin/CMS before allowing non-developers to edit the directory.
- Add privacy policy, data retention rules and a consent review approved by the company.
- Review AI output and privacy behavior before processing sensitive data. Do not send confidential or regulated information to an AI provider without approval.
- Confirm the company owns the rights to use all team photographs and any supplied content.
- Run `npm run build`, test all form states and verify production deployment/rollback.
=======
# Navirah

