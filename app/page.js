"use client";
import { useState } from "react";

const stats = [
  ["1,248", "Total Members"],
  ["1,104", "Active Members"],
  ["86", "Today’s Check-ins"],
  ["₹2.48L", "Monthly Revenue"]
];

const members = [
  ["Rahul Shah", "Premium", "Active", "18 Dec 2026"],
  ["Priya Patel", "Standard", "Payment Due", "16 Nov 2026"],
  ["Aman Mehta", "Annual", "Active", "02 Jan 2027"],
  ["Neha Joshi", "Premium", "Expiring Soon", "20 Nov 2026"]
];

export default function Home() {
  const [tab, setTab] = useState("Overview");
  const [notice, setNotice] = useState("");

  const show = (message) => {
    setNotice(message);
    setTimeout(() => setNotice(""), 2600);
  };

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand"><span>GYM</span>FLOW <b>PRO</b></div>
        <p className="workspace">FITNESS MANAGEMENT</p>
        {["Overview","Members","Attendance","Payments","Memberships","Trainers","Services","Classes","Expenses","Inventory","Reports","Automations","Settings"].map(item => (
          <button key={item} onClick={() => setTab(item)} className={tab===item ? "nav active":"nav"}>{item}</button>
        ))}
        <div className="sidebarBottom">
          <button className="outline" onClick={() => show("Member portal demo opened")}>Member Portal</button>
          <small>v1.0 • GYMFLOW PRO</small>
        </div>
      </aside>

      <section className="content">
        <header>
          <div>
            <p className="eyebrow">SATURDAY • 14 NOVEMBER 2026</p>
            <h1>{tab}</h1>
          </div>
          <div className="headerActions">
            <button className="outline" onClick={() => show("QR check-in module ready for backend connection")}>⌁ QR Check-in</button>
            <button className="primary" onClick={() => show("Add Member action — connect Supabase in Phase 2")}>+ Add Member</button>
          </div>
        </header>

        {notice && <div className="toast">{notice}</div>}

        <div className="stats">
          {stats.map(([value,label]) => <div className="card stat" key={label}><strong>{value}</strong><span>{label}</span><em>LIVE DEMO</em></div>)}
        </div>

        <div className="grid">
          <div className="card wide">
            <div className="sectionTitle"><div><p className="eyebrow">MEMBER MANAGEMENT</p><h2>Recent Members</h2></div><button className="textBtn" onClick={() => setTab("Members")}>View all →</button></div>
            <div className="table">
              <div className="tr head"><span>MEMBER</span><span>PLAN</span><span>STATUS</span><span>EXPIRY</span></div>
              {members.map(row => <div className="tr" key={row[0]}><strong>{row[0]}</strong><span>{row[1]}</span><span className={"pill "+row[2].replaceAll(" ","").toLowerCase()}>{row[2]}</span><span>{row[3]}</span></div>)}
            </div>
          </div>

          <div className="card">
            <p className="eyebrow">AUTOMATION CENTER</p>
            <h2>Payment Reminders</h2>
            <div className="automation">
              <div><b>12</b><span>Due today</span></div>
              <div><b>7</b><span>Overdue</span></div>
              <div><b>24</b><span>Upcoming</span></div>
            </div>
            <button className="primary full" onClick={() => show("Reminder campaign queued (demo mode)")}>Send Reminder Campaign</button>
            <p className="muted">WhatsApp + Email automation will be connected with official services in Phase 3.</p>
          </div>
        </div>

        <div className="grid bottomGrid">
          <div className="card">
            <p className="eyebrow">TODAY</p><h2>Attendance</h2>
            <div className="bigNumber">86 <span>check-ins</span></div>
            <div className="progress"><i style={{width:"72%"}} /></div>
            <p className="muted">72% of expected daily attendance</p>
          </div>
          <div className="card">
            <p className="eyebrow">BILLING</p><h2>Revenue Snapshot</h2>
            <div className="bigNumber">₹2.48L <span>this month</span></div>
            <button className="outline full" onClick={() => setTab("Reports")}>Open Reports</button>
          </div>
          <div className="card">
            <p className="eyebrow">QUICK ACTIONS</p><h2>Gym Operations</h2>
            <div className="quick">
              <button onClick={() => show("Invoice generation demo")}>Generate Invoice</button>
              <button onClick={() => show("Membership renewal demo")}>Renew Membership</button>
              <button onClick={() => show("Class booking demo")}>Manage Classes</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
