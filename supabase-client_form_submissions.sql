-- Run this in your Supabase SQL Editor (agency CRM project)

CREATE TABLE client_form_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_site TEXT NOT NULL DEFAULT 'jaythatdrainguy.ca',
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
