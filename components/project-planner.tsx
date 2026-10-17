"use client";
import { useState, type FormEvent } from "react";

const steps = [
  { title:"Your industry", subtitle:"Help us understand the environment the project needs to serve.", key:"industry", choices:[["Manufacturing","Manufacturing","Operations, production and automation"],["Education","Education","Learning, training and campus systems"],["Healthcare","Healthcare","Clinical or health-service workflows"],["Finance","Finance","Financial services and analytics"],["Logistics","Logistics","Supply chains, fleet and movement"],["Energy","Energy","Power, monitoring and sustainability"],["Other","Other","Another sector or cross-industry need"]] },
  { title:"Project type", subtitle:"Choose the main outcome you want to build.", key:"projectType", choices:[["Website or web application","Website or web application","Websites, portals, dashboards and platforms"],["Mobile application","Mobile application","A mobile-first product"],["AI or data solution","AI or data solution","A model, data workflow or AI-enabled tool"],["Automation or IoT","Automation or IoT","Connected devices and operational automation"],["Drone or aerospace","Drone or aerospace","Aerial systems, control or mapping"],["Energy monitoring","Energy monitoring","Monitoring, reports and energy data"],["Custom software","Custom software","A tailored software product"]] },
  { title:"Where are you today?", subtitle:"This helps shape a realistic first phase.", key:"stage", choices:[["Idea","Idea","Early concept, needs discovery"],["Planning","Planning","Requirements are taking shape"],["Prototype","Prototype","Ready to test a working version"],["Existing system","Existing system","Improve or integrate an existing product"]] },
  { title:"Timing and budget", subtitle:"These are planning inputs, not a quote or commitment.", key:"timeline", choices:[["2 to 4 weeks","2 to 4 weeks","A focused first milestone"],["1 to 2 months","1 to 2 months","A small initial release"],["3 months or more","3 months or more","A larger or phased effort"],["Flexible","Flexible","Timeline to be discussed"]], secondKey:"budget", secondTitle:"Indicative budget", secondChoices:[["Under ₹50,000","Under ₹50,000","Small scope or discovery"],["₹50,000 to ₹2 lakh","₹50,000 to ₹2 lakh","Defined first release"],["₹2 to ₹5 lakh","₹2 to ₹5 lakh","Larger initial scope"],["Above ₹5 lakh","Above ₹5 lakh","Multi-phase or complex scope"],["Not decided","Not decided","Discuss options"]] },
  { title:"Tell us about the goal", subtitle:"A clear problem statement makes the first scope more useful.", key:"goals", choices:[] }
];
type FormData = { name:string; email:string; phone:string; industry:string; projectType:string; stage:string; timeline:string; budget:string; goals:string; consent:boolean };
const initial:FormData = {name:"",email:"",phone:"",industry:"",projectType:"",stage:"",timeline:"",budget:"Not decided",goals:"",consent:false};

