CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(254) NOT NULL,
  phone VARCHAR(30),
  message TEXT NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  status VARCHAR(24) NOT NULL DEFAULT 'new'
);
CREATE INDEX IF NOT EXISTS contact_submissions_created_idx ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS contact_submissions_email_idx ON contact_submissions(lower(email), created_at DESC);

CREATE TABLE IF NOT EXISTS project_scope_requests (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(254) NOT NULL,
  phone VARCHAR(30),
  industry VARCHAR(60) NOT NULL,
  project_type VARCHAR(80) NOT NULL,
  stage VARCHAR(40) NOT NULL,
  timeline VARCHAR(60) NOT NULL,
  budget VARCHAR(60) NOT NULL,
  goals TEXT NOT NULL,
  scope_json JSONB NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  status VARCHAR(24) NOT NULL DEFAULT 'new'
);
CREATE INDEX IF NOT EXISTS project_scope_created_idx ON project_scope_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS project_scope_email_idx ON project_scope_requests(lower(email), created_at DESC);
