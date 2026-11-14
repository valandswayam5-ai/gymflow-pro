-- GYMFLOW PRO DATABASE STARTER
create table if not exists gyms (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz default now()
);

create table if not exists members (
  id uuid primary key default gen_random_uuid(),
  gym_id uuid references gyms(id) on delete cascade,
  full_name text not null,
  phone text,
  email text,
  status text default 'active',
  created_at timestamptz default now()
);

create table if not exists memberships (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references members(id) on delete cascade,
  plan_name text not null,
  amount numeric default 0,
  start_date date,
  expiry_date date,
  payment_status text default 'pending'
);

create table if not exists payments (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references members(id) on delete cascade,
  amount numeric not null,
  status text default 'paid',
  due_date date,
  paid_at timestamptz
);

create table if not exists attendance (
  id uuid primary key default gen_random_uuid(),
  member_id uuid references members(id) on delete cascade,
  check_in timestamptz default now()
);
  
