/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `confirmed` (boolean)
      - `confirmation_token` (text)
  
  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  confirmed boolean DEFAULT false,
  confirmation_token text
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert into waitlist"
  ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can read own waitlist entry"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);