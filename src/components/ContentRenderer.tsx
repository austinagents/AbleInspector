import Image from "next/image";
import Link from "next/link";
import cleanContent from "@/content/clean-page-content.json";
import type { PageConfig } from "@/content/page-config";

const shortLead = new Set(["Starting at $125","Starting at $150","Roof, Electrical, HVAC, and Plumbing","Real People, Real Savings","Prices vary based on location, age, and construction type"]);
const headingPattern = /^(How it works|What is a Phase 1 ESA\?|What is infrared \(IR\) technology\?|Why Insist on an Inspector with an Infrared Camera\?|Facts & Figures|Interesting Facts About The 4-Point Inspection|Some examples include:|Here is a brief summary of my experience:|Mold inspections|Mold Testing|EXPERIENCE|REPORTS|QUICK TURNAROUND TIME|DIGITAL PICTURES|HIGHEST INDUSTRY STANDARDS|ONE STOP SOLUTION)$/i;
function isHeading(line:string, headings:string[]){return headings.includes(line)||headingPattern.test(line)}
function normalizeLines(lines:string[], path:string){
  const source = lines.map(line => line.trim()).filter(Boolean);
  const out:string[]=[];
  for(let i=0;i<source.length;i++){
    let line=source[i];
    if(line==='“'||line==='”') continue;
    if(line==='.') { if(out.length && !/[.!?]$/.test(out[out.length-1])) out[out.length-1] += '.'; continue; }
    if(i+2<source.length && /(?:call|contact) (?:us )?at$/i.test(line) && /^\(?239\)?[\s-]*354-3540$/.test(source[i+1])){
      out.push(`${line} (239) 354-3540 ${source[i+2]}`); i+=2; continue;
    }
    if(line==='here' && out.length){out[out.length-1]=`${out[out.length-1]} here.`; continue;}
    if(/^(and|but|or|when)\b/i.test(line) && /^[a-z]/.test(line) && out.length){out[out.length-1]=`${out[out.length-1]} ${line}`; continue;}
    if(/^[-–—]\s+/.test(line) && out.length){out[out.length-1]=`${out[out.length-1]} ${line}`; continue;}
    // Squarespace split this Mold-page heading across four DOM text nodes.
    if(path==='/mold-naples-fl' && i===0 && source.slice(0,4).join(' ')==='This is intended to provide a brief overview of the differences between Mold and Mold Testing .'){
      out.push('This is intended to provide a brief overview of the differences between Mold Inspections and Mold Testing.'); i=3; continue;
    }
    out.push(line.replace(/^“|”$/g,''));
  }
  return out.filter(Boolean);
}

function Testimonials({lines}:{lines:string[]}){
  const reviews:{quote:string;author?:string}[]=[];
  let pending:string[]=[];
  for(const raw of lines.slice(4)){
    const line=raw.trim();
    if(line==='“'||line==='”') continue;
    if(line.startsWith('— ')){ if(pending.length){reviews.push({quote:pending.join(' '),author:line.replace(/^— /,'')});pending=[];} continue; }
    if(line.startsWith('“') || pending.length){ pending.push(line.replace(/^“|”$/g,'')); if(line.endsWith('”')){reviews.push({quote:pending.join(' ').replace(/”$/,'' )});pending=[];} }
  }
  if(pending.length) reviews.push({quote:pending.join(' ')});
  return <div className="testimonials-layout">
    <header className="testimonials-intro"><span>Client experiences</span><h2>Real people.<br/>Real savings.</h2><p>Thank you for choosing Able Home Inspections. These comments are preserved from the existing Able site.</p></header>
    <div className="testimonials-grid">{reviews.slice(0,12).map((r,i)=><blockquote key={i}><p>“{r.quote}”</p>{r.author&&<cite>{r.author}</cite>}</blockquote>)}</div>
  </div>
}

export default function ContentRenderer({path,config}:{path:string;config:PageConfig}){
  const data=cleanContent.find(item=>item.path===path); if(!data)return null;
  const lines=normalizeLines(data.lines,path);
  if(path==='/testimonies-naples-fl') return <Testimonials lines={data.lines}/>;
  if(path==='/contact-us') return <div className="contact-layout"><div><span>Schedule + quotes</span><h2>Talk with Able.</h2><p>{lines[0]}</p><p>{lines[1]}</p></div><div className="contact-methods"><a href="tel:+12393543540"><small>Call</small><strong>(239) 354-3540</strong><i>↗</i></a><a href="mailto:Schedule@ableinspector.com"><small>Email</small><strong>Schedule@ableinspector.com</strong><i>↗</i></a></div></div>;

  return <div className="content-renderer">
    <div className="content-intro"><span>{config.group==='company'?'About Able':'About this service'}</span>{lines[0]&&<p>{lines[0]}</p>}</div>
    {config.gallery?.length?<div className={`content-gallery content-gallery-${Math.min(config.gallery.length,3)}`}>{config.gallery.map((src,i)=><div className="content-gallery-image" key={src}><Image src={src} alt={`${config.title} detail ${i+1}`} fill sizes="(max-width: 900px) 100vw, 40vw"/></div>)}</div>:null}
    <div className="content-flow">{lines.slice(1).map((line,index,all)=>{
      if(/^\d+\.$/.test(line) && all[index+1]) return <div className="content-fact" key={index}><span>{line.replace('.','').padStart(2,'0')}</span><p>{all[index+1]}</p></div>;
      if(index>0 && /^\d+\.$/.test(all[index-1])) return null;
      if(isHeading(line,data.headings))return <h2 key={index}>{line}</h2>;
      if(shortLead.has(line))return <p className="content-lead" key={index}>{line}</p>;
      if(line.startsWith('“')||line.startsWith('— '))return <blockquote key={index}>{line.replace(/^“|”$/g,'')}</blockquote>;
      if(/^\(?239\)?[\s-]*354-3540$/.test(line))return <a className="content-phone" href="tel:+12393543540" key={index}>{line} ↗</a>;
      if(line==='Daniel Lunsford'||line==='President'||line==='Sincerely,')return <p className="content-signoff" key={index}>{line}</p>;
      const phone=line.includes('(239) 354-3540');
      if(phone){const [a,b]=line.split('(239) 354-3540');return <p key={index}>{a}<a className="inline-phone" href="tel:+12393543540">(239) 354-3540</a>{b}</p>}
      return <p key={index}>{line}</p>;
    })}</div>
    {path==='/qualifications-naples-fl'?<div className="qualifications-link"><span>Need an inspection?</span><Link href="/contact-us">Schedule with Daniel ↗</Link></div>:null}
  </div>
}
