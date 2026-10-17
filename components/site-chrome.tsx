"use client";
import Link from "next/link";
import { useState } from "react";
import { company } from "@/lib/content";

const nav = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Team", "/team"],
  ["Project planner", "/project-planner"],
  ["Contact", "/contact"]
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="nav-shell"><div className="wrap nav">
    <Link className="brand" href="/" aria-label="Navirah Innovations home" onClick={() => setOpen(false)}>
      <img src="https://www.navirahinnovations.com/team/Logo%20(2).png" alt="" width="46" height="46"/>
      <span><span className="brand-name">Navirah Innovations</span><span className="brand-sub" style={{display:"block"}}>Technology & engineering</span></span>
    </Link>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(v => !v)}>{open ? "Close" : "Menu"}</button>
    <nav id="primary-navigation" className={`nav-links ${open ? "open" : ""}`} aria-label="Primary navigation">
      {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
    </nav>
    <Link className="nav-cta" href="/contact">Discuss a project <span aria-hidden="true">↗</span></Link>
  </div></header>;
}

export function SiteFooter() {
  return <footer className="footer"><div className="wrap">
    <div className="footer-grid">
      <div><Link className="brand" href="/" style={{color:"white"}}><img src="https://www.navirahinnovations.com/team/Logo%20(2).png" alt="" width="44" height="44"/><span className="brand-name">Navirah Innovations</span></Link><p>{company.tagline} Software, design and engineering support for practical projects.</p></div>
      <div><h3>Explore</h3><div className="footer-links"><Link href="/services">Services</Link><Link href="/projects">Projects & capabilities</Link><Link href="/team">Our team</Link><Link href="/project-planner">Project planner</Link></div></div>
      <div><h3>Contact</h3><div className="footer-links"><a href={`mailto:${company.email}`}>{company.email}</a><a href={`tel:${company.phoneHref}`}>{company.phone}</a><a href={company.centreOfExcellence} target="_blank" rel="noreferrer">Centre of Excellence ↗</a></div></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Navirah Innovations. Content subject to company approval.</span><span>{company.address}</span></div>
  </div></footer>;
}