export function ProjectPlanner() {
  const [step,setStep] = useState(0);
  const [data,setData] = useState<FormData>(initial);
  const [busy,setBusy] = useState(false);
  const [error,setError] = useState("");
  const [plan,setPlan] = useState<any>(null);
  const update = (key:string,value:string|boolean) => setData(d=>({...d,[key]:value}));
  const current = steps[step];
  const canContinue = step===0?!!data.industry:step===1?!!data.projectType:step===2?!!data.stage:step===3?!!data.timeline&&!!data.budget:!!data.name.trim()&&data.email.includes("@")&&data.goals.trim().length>=20&&data.consent;
  async function submit(e:FormEvent) {
    e.preventDefault(); setBusy(true);setError("");setPlan(null);
    try {
      const response = await fetch("/api/project-scope",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
      const result = await response.json();
      if(!response.ok||!result.ok) throw new Error(result.message||"The planning request could not be completed.");
      setPlan(result.plan);
    } catch(err) {setError(err instanceof Error?err.message:"Please try again.");}
    finally {setBusy(false);}
  }
  function select(key:string,value:string){update(key,value);setError("");}
  return <div className="planner-shell">
    <aside className="planner-rail"><h3>Project brief</h3><div className="planner-progress"><span style={{width:`${plan?100:((step+1)/steps.length)*100}%`}}/></div><div className="planner-steps">{steps.map((s,i)=><div key={s.key} className={`planner-step ${i===step&&!plan?"active":""}`}><span className="circle">{i<step||plan?"✓":i+1}</span><span>{s.title}</span></div>)}</div><p style={{fontSize:".82rem",marginTop:20}}>Five short steps. Your answers are used to prepare a first-pass scope for discussion.</p></aside>
    <div className="planner-content">
      {!plan ? <form onSubmit={submit}>
        <h2>{current.title}</h2><p>{current.subtitle}</p>
        {step<3 && <div className="choice-grid">{current.choices.map(([value,label,desc])=><button type="button" key={value} className="choice" aria-pressed={data[current.key as keyof FormData]===value} onClick={()=>select(current.key,value)}><strong>{label}</strong><span>{desc}</span></button>)}</div>}
        {step===3 && <><div className="field"><label>Preferred timeline</label><div className="choice-grid">{current.choices.map(([value,label,desc])=><button type="button" key={value} className="choice" aria-pressed={data.timeline===value} onClick={()=>select("timeline",value)}><strong>{label}</strong><span>{desc}</span></button>)}</div></div><div className="field" style={{marginTop:24}}><label>Indicative budget</label><div className="choice-grid">{current.secondChoices?.map(([value,label,desc])=><button type="button" key={value} className="choice" aria-pressed={data.budget===value} onClick={()=>select("budget",value)}><strong>{label}</strong><span>{desc}</span></button>)}</div></div></>}
        {step===4 && <div className="form">
          <div className="form-grid"><div className="field"><label htmlFor="scope-name">Your name *</label><input id="scope-name" value={data.name} onChange={e=>update("name",e.target.value)} minLength={2} maxLength={100} required/></div><div className="field"><label htmlFor="scope-email">Email *</label><input id="scope-email" type="email" value={data.email} onChange={e=>update("email",e.target.value)} maxLength={254} required/></div></div>
          <div className="field"><label htmlFor="scope-phone">Phone (optional)</label><input id="scope-phone" type="tel" value={data.phone} onChange={e=>update("phone",e.target.value)} maxLength={30}/></div>
          <div className="field"><label htmlFor="scope-goals">What problem should this project solve? *</label><textarea id="scope-goals" value={data.goals} onChange={e=>update("goals",e.target.value)} minLength={20} maxLength={1800} required placeholder="Describe the intended users, current challenge and what a successful result would look like."/><span style={{fontSize:".78rem",color:"var(--muted)"}}>{data.goals.length}/1800 characters. Avoid confidential or sensitive information.</span></div>
          <label className="consent"><input type="checkbox" checked={data.consent} onChange={e=>update("consent",e.target.checked)} required/><span>I agree that Navirah Innovations may use these details to respond to this project enquiry.</span></label>
        </div>}
        {error&&<div role="alert" className="form-message error" style={{marginTop:18}}>{error}</div>}
        <div className="planner-nav">{step>0?<button type="button" className="btn btn-secondary" onClick={()=>{setStep(s=>s-1);setError("")}}>Back</button>:<span/>}{step<4?<button type="button" className="btn btn-primary" disabled={!canContinue} onClick={()=>{setStep(s=>s+1);setError("")}}>Continue <span aria-hidden="true">→</span></button>:<button className="btn btn-primary" type="submit" disabled={!canContinue||busy}>{busy?"Preparing scope…":"Prepare project scope"} <span aria-hidden="true">↗</span></button>}</div>
      </form>:<div>
        <div className="eyebrow">Project scope draft</div><h2 style={{marginTop:12}}>{plan.title}</h2><p style={{marginTop:14}}>{plan.summary}</p>
        <div className="scope-result">
          <p><strong>Recommended services</strong></p><ul>{plan.recommendedServices.map((x:string)=><li key={x}>{x}</li>)}</ul>
          <h3>Proposed deliverables</h3><ul>{plan.deliverables.map((x:string)=><li key={x}>{x}</li>)}</ul>
          <h3>Suggested roles</h3><ul>{plan.suggestedTeam.map((x:string)=><li key={x}>{x}</li>)}</ul>
          <h3>Indicative timeline</h3><p>{plan.indicativeTimeline}</p>
          <h3>Delivery phases</h3><ul>{plan.phases.map((x:any)=><li key={x.title}><strong>{x.title}:</strong> {x.description}</li>)}</ul>
          <h3>Risks to resolve</h3><ul>{plan.risks.map((x:string)=><li key={x}>{x}</li>)}</ul>
          <h3>Assumptions</h3><ul>{plan.assumptions.map((x:string)=><li key={x}>{x}</li>)}</ul>
          <p className="method">{plan.method}</p>
        </div>
        <div className="planner-nav"><button type="button" className="btn btn-secondary" onClick={()=>setPlan(null)}>Edit answers</button><button type="button" className="btn btn-primary" onClick={()=>window.print()}>Print / save PDF</button></div>
        <p style={{fontSize:".82rem",marginTop:16}}>Your request is saved only when the server confirms submission. This scope is not a binding quote or delivery commitment.</p>
      </div>}
    </div>
  </div>;
}
