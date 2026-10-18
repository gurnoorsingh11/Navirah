# Navirah

**Professional digital solutions, built with purpose.**

Navirah is a responsive, full-stack web platform built with Next.js and TypeScript. It presents the company's services and team, showcases capability areas, collects project enquiries, and helps potential clients define their project requirements through an interactive scope planner.

🌐 **Live Website:** https://navirah-nu.vercel.app/  
💻 **GitHub Repository:** https://github.com/gurnoorsingh11/Navirah

## Overview

The platform combines a professional corporate website with server-side form processing and project-scoping functionality. Its design uses a clean white background, deep navy typography, and muted blue accents to create a modern, accessible user experience.

## Features

- **Responsive Homepage** — A professional introduction to Navirah and its services.
- **Services Page** — An overview of service areas and deliverables.
- **Capability Portfolio** — Presents project and capability areas without inventing client case studies.
- **Team Directory** — Displays team information using editable content.
- **Project Planner** — A five-step wizard for collecting project requirements and generating a structured scope draft.
- **Contact Form** — Validates and processes project enquiries through a server-side API.
- **PostgreSQL Integration** — Supports persistent storage of enquiries and project scopes.
- **AI-Assisted Planning** — Uses OpenAI for structured project-scope drafts when configured, with a rules-based fallback.
- **Email Notifications** — Supports enquiry notifications through Resend when configured.
- **Server-Side Validation** — Uses Zod to validate incoming form data.

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **UI:** React, CSS
- **Validation:** Zod
- **Database:** PostgreSQL
- **AI Integration:** OpenAI API (optional)
- **Email Service:** Resend (optional)
- **Deployment:** Vercel

## Pages

| Route | Description |
|---|---|
| `/` | Homepage |
| `/services` | Services and deliverables |
| `/projects` | Capability areas and project placeholders |
| `/team` | Team directory |
| `/project-planner` | Interactive project-scoping wizard |
| `/contact` | Contact and enquiry form |

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm
- A PostgreSQL database for persistent form submissions

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gurnoorsingh11/Navirah.git
   cd Navirah
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create your local environment file:

   ```bash
   cp .env.example .env.local
   ```

   On Windows, you can also copy `.env.example` to `.env.local` using File Explorer.

4. Configure the required environment variables in `.env.local`.

5. Set up PostgreSQL and execute `db/schema.sql` in your database provider's SQL console.

6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000).

## API Endpoints

| Endpoint | Purpose |
|---|---|
| `POST /api/contact` | Validates and stores contact enquiries |
| `POST /api/project-scope` | Validates project requirements and stores project scopes |

The project planner can generate a rules-based draft without an OpenAI API key. Database persistence requires the appropriate PostgreSQL configuration. Email notifications require valid Resend credentials and sender configuration.

## Editable Content

Update `lib/content.ts` to manage services, team members, and capability or project entries without hard-coding them into page components.

## Environment Variables

Configure the variables listed in `.env.example` according to the integrations you enable. Keep real credentials in `.env.local` during local development and in your hosting provider's environment settings in production.

**Never commit `.env.local`, database passwords, or API keys to GitHub.**

## Production Checklist

Before using the platform with real client enquiries:

- Configure PostgreSQL and run the database schema.
- Verify the contact and project-planner flows in production.
- Configure and test email delivery and the sender domain.
- Add CAPTCHA, Turnstile, or equivalent anti-abuse protection.
- Publish an approved privacy policy and data-retention rules.
- Review AI data handling and obtain approval before processing sensitive information.
- Confirm permission to use team photographs and company content.
- Run `npm run build` and test error states, validation, and deployment rollback.

## Project Status

The live website is available at [navirah-nu.vercel.app](https://navirah-nu.vercel.app/). Database persistence, AI generation, and email notifications depend on their respective environment configuration and should be verified before being described as production-ready.

---

Developed for **Navirah Innovations**.
