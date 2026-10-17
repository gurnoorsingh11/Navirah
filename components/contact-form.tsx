"use client";
import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{text:string;error:boolean}|null>(null);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setBusy(true); setMessage(null);
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());
    payload.consent = form.get("consent") === "on" ? "true" : "false";
    try {
      const response = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload) });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.message || "We could not submit your message.");
      setMessage({text:result.message,error:false}); formElement.reset();
    } catch (err) { setMessage({text:err instanceof Error ? err.message : "Please try again.",error:true}); }
    finally { setBusy(false); }
  }
  return <form className="form" onSubmit={submit}>
    <div className="form-grid">
      <div className="field"><label htmlFor="name">Your name *</label><input id="name" name="name" required minLength={2} maxLength={100} autoComplete="name"/></div>
      <div className="field"><label htmlFor="email">Work email *</label><input id="email" name="email" type="email" required maxLength={254} autoComplete="email"/></div>
    </div>
    <div className="field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" maxLength={30} autoComplete="tel"/></div>
    <div className="field"><label htmlFor="message">How can we help? *</label><textarea id="message" name="message" required minLength={10} maxLength={2500} placeholder="Tell us about the problem, project or service you are looking for."/></div>
    <div className="field" aria-hidden="true" style={{position:"absolute",left:"-10000px",width:1,height:1,overflow:"hidden"}}><label htmlFor="website">Leave this blank</label><input id="website" name="website" tabIndex={-1} autoComplete="off"/></div>
    <label className="consent"><input type="checkbox" name="consent" required/><span>I agree that Navirah Innovations may use these details to respond to this enquiry. Do not submit confidential or sensitive personal information.</span></label>
    {message && <div role="status" className={`form-message ${message.error?"error":""}`}>{message.text}</div>}
    <button className="btn btn-primary" type="submit" disabled={busy}>{busy?"Sending…":"Send enquiry"} <span aria-hidden="true">↗</span></button>
  </form>;
}
