/* Schutz gegen Einbetten in fremde Seiten (Clickjacking) */
if(window.top!==window.self){try{window.top.location.replace(window.location.href);}catch(e){document.documentElement.style.display="none";}}

/* ===== Datenmodell nach APO g. D. Pol. vom 13.09.2024 ===== */
const SECTIONS = {
  gs: { tab:"Grundstudium", title:"Grundstudium (1. Studienjahr)",
    intro:"Neun Aufsichtsarbeiten zu je 60 Minuten in den Studienf\u00e4chern nach \u00a7 11 I (\u00a7 13 IV). Jede Arbeit z\u00e4hlt in der Vornote einfach.",
    groups:[
      {name:"Fachgruppe Polizeiwissenschaften", items:[
        {id:"gs1",l:"Einsatzlehre",s:"Aufsichtsarbeit 60 min",aa:1,vw:1},
        {id:"gs2",l:"Kriminalistik",s:"Aufsichtsarbeit 60 min",aa:1,vw:1},
        {id:"gs3",l:"Verkehrsunfallaufnahme",s:"Aufsichtsarbeit 60 min",aa:1,vw:1}]},
      {name:"Fachgruppe Rechtswissenschaften", items:[
        {id:"gs4",l:"Staats- und Verfassungsrecht",s:"Aufsichtsarbeit 60 min",aa:1,vw:1},
        {id:"gs5",l:"Polizeirecht",s:"Aufsichtsarbeit 60 min",aa:1,vw:1},
        {id:"gs6",l:"Strafrecht",s:"Aufsichtsarbeit 60 min",aa:1,vw:1},
        {id:"gs7",l:"Strafprozessrecht",s:"Aufsichtsarbeit 60 min",aa:1,vw:1},
        {id:"gs8",l:"Verkehrsrecht",s:"Aufsichtsarbeit 60 min",aa:1,vw:1},
        {id:"gs9",l:"\u00d6ffentliches Dienstrecht",s:"Aufsichtsarbeit 60 min",aa:1,vw:1}]}
    ]},
  hs1: { tab:"Hauptstudium I", title:"Hauptstudium I (2. Studienjahr)",
    intro:"Je Fachgruppe eine Aufsichtsarbeit zu 120 Minuten und drei weitere Leistungsnachweise (\u00a7 13 VI). In der Vornote z\u00e4hlen die beiden Aufsichtsarbeiten zweifach, die Leistungsnachweise einfach. Mit Erreichen des Studienziels besteht die Berechtigung zur Diplomarbeit (\u00a7 21 I).",
    groups:[
      {name:"Aufsichtsarbeiten der Fachgruppen", items:[
        {id:"h11",l:"Aufsichtsarbeit Polizeiwissenschaften",s:"120 min \u00b7 Vornote \u00d72",aa:1,vw:2},
        {id:"h12",l:"Aufsichtsarbeit Rechtswissenschaften",s:"120 min \u00b7 Vornote \u00d72",aa:1,vw:2}]},
      {name:"Weitere Leistungsnachweise", items:[
        {id:"h13",l:"Hausarbeit",s:"max. 8 Seiten DIN A4 \u00b7 Vornote \u00d71",aa:0,vw:1},
        {id:"h14",l:"Aufsichtsarbeit \u201eSeminar\u201c",s:"60 min \u00b7 Vornote \u00d71",aa:1,vw:1},
        {id:"h15",l:"Aufsichtsarbeit \u201eberufsbezogene GW\u201c",s:"90 min \u00b7 Vornote \u00d71",aa:1,vw:1}]}
    ]},
  hs2: { tab:"Hauptstudium II", title:"Hauptstudium II (3. Studienjahr)",
    intro:"Je Fachgruppe eine Aufsichtsarbeit zu 180 Minuten und drei weitere Leistungsnachweise. In der Vornote z\u00e4hlen die beiden Aufsichtsarbeiten dreifach, die Leistungsnachweise einfach. Die Diplomarbeit wird zu Beginn dieses Studienjahres ausgegeben.",
    groups:[
      {name:"Aufsichtsarbeiten der Fachgruppen", items:[
        {id:"h21",l:"Aufsichtsarbeit Polizeiwissenschaften",s:"180 min \u00b7 Vornote \u00d73",aa:1,vw:3},
        {id:"h22",l:"Aufsichtsarbeit Rechtswissenschaften",s:"180 min \u00b7 Vornote \u00d73",aa:1,vw:3}]},
      {name:"Weitere Leistungsnachweise", items:[
        {id:"h23",l:"Aufsichtsarbeit \u201eSeminar\u201c",s:"60 min \u00b7 Vornote \u00d71",aa:1,vw:1},
        {id:"h24",l:"Praktische Leistungsabnahme",s:"Vornote \u00d71",aa:0,vw:1},
        {id:"h25",l:"Aufsichtsarbeit \u201eberufsbezogene GW\u201c",s:"90 min \u00b7 Vornote \u00d71",aa:1,vw:1}]}
    ]},
  lp: { tab:"Laufbahnpr\u00fcfung", title:"Laufbahnpr\u00fcfung (\u00a7\u00a7 20 bis 29)",
    intro:"Teil 1 Diplomarbeit (3 Monate, max. 30 Seiten), Teil 2 drei schriftliche Pr\u00fcfungsarbeiten zu je vier Stunden, Teil 3 m\u00fcndliche Pr\u00fcfung (25 bis 30 Minuten) mit je einer Note pro Fachgruppe.",
    groups:[
      {name:"Teil 1: Diplomarbeit (\u00a7 21)", items:[
        {id:"da",l:"Diplomarbeit",s:"10 % der Abschlussnote"}]},
      {name:"Teil 2: Schriftliche Pr\u00fcfung (\u00a7\u00a7 22 bis 25)", items:[
        {id:"x1",l:"Pr\u00fcfungsarbeit Polizeiwissenschaften",s:"4 Stunden"},
        {id:"x2",l:"Pr\u00fcfungsarbeit Rechtswissenschaften",s:"4 Stunden"},
        {id:"x3",l:"Pr\u00fcfungsarbeit fachgruppen\u00fcbergreifend",s:"4 Stunden"}]},
      {name:"Teil 3: M\u00fcndliche Pr\u00fcfung (\u00a7\u00a7 26, 27)", items:[
        {id:"m1",l:"Fachgruppe Polizeiwissenschaften",s:"Pr\u00fcfungsnote"},
        {id:"m2",l:"Fachgruppe Rechtswissenschaften",s:"Pr\u00fcfungsnote"}]}
    ]}
};
const W={vn:20,da:10,sp:40,mp:30};               /* \u00a7 29 I */
const GRADES=[
  {g:1,w:"sehr gut",min:13,max:15,amin:12.5},
  {g:2,w:"gut",min:10,max:12,amin:9.5},
  {g:3,w:"befriedigend",min:7,max:9,amin:6.5},
  {g:4,w:"ausreichend",min:4,max:6,amin:3.5},
  {g:5,w:"mangelhaft",min:1,max:3,amin:0.5},
  {g:6,w:"ungen\u00fcgend",min:0,max:0,amin:0}];
const DEMO={gs1:9,gs2:11,gs3:8,gs4:7,gs5:10,gs6:9,gs7:8,gs8:12,gs9:10,h11:9,h12:8,h13:11,h14:10,h15:12,h21:10,h22:7,h23:11,h24:13,h25:9,da:11};
const KEY="notenrechner-gd-pol-apo2024";

let S={v:{},demo:false,tab:"gs",target:9.5,name:"",jg:""};
/* Gespeicherten Stand nur nach Pruefung uebernehmen (Whitelist, Typen, Wertebereiche) */
const TABKEYS=["gs","hs1","hs2","lp","ab","ov"];
const cleanText=x=>typeof x==="string"?x.replace(/[\u0000-\u001f\u007f\u202a-\u202e\u2066-\u2069]/g,"").slice(0,60):"";
function loadState(raw){
  const d=JSON.parse(raw),o={v:{},demo:false,tab:"gs",target:9.5,name:"",jg:""};
  if(!d||typeof d!=="object"||Array.isArray(d)) throw new Error("state");
  const ids=new Set(["gs","hs1","hs2","lp"].flatMap(s=>SECTIONS[s].groups.flatMap(g=>g.items.map(i=>i.id))));
  if(d.v&&typeof d.v==="object"&&!Array.isArray(d.v)) for(const k of Object.keys(d.v)){const n=d.v[k];if(ids.has(k)&&Number.isInteger(n)&&n>=0&&n<=15)o.v[k]=n;}
  o.demo=d.demo===true; if(d.tab==="ng")o.tab="ov"; else if(TABKEYS.includes(d.tab))o.tab=d.tab;
  const t=Number(d.target); if(Number.isFinite(t)&&t>=0&&t<=15)o.target=t;
  o.name=cleanText(d.name); o.jg=cleanText(d.jg); if(typeof d.helpOpen==="boolean")o.helpOpen=d.helpOpen; if(typeof d.hintsOpen==="boolean")o.hintsOpen=d.hintsOpen;
  return o;
}
/* Datenschutz durch Voreinstellung: gespeichert wird nur, wenn die Person es einschaltet.
   Wer schon Daten gespeichert hat, behaelt die Einstellung "speichern". */
let PERSIST=false;
try{const r=localStorage.getItem(KEY);if(r){S=loadState(r);PERSIST=true;}else{S.v={...DEMO};S.demo=true;}}catch(e){S={v:{...DEMO},demo:true,tab:"gs",target:9.5,name:"",jg:""};}
function save(){if(!PERSIST)return;try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
function setPersist(on){PERSIST=!!on;if(PERSIST){save();}else{try{localStorage.removeItem(KEY);}catch(e){}}updatePersist();}
async function wipeDevice(){
  try{localStorage.removeItem(KEY);}catch(e){}
  try{if(window.caches){const ks=await caches.keys();await Promise.all(ks.filter(k=>k.startsWith("notenrechner-")).map(k=>caches.delete(k)));}}catch(e){}
  try{if(navigator.serviceWorker){const rs=await navigator.serviceWorker.getRegistrations();await Promise.all(rs.map(r=>r.unregister()));}}catch(e){}
  PERSIST=false;S={v:{...DEMO},demo:true,tab:"gs",target:9.5,name:"",jg:""};build();
  const m=document.getElementById("persist-msg");if(m)m.textContent="Alle Daten des Notenrechners wurden von diesem Ger\u00e4t gel\u00f6scht. Bis du das H\u00e4kchen wieder setzt, wird nichts gespeichert.";
}
function updatePersist(){
  const cb=document.getElementById("persist"),st=document.getElementById("persist-state");
  if(cb)cb.checked=PERSIST;
  if(st){st.textContent=PERSIST?"Speichern ist an: Deine Eingaben liegen im Browser dieses Ger\u00e4ts.":"Speichern ist aus: Deine Eingaben sind beim Schlie\u00dfen der Seite weg.";st.className="pstate "+(PERSIST?"on":"off");}
}

/* \u00a7 28 II: zwei Dezimalstellen, dritte Stelle kaufm\u00e4nnisch gerundet */
const r2=x=>x==null?null:Math.round((x+1e-9)*100)/100;
const fmt=x=>x==null||isNaN(x)?"--":r2(x).toFixed(2).replace(".",",");
const fmtP=x=>String(x).padStart(2,"0");
const ge=(a,b)=>a+1e-9>=b;
function gradeOfPoints(p){return GRADES.find(g=>p>=g.min&&p<=g.max)||GRADES[5];}
function gradeOfAvg(a){return GRADES.find(g=>ge(a,g.amin))||GRADES[5];}
function val(id){const v=S.v[id];return (v===undefined||v===null||v==="")?null:Number(v);}
function items(sec){return SECTIONS[sec].groups.flatMap(g=>g.items);}
function mean(arr){return arr.length?r2(arr.reduce((a,b)=>a+b,0)/arr.length):null;}

/* ===== Studienziele ===== */
function evalGS(){
  const its=items("gs"),f=its.map(i=>val(i.id)).filter(v=>v!==null),avg=mean(f),n=f.length;
  if(n<9) return {avg,n,of:9,st:"idle",msg:`${n} von 9 Aufsichtsarbeiten eingetragen`,sub:"Die Bewertung des Studienziels erscheint, sobald alle Arbeiten eingetragen sind."};
  const z=f.filter(v=>v===0).length,m=f.filter(v=>v>=1&&v<=3).length;
  if(z===0&&m===0) return {avg,n,of:9,st:"ok",msg:"Studienziel Grundstudium erreicht",sub:"Alle Aufsichtsarbeiten mindestens \u201eausreichend\u201c (\u00a7 13 IV S. 2). Au\u00dferdem n\u00f6tig: Tastaturschulung, Fahrerlaubnis B, Kontroll\u00fcbungen Pistole und MP, Sicherheits- und Gefahrentraining, Best\u00e4tigung im Bef\u00e4higungsbericht (\u00a7 13 V, VIII)."};
  if((z===1&&m===0)||(z===0&&m<=2)) return {avg,n,of:9,st:"warn",msg:"Wiederholung der Arbeiten mit \u201emangelhaft\u201c oder schlechter",sub:"\u00a7 13 IV S. 3: Gelegenheit zur Wiederholung in angemessener Frist. Werden dann alle Arbeiten mindestens \u201eausreichend\u201c, ist das Studienziel erreicht."};
  return {avg,n,of:9,st:"bad",msg:"Studienziel Grundstudium nicht erreicht",sub:`\u00a7 13 IV S. 5, Zweitkorrektur der Arbeiten ab \u201emangelhaft\u201c. ${ge(avg,4)?"Jahresdurchschnitt mindestens 4,00: einmalige Wiederholung des Studienjahres kann zugelassen werden (\u00a7 15 I).":"Jahresdurchschnitt unter 4,00: Wiederholung nur als begr\u00fcndete Ausnahme, sonst endet das Beamtenverh\u00e4ltnis (\u00a7 15 I, II)."}`};
}
function evalHS(sec){
  const its=items(sec),vs=its.map(i=>({i,v:val(i.id)})),f=vs.filter(x=>x.v!==null).map(x=>x.v);
  const avg=mean(f),n=f.length,name=sec==="hs1"?"2. Studienjahres":"3. Studienjahres";
  if(n<5) return {avg,n,of:5,st:"idle",msg:`${n} von 5 Leistungsnachweisen eingetragen`,sub:"Die Bewertung erscheint, sobald beide Aufsichtsarbeiten und alle drei weiteren Leistungsnachweise eingetragen sind."};
  const z=vs.filter(x=>x.v===0),m=f.filter(v=>v>=1&&v<=3).length;
  const extra=sec==="hs1"?" Damit besteht die Berechtigung zur Diplomarbeit (\u00a7 21 I).":" F\u00fcr das Studienziel des Hauptstudiums zus\u00e4tzlich n\u00f6tig: physisch-technische Ausbildung und Kontroll\u00fcbungen mit Zeitbeschr\u00e4nkung sp\u00e4testens zwei Monate vor Ende (\u00a7 13 VII).";
  if(z.length===0&&m<=2&&ge(avg,4)) return {avg,n,of:5,st:"ok",msg:`Studienziel des ${name} erreicht`,sub:`H\u00f6chstens zwei \u201emangelhaft\u201c, kein \u201eungen\u00fcgend\u201c, Jahresdurchschnitt mindestens 4,00 (\u00a7 13 VI S. 3).${extra}`};
  if(z.length===1&&z[0].i.aa&&m===0) return {avg,n,of:5,st:"warn",msg:"Wiederholung der Aufsichtsarbeit mit \u201eungen\u00fcgend\u201c",sub:"\u00a7 13 VI S. 9: Nur eine schriftliche Aufsichtsarbeit \u201eungen\u00fcgend\u201c, alle \u00fcbrigen mindestens \u201eausreichend\u201c. Wird die Wiederholung mindestens \u201eausreichend\u201c, ist das Studienziel erreicht."};
  const why=[];if(z.length)why.push("ein Leistungsnachweis \u201eungen\u00fcgend\u201c");if(m>2)why.push("mehr als zwei \u201emangelhaft\u201c");if(!ge(avg,4))why.push("Jahresdurchschnitt unter 4,00");
  return {avg,n,of:5,st:"bad",msg:`Studienziel des ${name} nicht erreicht`,sub:`Grund: ${why.join(", ")}. Es folgt eine Zweitkorrektur (\u00a7 13 VI S. 4, 5). ${ge(avg,4)?"Jahresdurchschnitt mindestens 4,00: einmalige Wiederholung des Studienjahres m\u00f6glich, sofern noch keines wiederholt wurde (\u00a7 15).":"Jahresdurchschnitt unter 4,00: Wiederholung nur als begr\u00fcndete Ausnahme, sonst endet das Beamtenverh\u00e4ltnis (\u00a7 15)."}`};
}
function evalLP(){
  const da=val("da"),xs=["x1","x2","x3"].map(val),ms=["m1","m2"].map(val);
  const xf=xs.filter(v=>v!==null),mf=ms.filter(v=>v!==null);
  const sp=xf.length===3?mean(xf):null, mp=mf.length===2?mean(mf):null;
  const daOk=da==null?null:da>=4;
  const spOk=sp==null?null:(xf.filter(v=>v>=4).length>=2&&xf.every(v=>v>=1)&&ge(sp,4));
  const mpOk=mp==null?null:(ge(mp,4)&&mf.every(v=>v>0));
  const issues=[];
  if(daOk===false) issues.push("Diplomarbeit unter \u201eausreichend\u201c: Pr\u00fcfung Teil 1 nicht bestanden (\u00a7 21 VIII), eine Wiederholung im 3. Studienjahr ist vorgesehen (\u00a7 34 I)");
  if(spOk===false) issues.push("Schriftliche Pr\u00fcfung nicht bestanden: n\u00f6tig sind mindestens zwei Arbeiten mit 04, die dritte mindestens 01 und ein Durchschnitt von mindestens 4,00 (\u00a7 25 II)");
  if(mpOk===false) issues.push("M\u00fcndliche Pr\u00fcfung nicht bestanden: Durchschnitt mindestens 4,00 und keine Fachgruppe mit 00 (\u00a7 27 III)");
  const cnt=[da].concat(xs,ms).filter(v=>v!==null).length;
  let st="idle",msg=`${cnt} von 6 Pr\u00fcfungsleistungen eingetragen`,sub="Teilnoten werden laufend berechnet.";
  if(issues.length){st="bad";msg="Mindestanforderung eines Pr\u00fcfungsteils nicht erreicht";sub=issues.join(" \u00b7 ")+". Jeder Pr\u00fcfungsteil kann einmal wiederholt werden (\u00a7 34).";}
  else if(cnt===6){st="ok";msg="Alle drei Pr\u00fcfungsteile bestanden";sub="";}
  return {da,sp,mp,xf,mf,daOk,spOk,mpOk,st,msg,sub};
}
/* \u00a7 29 I Nr. 1: Vornote mit Gewichten 1 / 2 / 3, weitere Leistungsnachweise einfach */
function vornote(){
  let s=0,w=0,n=0;
  ["gs","hs1","hs2"].forEach(sec=>items(sec).forEach(i=>{const v=val(i.id);if(v!==null){s+=v*i.vw;w+=i.vw;n++;}}));
  return {vn:w?r2(s/w):null,n,w};
}
function evalAll(){
  const gs=evalGS(),h1=evalHS("hs1"),h2=evalHS("hs2"),lp=evalLP(),V=vornote();
  const parts=[{k:"vn",v:V.n===19?V.vn:null,pv:V.vn},{k:"da",v:lp.da,pv:lp.da},{k:"sp",v:lp.sp,pv:lp.sp},{k:"mp",v:lp.mp,pv:lp.mp}];
  const avail=parts.filter(p=>p.pv!=null),missing=parts.filter(p=>p.v==null);
  const kw=avail.reduce((a,p)=>a+W[p.k],0);
  const part=kw?r2(avail.reduce((a,p)=>a+p.pv*W[p.k],0)/kw):null;
  const failed=lp.daOk===false||lp.spOk===false||lp.mpOk===false;
  const final=missing.length===0&&!failed?r2(parts.reduce((a,p)=>a+p.v*W[p.k],0)/100):null;
  return {gs,h1,h2,lp,V,parts,avail,missing,part,final,failed};
}

/* ===== Darstellung ===== */
const TABS=[["gs","Grundstudium"],["hs1","HS I"],["hs2","HS II"],["lp","Laufbahnpr\u00fcfung"],["ab","Abschlussnote"],["ov","\u00dcbersicht"]];
function scaleHTML(id){
  const segs=[[0,0.5,"var(--g6)",""],[0.5,3.5,"var(--g5)","5"],[3.5,6.5,"var(--g4)","4"],[6.5,9.5,"var(--g3)","3"],[9.5,12.5,"var(--g2)","2"],[12.5,15,"var(--g1)","1"]];
  return `<div class="scale">${segs.map(s=>`<span style="flex:${s[1]-s[0]};background:${s[2]}">${s[3]}</span>`).join("")}<div class="marker" id="${id}" style="left:-10px"></div></div><div class="scale-axis num"><span>0</span><span>3,5</span><span>6,5</span><span>9,5</span><span>12,5</span><span>15</span></div>`;
}
function sectionPanel(sec){
  const d=SECTIONS[sec];
  return `<section class="card"><h2>${d.title}</h2><p class="intro">${d.intro}</p>
  ${d.groups.map(g=>`<h3 style="margin-top:16px">${g.name}</h3><div class="rows">${g.items.map(i=>`
    <div class="row"><div class="lbl"><b>${i.l}</b><small>${i.s}</small></div>
    <input id="in-${i.id}" data-id="${i.id}" inputmode="numeric" maxlength="2" placeholder="--" aria-label="${i.l} Punkte">
    <span class="chip" id="ch-${i.id}">offen</span></div>`).join("")}</div>`).join("")}
  <div id="res-${sec}"></div></section>`;
}
function build(){
  document.getElementById("tabs").innerHTML=TABS.map(([k,l])=>`<button role="tab" id="t-${k}" aria-selected="${S.tab===k}" data-t="${k}" type="button">${l}</button>`).join("");
  document.getElementById("panels").innerHTML=
   `<div class="panel" data-p="gs">${sectionPanel("gs")}</div>
    <div class="panel" data-p="hs1">${sectionPanel("hs1")}</div>
    <div class="panel" data-p="hs2">${sectionPanel("hs2")}</div>
    <div class="panel" data-p="lp">${sectionPanel("lp")}</div>
    <div class="panel" data-p="ab" id="p-ab"></div>
    <div class="panel" data-p="ov">${overview()}</div>`;
  document.querySelectorAll(".row input").forEach(inp=>{const v=val(inp.dataset.id);inp.value=v===null?"":fmtP(v);inp.addEventListener("input",onInput);});
  document.getElementById("tabs").onclick=e=>{const b=e.target.closest("button");if(b){S.tab=b.dataset.t;save();showTab();}};
  document.getElementById("demo-clear").onclick=()=>{S.v={};S.demo=false;save();build();};
  document.getElementById("demo-load").onclick=()=>{S.v={...DEMO};S.demo=true;save();build();};
  const c1=document.getElementById("clear1"),c2=document.getElementById("clear2");
  c1.hidden=false;c2.hidden=true;
  c1.onclick=()=>{c1.hidden=true;c2.hidden=false;setTimeout(()=>{c1.hidden=false;c2.hidden=true;},5000);};
  c2.onclick=()=>{S.v={};S.demo=false;save();build();};
  const help=document.getElementById("help");
  help.open=false;
  help.ontoggle=()=>{S.helpOpen=help.open;save();};
  const hints=document.getElementById("hints");
  hints.open=false;
  const xp=document.getElementById("xport");if(xp)xp.open=false;
  hints.ontoggle=()=>{S.hintsOpen=hints.open;save();};
  const cb=document.getElementById("persist");cb.onchange=()=>{setPersist(cb.checked);document.getElementById("persist-msg").textContent="";};
  const w1=document.getElementById("wipe1"),w2=document.getElementById("wipe2");
  w1.hidden=false;w2.hidden=true;
  w1.onclick=()=>{w1.hidden=true;w2.hidden=false;setTimeout(()=>{w1.hidden=false;w2.hidden=true;},6000);};
  w2.onclick=()=>{wipeDevice();};
  const o=location.origin&&location.origin!=="null"?location.origin:"(lokale Datei)";
  document.querySelectorAll(".js-origin").forEach(e=>e.textContent=o);
  document.querySelectorAll(".js-ff").forEach(e=>e.textContent=o.replace("://","+++").replace(/:(\d+)$/,"+$1"));
  updatePersist();
  showTab();update();
}
function showTab(){
  document.querySelectorAll(".tabs button").forEach(b=>b.setAttribute("aria-selected",b.dataset.t===S.tab));
  document.querySelectorAll(".panel").forEach(p=>p.hidden=p.dataset.p!==S.tab);
}
function onInput(e){
  const inp=e.target,raw=inp.value.trim();
  if(raw===""){delete S.v[inp.dataset.id];inp.classList.remove("err");}
  else{const n=Number(raw);if(Number.isInteger(n)&&n>=0&&n<=15){S.v[inp.dataset.id]=n;inp.classList.remove("err");}else{inp.classList.add("err");return;}}
  S.demo=false;save();update();
}
function statusHTML(r){return `<div class="status ${r.st}">${r.msg}${r.sub?`<small>${r.sub}</small>`:""}</div>`;}
function nextStep(a){
  if(a==null) return "";
  const g=gradeOfAvg(a),up=GRADES.find(x=>x.g===g.g-1);
  return up?`noch <span class="num">${fmt(up.amin-a)}</span> Punkte bis \u201e${up.w}\u201c`:"h\u00f6chste Notenstufe erreicht";
}
function resultBlock(sec,r,label){
  const a=r.avg;
  return `<div class="result"><div><div class="eyebrow">${label}</div><div class="avg">${fmt(a)}</div></div>
   <div class="meta">${a!=null?`<b>${gradeOfAvg(a).w}</b> \u00b7 ${nextStep(a)}`:"Noch keine Werte"}${scaleHTML("mk-"+sec)}</div></div>${statusHTML(r)}`;
}
function placeMarker(id,a){const m=document.getElementById(id);if(m)m.style.left=a==null?"-10px":`calc(${a/15*100}% - 1px)`;}
function update(){
  document.querySelectorAll(".row input").forEach(inp=>{
    const v=val(inp.dataset.id),ch=document.getElementById("ch-"+inp.dataset.id);
    if(v===null){ch.textContent="offen";ch.removeAttribute("data-g");}else{const g=gradeOfPoints(v);ch.textContent=`${g.w} (${g.g})`;ch.dataset.g=g.g;}
  });
  const R=evalAll();
  document.getElementById("demo-hint").hidden=!S.demo;
  document.getElementById("demo-clear").hidden=!S.demo;
  document.getElementById("demo-load").hidden=S.demo;
  document.getElementById("res-gs").innerHTML=resultBlock("gs",R.gs,"Durchschnitt Grundstudium");
  document.getElementById("res-hs1").innerHTML=resultBlock("hs1",R.h1,"Jahresdurchschnitt HS I");
  document.getElementById("res-hs2").innerHTML=resultBlock("hs2",R.h2,"Jahresdurchschnitt HS II");
  const lp=R.lp,ok=b=>b==null?"":b?" \u00b7 bestanden":" \u00b7 nicht bestanden";
  document.getElementById("res-lp").innerHTML=`<div class="result" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px">
     <div><div class="eyebrow">Diplomarbeit</div><div class="avg">${fmt(lp.da)}</div><small>${lp.da!=null?gradeOfAvg(lp.da).w+ok(lp.daOk):""}</small></div>
     <div><div class="eyebrow">Schriftlich (\u00d8 3)</div><div class="avg">${fmt(lp.sp)}</div><small>${lp.sp!=null?gradeOfAvg(lp.sp).w+ok(lp.spOk):lp.xf.length?"\u00d8 bisher "+fmt(mean(lp.xf)):""}</small></div>
     <div><div class="eyebrow">M\u00fcndlich (\u00d8 2)</div><div class="avg">${fmt(lp.mp)}</div><small>${lp.mp!=null?gradeOfAvg(lp.mp).w+ok(lp.mpOk):lp.mf.length?"\u00d8 bisher "+fmt(mean(lp.mf)):""}</small></div>
   </div>${statusHTML(lp)}`;
  placeMarker("mk-gs",R.gs.avg);placeMarker("mk-hs1",R.h1.avg);placeMarker("mk-hs2",R.h2.avg);
  renderAB(R);
  const set=(id,a,s)=>{document.getElementById(id).textContent=fmt(a);document.getElementById(id+"-s").textContent=s;};
  set("b-gs",R.gs.avg,R.gs.avg!=null?gradeOfAvg(R.gs.avg).w:"");
  set("b-vn",R.V.vn,R.V.vn!=null?(R.V.n<19?`vorl\u00e4ufig \u00b7 ${R.V.n} von 19`:gradeOfAvg(R.V.vn).w):"");
  const lpp=R.avail.filter(p=>p.k!=="vn");
  const lpAvg=lpp.length?r2(lpp.reduce((a,p)=>a+p.pv*W[p.k],0)/lpp.reduce((a,p)=>a+W[p.k],0)):null;
  set("b-lp",lpAvg,lpAvg!=null?(R.failed?"nicht bestanden":lpp.length<3?"vorl\u00e4ufig, gewichtet":gradeOfAvg(lpAvg).w):"");
  const ab=R.final!=null?R.final:R.part;
  set("b-ab",R.failed?null:ab,R.failed?"kein Gesamtergebnis":ab!=null?(R.final!=null?(ge(R.final,3.5)?gradeOfAvg(ab).w:"nicht bestanden"):"Hochrechnung \u00b7 "+gradeOfAvg(ab).w):"");
}
function renderAB(R){
  const L={vn:"Vornote",da:"Diplomarbeit",sp:"Schriftliche Pr\u00fcfung",mp:"M\u00fcndliche Pr\u00fcfung"};
  const rows=R.parts.map(p=>`<tr><td>${L[p.k]}${p.k==="vn"&&R.V.n<19&&R.V.n>0?` <small>(vorl\u00e4ufig, ${R.V.n} von 19)</small>`:""}</td><td class="r num">${fmt(p.pv)}</td><td class="r num">${W[p.k]} %</td><td class="r num">${p.pv!=null?fmt(p.pv*W[p.k]/100):"--"}</td></tr>`).join("");
  const a=R.final!=null?R.final:R.part;
  const need=goalPlan(R,Number(S.target));
  const verdict=R.failed?`<div class="status bad">Kein Gesamtergebnis<small>Mindestens ein Pr\u00fcfungsteil ist nicht bestanden. Details im Reiter Laufbahnpr\u00fcfung.</small></div>`
    :R.final!=null?(ge(R.final,3.5)?`<div class="status ok">Laufbahnpr\u00fcfung bestanden mit \u201e${gradeOfAvg(R.final).w}\u201c</div>`:`<div class="status bad">Laufbahnpr\u00fcfung nicht bestanden<small>Gesamtergebnis unter 3,50 Punkten (\u00a7 29 II S. 2).</small></div>`):"";
  document.getElementById("p-ab").innerHTML=`
  <section class="card"><div class="eyebrow">Gesamtergebnis (\u00a7 29)</div><h2>Abschlussnote</h2>
   <p class="intro">Vornote 20 %, Diplomarbeit 10 %, schriftliche Pr\u00fcfung 40 %, m\u00fcndliche Pr\u00fcfung 30 %. Jede Teilnote wird auf zwei Stellen kaufm\u00e4nnisch gerundet, danach das Endergebnis.</p>
   <div class="result"><div><div class="eyebrow">${R.final!=null?"Abschlussnote":"Hochrechnung aus vorhandenen Teilen"}</div><div class="avg">${R.failed?"--":fmt(a)}</div></div>
   <div class="meta">${a!=null&&!R.failed?`<b>${gradeOfAvg(a).w}</b> \u00b7 ${nextStep(a)}`:R.failed?"":"Noch keine Werte"}${scaleHTML("mk-ab")}</div></div>
   ${verdict}
   ${R.final==null&&!R.failed&&R.avail.length?`<p class="note">Hochrechnung: Die vorhandenen Teile werden nach ihrem Gewicht gemittelt. Noch offen: ${R.missing.map(p=>L[p.k]).join(", ")}.</p>`:""}
   <div class="tbl" style="margin-top:12px"><table><thead><tr><th>Bestandteil</th><th class="r">Punkte</th><th class="r">Gewicht</th><th class="r">Beitrag</th></tr></thead><tbody>${rows}
   <tr class="hl"><td><b>Abschlussnote</b></td><td></td><td class="r num">100 %</td><td class="r num"><b>${R.failed?"--":fmt(R.final)}</b></td></tr></tbody></table></div>
  </section>
  <section class="card"><div class="eyebrow">Vornote (\u00a7 29 I Nr. 1)</div><h3>So setzt sich die Vornote zusammen</h3>
   <div class="tbl" style="margin-top:8px"><table><thead><tr><th>Leistungen</th><th class="r">Anzahl</th><th class="r">Faktor</th><th class="r">Anteile</th></tr></thead><tbody>
   <tr><td>Aufsichtsarbeiten Grundstudium</td><td class="r num">9</td><td class="r num">\u00d71</td><td class="r num">9</td></tr>
   <tr><td>Aufsichtsarbeiten HS I (120 min)</td><td class="r num">2</td><td class="r num">\u00d72</td><td class="r num">4</td></tr>
   <tr><td>Aufsichtsarbeiten HS II (180 min)</td><td class="r num">2</td><td class="r num">\u00d73</td><td class="r num">6</td></tr>
   <tr><td>Weitere Leistungsnachweise HS I und II</td><td class="r num">6</td><td class="r num">\u00d71</td><td class="r num">6</td></tr>
   <tr class="hl"><td><b>Summe</b></td><td class="r num">19</td><td></td><td class="r num"><b>25</b></td></tr></tbody></table></div>
   <p class="note"><span class="flag ok">Pr\u00fcfungsamt</span> In der Vornote z\u00e4hlen die Aufsichtsarbeiten HS I zweifach und HS II dreifach, die weiteren Leistungsnachweise einfach (Auskunft Pr\u00fcfungsamt, Oktober 2026).</p></section>
  <section class="card"><div class="eyebrow">Zielrechner</div><h3>Was brauche ich noch?</h3>
   <div class="target"><label for="tgt">Zielnote (Punkte)</label><input id="tgt" inputmode="decimal" value="${esc(String(S.target).replace(".",","))}" maxlength="5">
   <button class="btn" type="button" data-tg="12.5">sehr gut</button><button class="btn" type="button" data-tg="9.5">gut</button><button class="btn" type="button" data-tg="6.5">befriedigend</button><button class="btn" type="button" data-tg="3.5">bestanden</button></div>
   ${need}</section>
  ${EXPORT_OK?`<section class="card" id="exp"><div class="eyebrow">Speichern</div><h3>Noten\u00fcbersicht als Dokument</h3>
   <p class="note">Erstellt ein formatiertes Dokument mit allen eingetragenen Noten, Durchschnitten, Studienzielen und der Abschlussnote. Am Handy \u00f6ffnet sich das Teilen-Men\u00fc, dort \u201eIn Dateien sichern\u201c w\u00e4hlen.</p>
   <div class="weights"><label for="ex-name">Name (optional)<input id="ex-name" value="${esc(S.name||"")}" maxlength="60" autocomplete="name"></label>
   <label for="ex-jg">Jahrgang / Kurs (optional)<input id="ex-jg" value="${esc(S.jg||"")}" maxlength="60" placeholder="z. B. P48"></label></div>
   <div class="btns"><button class="btn soft" id="ex-pdf" type="button">PDF speichern</button><button class="btn soft" id="ex-doc" type="button">Word speichern</button></div>
   <p class="note" id="ex-msg" aria-live="polite"></p></section>`:""}
  <p class="note">Diese private Modellrechnung ist ohne Gew\u00e4hr und rechtliche Bindung. Ma\u00dfgeblich ist die Festsetzung durch den Fachbereich und das Pr\u00fcfungsamt.</p>`;
  placeMarker("mk-ab",R.failed?null:a);
  if(EXPORT_OK){
    const nm=document.getElementById("ex-name"),jg=document.getElementById("ex-jg");
    nm.onchange=()=>{S.name=cleanText(nm.value.trim());save();};jg.onchange=()=>{S.jg=cleanText(jg.value.trim());save();};
    document.getElementById("ex-pdf").onclick=()=>{S.name=cleanText(nm.value.trim());S.jg=cleanText(jg.value.trim());save();exportPDF();};
    document.getElementById("ex-doc").onclick=()=>{S.name=cleanText(nm.value.trim());S.jg=cleanText(jg.value.trim());save();exportDOCX();};
  }
  const tg=document.getElementById("tgt");
  tg.onchange=()=>{const n=Number(tg.value.replace(",","."));if(!isNaN(n)&&n>=0&&n<=15){S.target=n;save();update();}};
  document.querySelectorAll("[data-tg]").forEach(b=>b.onclick=()=>{S.target=Number(b.dataset.tg);save();update();});
}
/* ===== Zielrechner: offene Felder durchspielen ===== */
const LEVERS=[
  {ids:["m1","m2"],l:"M\u00fcndliche Pr\u00fcfung, je Fachgruppe",f:0.15},
  {ids:["x1","x2","x3"],l:"Schriftliche Pr\u00fcfung, je Arbeit",f:0.4/3},
  {ids:["da"],l:"Diplomarbeit",f:0.10},
  {ids:["h21","h22"],l:"Aufsichtsarbeit HS II (\u00d73 in der Vornote)",f:0.2*3/25},
  {ids:["h11","h12"],l:"Aufsichtsarbeit HS I (\u00d72 in der Vornote)",f:0.2*2/25},
  {ids:["h13","h14","h15","h23","h24","h25"],l:"Weiterer Leistungsnachweis HS I oder II",f:0.2/25},
  {ids:["gs1","gs2","gs3","gs4","gs5","gs6","gs7","gs8","gs9"],l:"Aufsichtsarbeit Grundstudium",f:0.2/25}];
function allIds(){return ["gs","hs1","hs2","lp"].flatMap(s=>items(s).map(i=>i.id));}
function simFinal(k){
  const keep=S.v,v={...S.v};allIds().forEach(id=>{if(val(id)===null)v[id]=k;});
  S.v=v;let f=null;try{f=evalAll().final;}finally{S.v=keep;}return f;
}
function goalPlan(R,t){
  const open=allIds().filter(id=>val(id)===null);
  if(R.failed) return `<p style="margin:10px 0 0">Solange ein Pr\u00fcfungsteil nicht bestanden ist, wird kein Gesamtergebnis festgesetzt (\u00a7 29 IV).</p>`;
  if(!open.length) return `<p style="margin:10px 0 0">${R.final==null?"":ge(R.final,t)?"Zielnote erreicht.":`Ziel um <span class="num">${fmt(t-R.final)}</span> Punkte verfehlt.`}</p>`;
  let k=null;for(let p=0;p<=15;p++){const f=simFinal(p);if(f!=null&&ge(f,t)&&ge(f,3.5)){k=p;break;}}
  const best=simFinal(15);
  let head;
  if(k===null) head=`<div class="status bad">Nicht mehr erreichbar<small>Selbst mit 15 Punkten in allen ${open.length} offenen Arbeiten k\u00e4me die Abschlussnote nur auf ${fmt(best)}.</small></div>`;
  else{
    const f=simFinal(k),below=k>0?simFinal(k-1):null;
    head=`<div class="status ok">Du brauchst in jeder der ${open.length} noch offenen Arbeiten mindestens <span class="num">${fmtP(k)}</span> Punkte (\u201e${gradeOfPoints(k).w}\u201c)<small>Dann ergibt sich eine Abschlussnote von ${fmt(f)}${k>0&&below!=null?`, mit ${fmtP(k-1)} Punkten \u00fcberall w\u00e4ren es nur ${fmt(below)}`:""}. Schw\u00e4chere Arbeiten kannst du durch st\u00e4rkere ausgleichen, die Tabelle zeigt, wo ein Punkt am meisten bewirkt. F\u00fcr die Pr\u00fcfungsteile gelten au\u00dferdem die Mindestgrenzen (z. B. Diplomarbeit mindestens 04).</small></div>`;
  }
  const rows=LEVERS.map(g=>({g,n:g.ids.filter(id=>open.includes(id)).length})).filter(x=>x.n>0)
    .map(x=>`<tr><td>${x.g.l}</td><td class="r num">${x.n}</td><td class="r num">+${x.g.f.toFixed(3).replace(".",",")}</td></tr>`).join("");
  return `${head}<h3 style="margin-top:14px">Wo ein Punkt am meisten bringt</h3>
   <div class="tbl" style="margin-top:6px"><table><thead><tr><th>Noch nicht eingetragene Arbeit</th><th class="r">Wie viele fehlen noch</th><th class="r">So viel steigt die Abschlussnote pro Punkt mehr</th></tr></thead><tbody>${rows}</tbody></table></div>
   <p class="note">Lesebeispiel: Holst du in einer m\u00fcndlichen Teilnote einen Punkt mehr, steigt deine Abschlussnote um 0,150. Ein Punkt mehr in einer Grundstudiumsklausur bringt nur 0,008, also fast 19-mal weniger.</p>`;
}
function overview(){
  return `<section class="card"><div class="eyebrow">Studienaufbau (\u00a7\u00a7 7, 13, 20 ff.)</div><h2>Welche Arbeiten wann geschrieben werden</h2>
  <p class="intro">Grundlage: APO g. D. Pol. vom 13.09.2024 (gilt ab Jahrgang P46) und die Folien Schl\u00fcsselkompetenzen I f\u00fcr P48.</p>
  <div class="tbl" style="margin-top:10px"><table><thead><tr><th>Abschnitt</th><th>Leistungsnachweise</th><th>Dauer / Umfang</th><th>Vornote</th></tr></thead><tbody>
  <tr><td><b>Grundstudium</b><br><small>1. Studienjahr: 3 Monate Einf\u00fchrung, 5 Monate Fachstudium, 4 Monate Praxis und Urlaub</small></td><td>9 Aufsichtsarbeiten: Einsatzlehre, Kriminalistik, Verkehrsunfallaufnahme, Staats- und Verfassungsrecht, Polizeirecht, Strafrecht, Strafprozessrecht, Verkehrsrecht, \u00d6ffentliches Dienstrecht</td><td class="num">je 60 min</td><td class="num">\u00d71</td></tr>
  <tr><td><b>Hauptstudium I</b><br><small>2. Studienjahr: 3 Monate Praxis, 9 Monate Fachstudium und Urlaub</small></td><td>2 Aufsichtsarbeiten (Polizeiwissenschaften, Rechtswissenschaften)<br>3 Leistungsnachweise: Hausarbeit, Aufsichtsarbeit \u201eSeminar\u201c, Aufsichtsarbeit \u201eberufsbezogene GW\u201c</td><td class="num">120 min<br>max. 8 S. / 60 min / 90 min</td><td class="num">\u00d72<br>\u00d71</td></tr>
  <tr><td><b>Hauptstudium II</b><br><small>3. Studienjahr: 10 Monate Fachstudium und Urlaub, 2 Monate Praxis</small></td><td>2 Aufsichtsarbeiten (Polizeiwissenschaften, Rechtswissenschaften)<br>3 Leistungsnachweise: Aufsichtsarbeit \u201eSeminar\u201c, praktische Leistungsabnahme, Aufsichtsarbeit \u201eberufsbezogene GW\u201c</td><td class="num">180 min<br>60 min / praktisch / 90 min</td><td class="num">\u00d73<br>\u00d71</td></tr>
  <tr><td><b>Pr\u00fcfung Teil 1</b></td><td>Diplomarbeit, Ausgabe zu Beginn des 3. Studienjahres</td><td class="num">3 Monate, max. 30 S.</td><td>10 % Abschluss</td></tr>
  <tr><td><b>Pr\u00fcfung Teil 2</b></td><td>Schriftliche Pr\u00fcfung: je Fachgruppe eine Arbeit plus eine fachgruppen\u00fcbergreifende</td><td class="num">3 \u00d7 4 h</td><td>40 % Abschluss</td></tr>
  <tr><td><b>Pr\u00fcfung Teil 3</b></td><td>M\u00fcndliche Pr\u00fcfung in den F\u00e4chern beider Fachgruppen, je eine Note pro Fachgruppe</td><td class="num">25 bis 30 min</td><td>30 % Abschluss</td></tr>
  </tbody></table></div>
  <p class="note">Die Art der drei weiteren Leistungsnachweise pro Jahr legt die Fachbereichsleitung fest. Die Aufteilung oben folgt den Folien f\u00fcr P48. Bef\u00e4higungsberichte best\u00e4tigen nur das Erreichen des Studienziels und bekommen keine Punkte (\u00a7 13 VIII).</p></section>
  ${limits()}
  <div class="split">
  <section class="card"><h3>Studienziel Grundstudium (\u00a7 13 IV)</h3><ul class="plain">
   <li>Alle 9 Arbeiten mindestens 04: erreicht</li>
   <li>Eine Arbeit 00 oder bis zu zwei 01 bis 03, Rest mindestens 04: Wiederholung dieser Arbeiten</li>
   <li>00 plus eine weitere unter 04, oder mehr als zwei unter 04: nicht erreicht, Zweitkorrektur</li></ul></section>
  <section class="card"><h3>Studienziel HS I und HS II (\u00a7 13 VI)</h3><ul class="plain">
   <li>H\u00f6chstens zwei 01 bis 03, keine 00 und Jahresdurchschnitt mindestens 4,00: erreicht</li>
   <li>Nur eine schriftliche Aufsichtsarbeit mit 00, alles andere mindestens 04: Wiederholung dieser Arbeit</li>
   <li>Sonst nicht erreicht, Zweitkorrektur (bei Schnitt unter 4,00 aller Leistungen)</li>
   <li><span class="flag ok">Pr\u00fcfungsamt</span> F\u00fcr das Bestehen z\u00e4hlen die 2 Aufsichtsarbeiten und die 3 Leistungsnachweise je einfach (Auskunft Pr\u00fcfungsamt, Oktober 2026)</li></ul></section>
  <section class="card"><h3>Wiederholung (\u00a7\u00a7 15, 34)</h3><ul class="plain">
   <li>Studienjahr: einmalig, wenn der Jahresdurchschnitt mindestens 4,00 betr\u00e4gt, sonst nur als begr\u00fcndete Ausnahme</li>
   <li>Nur ein Studienjahr darf wiederholt werden, dabei sind alle Leistungen neu zu erbringen</li>
   <li>Pr\u00fcfungsteile 1 bis 3: jeweils einmal wiederholbar</li></ul></section>
  <section class="card"><h3>Bestehen der Laufbahnpr\u00fcfung</h3><ul class="plain">
   <li>Diplomarbeit mindestens 04 (\u00a7 21 VIII)</li>
   <li>Schriftlich: zwei Arbeiten mindestens 04, die dritte mindestens 01, Schnitt mindestens 4,00 (\u00a7 25 II)</li>
   <li>M\u00fcndlich: Schnitt mindestens 4,00, keine Fachgruppe mit 00 (\u00a7 27 III)</li>
   <li>Gesamtergebnis mindestens 3,50 (\u00a7 29 II)</li></ul></section>
  <section class="card"><h3>Ohne Note, aber Pflicht</h3><ul class="plain">
   <li>Tastaturschulung und Fahrerlaubnis B vor der Praxis im Grundstudium</li>
   <li>Kontroll\u00fcbungen Pistole und MP, Sicherheits- und Gefahrentraining (Nachholfrist 3 Monate)</li>
   <li>Sportabzeichen Silber und DRSA Bronze bis 6 Monate vor Ende, nicht \u00e4lter als 2 Jahre</li>
   <li>Physisch-technische Ausbildung und Kontroll\u00fcbungen mit Zeitbeschr\u00e4nkung bis 2 Monate vor Ende</li></ul></section>
  <section class="card"><h3>Vers\u00e4umnis und T\u00e4uschung</h3><ul class="plain">
   <li>Selbst verschuldet vers\u00e4umte Arbeit: 00 (\u00a7\u00a7 14 V, 24 III, 32 I)</li>
   <li>Krankheit am Pr\u00fcfungstag nur mit \u00e4rztlichem Attest (\u00a7 14 VI)</li>
   <li>T\u00e4uschung: bis zu 00, in schweren F\u00e4llen Pr\u00fcfung nicht bestanden (\u00a7\u00a7 16, 33)</li></ul></section>
  </div>`;
}
function limits(){
  return `<section class="card"><div class="eyebrow">\u00a7\u00a7 28, 29 II</div><h2>Wo die Notengrenzen liegen</h2>
  <p class="intro">Einzelleistungen gibt es in ganzen Punkten von 00 bis 15. Gesamtnoten werden auf zwei Dezimalstellen berechnet, die dritte Stelle wird kaufm\u00e4nnisch gerundet. Beispiel: 9,495 ergibt 9,50 und damit \u201egut\u201c, 9,494 ergibt 9,49 und bleibt \u201ebefriedigend\u201c.</p>
  <div class="tbl" style="margin-top:10px"><table><thead><tr><th>Note</th><th>Bezeichnung</th><th class="r">Einzelleistung</th><th class="r">Gesamtergebnis</th><th>Bedeutung</th></tr></thead><tbody>
  ${[["1","sehr gut","13 bis 15","12,50 bis 15,00","den Anforderungen in besonderem Ma\u00dfe entsprechend"],
     ["2","gut","10 bis 12","9,50 bis 12,49","den Anforderungen voll entsprechend"],
     ["3","befriedigend","07 bis 09","6,50 bis 9,49","den Anforderungen im Allgemeinen entsprechend"],
     ["4","ausreichend","04 bis 06","3,50 bis 6,49","M\u00e4ngel, im Ganzen noch entsprechend"],
     ["5","mangelhaft","01 bis 03","0,50 bis 3,49","nicht entsprechend, Grundkenntnisse vorhanden"],
     ["6","ungen\u00fcgend","00","0,00 bis 0,49","nicht entsprechend, Grundkenntnisse l\u00fcckenhaft"]]
    .map(r=>`<tr><td class="num"><b>${r[0]}</b></td><td>${r[1]}</td><td class="r num">${r[2]}</td><td class="r num">${r[3]}</td><td>${r[4]}</td></tr>`).join("")}
  </tbody></table></div>
  <div class="status warn" style="margin-top:14px">Zwei verschiedene Schwellen<small>F\u00fcr Studienziele, die schriftliche und die m\u00fcndliche Pr\u00fcfung gilt ein Durchschnitt von mindestens 4,00. Nur das Gesamtergebnis der Laufbahnpr\u00fcfung ist schon ab 3,50 bestanden (\u00a7 29 II S. 2).</small></div></section>`;
}

/* ===== Export ===== */
const EXPORT_OK=typeof window.jspdf!=="undefined"&&typeof window.docx!=="undefined";
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function gtxt(v){return v==null?"offen":gradeOfPoints(v).w;}
function atxt(a){return a==null?"--":`${fmt(a)} (${gradeOfAvg(a).w})`;}
function reportData(){
  const R=evalAll(),secs=[],map={gs:R.gs,hs1:R.h1,hs2:R.h2};
  for(const k of ["gs","hs1","hs2","lp"]){
    const d=SECTIONS[k],rows=[];
    d.groups.forEach(g=>g.items.forEach(i=>{const v=val(i.id);rows.push([i.l,i.s,v==null?"--":fmtP(v),gtxt(v)]);}));
    let sum;
    if(k==="lp"){const lp=R.lp;sum=[["Diplomarbeit",atxt(lp.da)],["Schriftlich (\u00d8)",atxt(lp.sp)],["M\u00fcndlich (\u00d8)",atxt(lp.mp)],["Status",lp.msg+(lp.sub?". "+lp.sub:"")]];}
    else{const r=map[k];sum=[["Durchschnitt",atxt(r.avg)],["Studienziel",r.msg+(r.sub?". "+r.sub:"")]];}
    secs.push({title:d.title,rows,sum});
  }
  const L={vn:"Vornote",da:"Diplomarbeit",sp:"Schriftliche Pr\u00fcfung",mp:"M\u00fcndliche Pr\u00fcfung"};
  const ab=R.parts.map(p=>[L[p.k]+(p.k==="vn"&&R.V.n<19&&R.V.n>0?` (vorl\u00e4ufig, ${R.V.n} von 19)`:""),p.pv==null?"--":fmt(p.pv),W[p.k]+" %",p.pv!=null?fmt(p.pv*W[p.k]/100):"--"]);
  const fin=R.failed?null:(R.final!=null?R.final:R.part);
  const finLabel=R.failed?"Kein Gesamtergebnis (Pr\u00fcfungsteil nicht bestanden)":R.final!=null?(ge(R.final,3.5)?"Abschlussnote":"Abschlussnote (nicht bestanden)"):"Hochrechnung (noch nicht alle Teile vorhanden)";
  return {secs,ab,fin,finLabel};
}
const FOOT="Vornote 20 %, Diplomarbeit 10 %, schriftliche Pr\u00fcfung 40 %, m\u00fcndliche Pr\u00fcfung 30 % (\u00a7 29 APO g. D. Pol. vom 13.09.2024, ab P46). Vornote: Aufsichtsarbeiten Grundstudium \u00d71, HS I \u00d72, HS II \u00d73, weitere Leistungsnachweise \u00d71. F\u00fcr das Bestehen des Studienabschnitts z\u00e4hlen im HS alle f\u00fcnf Leistungen einfach (Auskunft Pr\u00fcfungsamt, Oktober 2026). Gesamtnoten auf zwei Stellen kaufm\u00e4nnisch gerundet. Diese private Modellrechnung ist ohne Gew\u00e4hr und rechtliche Bindung. Ma\u00dfgeblich ist die Festsetzung durch den Fachbereich und das Pr\u00fcfungsamt.";
const LIMITS=[["1 sehr gut","13 bis 15","12,50 bis 15,00"],["2 gut","10 bis 12","9,50 bis 12,49"],["3 befriedigend","07 bis 09","6,50 bis 9,49"],["4 ausreichend","04 bis 06","3,50 bis 6,49"],["5 mangelhaft","01 bis 03","0,50 bis 3,49"],["6 ungen\u00fcgend","00","0,00 bis 0,49"]];
function stamp(){const d=new Date();return {de:d.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"}),iso:d.toISOString().slice(0,10)};}
function fname(ext){const n=(S.name||"").replace(/[^A-Za-z0-9\u00c4\u00d6\u00dc\u00e4\u00f6\u00fc\u00df_-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,40);return `Notenuebersicht${n?"_"+n:""}_${stamp().iso}.${ext}`;}
async function deliver(blob,name){
  const msg=document.getElementById("ex-msg");
  if(window.claude&&typeof window.claude.use==="function"){
    let dl=null;try{dl=await window.claude.use("downloads");}catch(e){}
    if(dl){try{await dl.save({filename:name,data:blob});msg.textContent=`Gespeichert als ${name}`;}
      catch(e){msg.textContent=e&&e.code==="declined"?"Speichern abgebrochen.":"Speichern ist in dieser Ansicht nicht m\u00f6glich. Nutze die App-Version.";}
      return;}
  }
  try{
    const file=new File([blob],name,{type:blob.type});
    if(navigator.canShare&&navigator.canShare({files:[file]})&&/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)){
      await navigator.share({files:[file],title:"Noten\u00fcbersicht"});msg.textContent="Dokument bereitgestellt.";return;}
  }catch(e){if(e&&e.name==="AbortError"){msg.textContent="Speichern abgebrochen.";return;}}
  const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),4000);msg.textContent=`Gespeichert als ${name}`;
}
/* ===== PDF-Bericht: strukturierte Uebersicht mit Rechenweg und Erlaeuterungen ===== */
function exportPDF(){
  const {jsPDF}=window.jspdf,doc=new jsPDF({unit:"mm",format:"a4"}),R=evalAll(),st=stamp();
  const PW=210,PH=297,M=16,CW=PW-2*M,BOT=280;let y=0;
  const C={navy:[31,78,140],ink:[20,32,46],grey:[90,104,120],line:[211,218,228],soft:[233,237,243],tint:[219,230,245],
    gs:[0,131,160],hs1:[0,128,118],hs2:[86,130,30],lp:[106,72,160],ab:[31,78,140]};
  const STC={ok:[[29,122,74],[220,241,229]],warn:[[154,98,0],[251,236,208]],bad:[[176,48,42],[248,222,220]],idle:[[90,104,120],[233,237,243]]};
  const f=(w,s,c)=>{doc.setFont("helvetica",w);doc.setFontSize(s);doc.setTextColor(...(c||C.ink));};
  const newPage=()=>{doc.addPage();y=M+4;};
  const need=h=>{if(y+h>BOT)newPage();};
  const para=(t,size=9,col=C.ink,w="normal",indent=0,lh=4.3)=>{f(w,size,col);const ls=doc.splitTextToSize(t,CW-indent);need(ls.length*lh+1);doc.text(ls,M+indent,y);y+=ls.length*lh+1.2;};
  const who=[S.name,S.jg].filter(Boolean).join(" \u00b7 ");
  const gtx=a=>a==null?"":`${gradeOfAvg(a).w} (Note ${gradeOfAvg(a).g})`;

  /* Kopf */
  doc.setFillColor(...C.navy);doc.rect(0,0,PW,30,"F");
  f("bold",17,[255,255,255]);doc.text("Noten\u00fcbersicht Diplomstudium gD Polizei",M,13);
  f("normal",9.5,[219,230,245]);doc.text(`${who?who+" \u00b7 ":""}Stand ${st.de} \u00b7 nach APO g. D. Pol. vom 13.09.2024 (ab Jahrgang P46)`,M,20.5);
  doc.text("Private Modellrechnung ohne Gew\u00e4hr, keine amtliche Festsetzung",M,25.5);
  y=38;

  /* Ergebnis-Kasten */
  const fin=R.failed?null:(R.final!=null?R.final:R.part);
  const finLabel=R.failed?"Kein Gesamtergebnis":R.final!=null?(ge(R.final,3.5)?"Abschlussnote":"Abschlussnote, nicht bestanden"):"Hochrechnung der Abschlussnote";
  doc.setFillColor(...C.tint);doc.roundedRect(M,y,CW,26,2,2,"F");
  f("bold",8,C.grey);doc.text(finLabel.toUpperCase(),M+6,y+7);
  f("bold",24,C.navy);doc.text(fin==null?"--":fmt(fin),M+6,y+19);
  f("normal",10,C.navy);doc.text(fin==null?"":"Punkte",M+6+doc.getTextWidth(fin==null?"--":fmt(fin))*24/10+3,y+19);
  if(fin!=null){f("bold",13,C.navy);doc.text(gtx(fin),PW-M-6,y+13,{align:"right"});}
  f("normal",8.5,C.grey);
  const note=R.failed?"Ein Pr\u00fcfungsteil ist nicht bestanden, siehe Abschnitt Laufbahnpr\u00fcfung.":R.final!=null?"Alle Bestandteile sind eingetragen.":`Noch offen: ${R.missing.map(p=>({vn:"Vornote vollst\u00e4ndig",da:"Diplomarbeit",sp:"schriftliche Pr\u00fcfung",mp:"m\u00fcndliche Pr\u00fcfung"})[p.k]).join(", ")}.`;
  doc.text(doc.splitTextToSize(note,90),PW-M-6,y+19,{align:"right"});
  y+=32;

  /* Kacheln je Abschnitt */
  const tiles=[["Grundstudium",R.gs.avg,R.gs.st,C.gs],["Hauptstudium I",R.h1.avg,R.h1.st,C.hs1],["Hauptstudium II",R.h2.avg,R.h2.st,C.hs2],["Vornote",R.V.vn,R.V.n===19?"ok":"idle",C.ab]];
  const tw=(CW-9)/4;
  tiles.forEach((t,i)=>{const x=M+i*(tw+3);doc.setDrawColor(...C.line);doc.setFillColor(255,255,255);doc.roundedRect(x,y,tw,19,1.5,1.5,"FD");
    doc.setFillColor(...t[3]);doc.rect(x,y,1.6,19,"F");
    f("bold",7.5,C.grey);doc.text(t[0].toUpperCase(),x+4,y+5.5);f("bold",14,C.ink);doc.text(fmt(t[1]),x+4,y+12.5);
    f("normal",7.5,STC[t[2]][0]);doc.text(t[1]==null?"noch keine Werte":gradeOfAvg(t[1]).w,x+4,y+16.8);});
  y+=26;

  /* Tabellen-Helfer */
  const table=(cols,rows,o={})=>{
    const lh=4.1,pad=1.6;
    const head=()=>{need(9);doc.setFillColor(...C.soft);doc.rect(M,y-4,CW,6.4,"F");f("bold",7.8,C.grey);
      let x=M;cols.forEach(c=>{doc.text(c.h,c.al==="r"?x+c.w-pad:x+pad,y,{align:c.al==="r"?"right":"left"});x+=c.w;});y+=6.6;};
    head();
    rows.forEach((r,ri)=>{
      const sum=o.sumRow&&ri===rows.length-1;
      f(sum?"bold":"normal",8.6,C.ink);
      const cells=r.map((c,i)=>doc.splitTextToSize(String(c),cols[i].w-2*pad));
      const h=Math.max(...cells.map(c=>c.length))*lh+1.4;
      if(y+h>BOT){newPage();head();f(sum?"bold":"normal",8.6,C.ink);}
      if(sum){doc.setFillColor(...C.tint);doc.rect(M,y-3.6,CW,h+0.6,"F");}
      let x=M;cells.forEach((c,i)=>{doc.text(c,cols[i].al==="r"?x+cols[i].w-pad:x+pad,y,{align:cols[i].al==="r"?"right":"left"});x+=cols[i].w;});
      y+=h-lh+0.6;doc.setDrawColor(...C.line);doc.line(M,y,M+CW,y);y+=lh;
    });
    y+=1;
  };
  const h2=(t,sub,col)=>{need(30);y+=3;doc.setFillColor(...col);doc.rect(M,y-4.6,2.2,7.2,"F");f("bold",13,col);doc.text(t,M+5,y+0.6);
    if(sub){f("normal",8.5,C.grey);doc.text(sub,PW-M,y+0.6,{align:"right"});}y+=8;};
  const calc=t=>{const ls=doc.splitTextToSize(t,CW-10);need(ls.length*4.4+4);doc.setFillColor(248,249,251);doc.setDrawColor(...C.line);
    doc.roundedRect(M,y-3.6,CW,ls.length*4.4+3,1,1,"FD");f("normal",8.8,C.ink);doc.setFont("courier","bold");doc.text(ls,M+4,y+0.4);y+=ls.length*4.4+3.5;};
  const status=(s,msg,sub)=>{const [fg,bg]=STC[s];f("normal",8.4,C.ink);const ls=sub?doc.splitTextToSize(sub,CW-10):[];const h=7+ls.length*3.9;need(h+3);
    doc.setFillColor(...bg);doc.rect(M,y-3.8,CW,h,"F");doc.setFillColor(...fg);doc.rect(M,y-3.8,1.4,h,"F");
    f("bold",9.2,fg);doc.text(msg,M+5,y+0.4);if(ls.length){f("normal",8.2,C.ink);doc.text(ls,M+5,y+4.6);}y+=h+2.5;};
  const sumStr=a=>a.join(" + ");

  /* Abschnitte des Studiums */
  const secs=[["gs",R.gs,"Grundstudium","1. Studienjahr \u00b7 9 Aufsichtsarbeiten \u00b7 \u00a7 13 IV APO",C.gs],
              ["hs1",R.h1,"Hauptstudium I","2. Studienjahr \u00b7 2 Aufsichtsarbeiten, 3 Leistungsnachweise \u00b7 \u00a7 13 VI APO",C.hs1],
              ["hs2",R.h2,"Hauptstudium II","3. Studienjahr \u00b7 2 Aufsichtsarbeiten, 3 Leistungsnachweise \u00b7 \u00a7 13 VI APO",C.hs2]];
  secs.forEach(([k,r,t,sub,col])=>{
    h2(t,sub,col);
    const its=items(k),filled=its.filter(i=>val(i.id)!==null);
    const rows=its.map((i,n)=>{const v=val(i.id);return [String(n+1),i.l,(i.s.startsWith("Vornote")?"praktisch":i.s.split(" \u00b7 ")[0]),v==null?"offen":fmtP(v),v==null?"":gradeOfPoints(v).w,"\u00d7"+i.vw,v==null?"":String(v*i.vw)];});
    const ps=filled.map(i=>val(i.id));
    rows.push(["","Summe der eingetragenen Punkte","",String(ps.reduce((a,b)=>a+b,0)),"","",String(filled.reduce((a,i)=>a+val(i.id)*i.vw,0))]);
    table([{h:"Nr.",w:9},{h:"Leistung",w:58},{h:"Art",w:34},{h:"Punkte",w:15,al:"r"},{h:"Note",w:26},{h:"Faktor",w:14,al:"r"},{h:"Punkte \u00d7 Faktor",w:22,al:"r"}],rows,{sumRow:true});
    if(ps.length) calc(`Durchschnitt = (${sumStr(ps.map(String))}) \u00f7 ${ps.length} = ${fmt(r.avg)} Punkte, ${gradeOfAvg(r.avg).w}`);
    para(k==="gs"?"F\u00fcr das Studienziel z\u00e4hlt jede Arbeit einfach. Die Spalte \u201eFaktor\u201c zeigt, wie stark die Arbeit sp\u00e4ter in der Vornote z\u00e4hlt."
      :"F\u00fcr das Studienziel z\u00e4hlen alle f\u00fcnf Leistungen einfach (Auskunft Pr\u00fcfungsamt, Oktober 2026). In der Vornote z\u00e4hlen die Aufsichtsarbeiten "+(k==="hs1"?"zweifach":"dreifach")+", die Leistungsnachweise einfach.",8.2,C.grey);
    status(r.st,r.msg,r.sub);
  });

  /* Vornote */
  h2("Vornote","20 % der Abschlussnote \u00b7 \u00a7 29 I Nr. 1 APO",C.ab);
  const grp=[["Aufsichtsarbeiten Grundstudium",["gs1","gs2","gs3","gs4","gs5","gs6","gs7","gs8","gs9"],1],["Aufsichtsarbeiten Hauptstudium I",["h11","h12"],2],["Aufsichtsarbeiten Hauptstudium II",["h21","h22"],3],["Weitere Leistungsnachweise HS I und II",["h13","h14","h15","h23","h24","h25"],1]];
  let tS=0,tW=0;
  const vrows=grp.map(([l,ids,fa])=>{const vs=ids.map(val).filter(v=>v!==null),s=vs.reduce((a,b)=>a+b,0);tS+=s*fa;tW+=vs.length*fa;
    return [l,`${vs.length} von ${ids.length}`,String(s),"\u00d7"+fa,String(s*fa),String(vs.length*fa)];});
  vrows.push(["Gesamt",`${R.V.n} von 19`,"","",String(tS),String(tW)]);
  table([{h:"Gruppe",w:62},{h:"Eingetragen",w:22,al:"r"},{h:"Punkte",w:18,al:"r"},{h:"Faktor",w:16,al:"r"},{h:"Gewichtete Punkte",w:30,al:"r"},{h:"Anteile",w:30,al:"r"}],vrows,{sumRow:true});
  if(tW) calc(`Vornote = ${tS} gewichtete Punkte \u00f7 ${tW} Anteile = ${fmt(R.V.vn)} Punkte${R.V.n<19?" (vorl\u00e4ufig)":""}`);
  para("Vollst\u00e4ndig sind es 19 Leistungen mit zusammen 25 Anteilen: 9 \u00d7 1 + 2 \u00d7 2 + 2 \u00d7 3 + 6 \u00d7 1. Den Faktor der weiteren Leistungsnachweise nennt die APO nicht; er beruht auf der Auskunft des Pr\u00fcfungsamts (Oktober 2026).",8.2,C.grey);

  /* Laufbahnpruefung */
  const lp=R.lp;
  h2("Laufbahnpr\u00fcfung","Teile 1 bis 3 \u00b7 \u00a7\u00a7 20 bis 29 APO",C.lp);
  const ox=b=>b==null?"offen":b?"erf\u00fcllt":"nicht erf\u00fcllt";
  table([{h:"Pr\u00fcfungsteil",w:58},{h:"Einzelnoten",w:34},{h:"Ergebnis",w:22,al:"r"},{h:"Mindestanforderung",w:46},{h:"Stand",w:18}],[
    ["Teil 1: Diplomarbeit",lp.da==null?"offen":fmtP(lp.da),fmt(lp.da),"mindestens 04 (\u00a7 21 VIII)",ox(lp.daOk)],
    ["Teil 2: Schriftliche Pr\u00fcfung (3 Arbeiten zu je 4 Stunden)",["x1","x2","x3"].map(i=>val(i)==null?"--":fmtP(val(i))).join(" / "),fmt(lp.sp),"zwei Arbeiten mindestens 04, die dritte mindestens 01, \u00d8 mindestens 4,00 (\u00a7 25 II)",ox(lp.spOk)],
    ["Teil 3: M\u00fcndliche Pr\u00fcfung (je Fachgruppe eine Note)",["m1","m2"].map(i=>val(i)==null?"--":fmtP(val(i))).join(" / "),fmt(lp.mp),"\u00d8 mindestens 4,00, keine Fachgruppe 00 (\u00a7 27 III)",ox(lp.mpOk)]]);
  if(lp.xf.length===3) calc(`Schriftlich = (${sumStr(lp.xf.map(String))}) \u00f7 3 = ${fmt(lp.sp)}`);
  if(lp.mf.length===2) calc(`M\u00fcndlich = (${sumStr(lp.mf.map(String))}) \u00f7 2 = ${fmt(lp.mp)}`);
  status(lp.st,lp.msg,lp.sub);

  /* Abschlussnote */
  h2("So entsteht die Abschlussnote","\u00a7 29 I und II APO",C.ab);
  const L={vn:"Vornote",da:"Diplomarbeit",sp:"Schriftliche Pr\u00fcfung (\u00d8)",mp:"M\u00fcndliche Pr\u00fcfung (\u00d8)"};
  const arows=R.parts.map(p=>[L[p.k],fmt(p.pv),W[p.k]+" %",p.pv!=null?fmt(p.pv*W[p.k]/100):"--"]);
  arows.push([R.final!=null?"Abschlussnote":"Hochrechnung",fin==null?"--":fmt(fin),"100 %",fin==null?"--":fmt(fin)]);
  table([{h:"Bestandteil",w:86},{h:"Punkte",w:30,al:"r"},{h:"Gewicht",w:30,al:"r"},{h:"Beitrag",w:32,al:"r"}],arows,{sumRow:true});
  if(R.avail.length&&!R.failed){
    if(R.final!=null) calc(`Abschlussnote = ${R.parts.map(p=>`${fmt(p.v)} \u00d7 ${(W[p.k]/100).toFixed(2).replace(".",",")}`).join(" + ")} = ${fmt(R.final)}`);
    else{const kw=R.avail.reduce((a,p)=>a+W[p.k],0);
      calc(`Hochrechnung = (${R.avail.map(p=>`${fmt(p.pv)} \u00d7 ${W[p.k]}`).join(" + ")}) \u00f7 ${kw} = ${fmt(R.part)}`);
      para("Die Hochrechnung mittelt nur die schon vorhandenen Bestandteile nach ihrem Gewicht. Sie zeigt, wo du stehst, wenn du in den offenen Teilen so weitermachst wie bisher.",8.2,C.grey);}
  }
  if(R.failed) status("bad","Kein Gesamtergebnis","Mindestens ein Pr\u00fcfungsteil ist nicht bestanden. Dann wird kein Gesamtergebnis festgesetzt (\u00a7 29 IV).");
  else if(R.final!=null) status(ge(R.final,3.5)?"ok":"bad",ge(R.final,3.5)?`Laufbahnpr\u00fcfung bestanden mit \u201e${gradeOfAvg(R.final).w}\u201c`:"Laufbahnpr\u00fcfung nicht bestanden",ge(R.final,3.5)?"":"Gesamtergebnis unter 3,50 Punkten (\u00a7 29 II S. 2).");
  para("Jede Teilnote wird auf zwei Dezimalstellen berechnet, die dritte Stelle wird kaufm\u00e4nnisch gerundet (\u00a7 28 II). Bestanden ist die Laufbahnpr\u00fcfung ab einem Gesamtergebnis von 3,50 Punkten, wenn alle drei Pr\u00fcfungsteile bestanden sind (\u00a7 29 II).",8.2,C.grey);

  /* Notengrenzen und Hinweise */
  h2("Notengrenzen","\u00a7 28 I und \u00a7 29 II APO",C.grey);
  table([{h:"Note",w:62},{h:"Einzelleistung (Punkte)",w:58,al:"r"},{h:"Gesamtergebnis (Punkte)",w:58,al:"r"}],LIMITS);
  y+=2;need(26);
  doc.setDrawColor(...C.line);doc.line(M,y,M+CW,y);y+=5;
  para("Hinweise",9,C.navy,"bold");
  para("Dieser Notenrechner ist ein GitHub-Projekt des Dozenten J\u00fcrgen Paulus und keine offizielle App der FHSV. Daher kann keine Gew\u00e4hr f\u00fcr die Richtigkeit der Berechnung gegeben werden. Ma\u00dfgeblich ist allein die Festsetzung durch den Fachbereich und das Pr\u00fcfungsamt.",8.2,C.grey);
  para("Dieses Dokument wurde lokal auf deinem Ger\u00e4t erzeugt. Dabei wurden keine Daten an einen Server oder an Dritte \u00fcbertragen.",8.2,C.grey);

  /* Fusszeile */
  const n=doc.getNumberOfPages();
  for(let i=1;i<=n;i++){doc.setPage(i);doc.setDrawColor(...C.line);doc.line(M,286,PW-M,286);f("normal",7.5,C.grey);
    doc.text("Notenrechner Diplomstudium gD Polizei \u00b7 private Modellrechnung ohne Gew\u00e4hr",M,290.5);doc.text(`Seite ${i} von ${n}`,PW-M,290.5,{align:"right"});}
  deliver(doc.output("blob"),fname("pdf"));
}
async function exportDOCX(){
  const X=window.docx,D=reportData(),st=stamp();
  const {Document,Packer,Paragraph,TextRun,Table,TableRow,TableCell,WidthType,HeadingLevel,AlignmentType,ShadingType,BorderStyle}=X;
  const NAVY="1F4E8C",GREY="5A6878";
  const p=(t,o={})=>new Paragraph({spacing:{after:80},alignment:o.align,children:[new TextRun({text:t,bold:o.bold,color:o.color,size:o.size||20,font:"Calibri"})]});
  const h=t=>new Paragraph({spacing:{before:280,after:120},children:[new TextRun({text:t,bold:true,color:NAVY,size:26,font:"Calibri"})]});
  const border={style:BorderStyle.SINGLE,size:4,color:"D3DAE4"},nob={style:BorderStyle.NONE,size:0,color:"FFFFFF"};
  const tbl=(head,rows,widths,right)=>new Table({width:{size:100,type:WidthType.PERCENTAGE},
    borders:{top:nob,left:nob,right:nob,bottom:border,insideHorizontal:border,insideVertical:nob},
    rows:[new TableRow({tableHeader:true,children:head.map((c,i)=>new TableCell({width:{size:widths[i],type:WidthType.PERCENTAGE},shading:{type:ShadingType.CLEAR,fill:"E9EDF3",color:"auto"},children:[p(c,{bold:true,color:GREY,size:18,align:right.includes(i)?AlignmentType.RIGHT:undefined})]}))}),
      ...rows.map(r=>new TableRow({children:r.map((c,i)=>new TableCell({width:{size:widths[i],type:WidthType.PERCENTAGE},children:[p(String(c),{size:19,align:right.includes(i)?AlignmentType.RIGHT:undefined})]}))}))]});
  const who=[S.name,S.jg].filter(Boolean).join(" \u00b7 ");
  const ch=[
    new Paragraph({heading:HeadingLevel.TITLE,spacing:{after:80},children:[new TextRun({text:"Noten\u00fcbersicht Diplomstudium gD Polizei",bold:true,color:NAVY,size:36,font:"Calibri"})]}),
    p(`${who?who+" \u00b7 ":""}Stand ${st.de} \u00b7 APO g. D. Pol. 2024`,{color:GREY}),
    new Paragraph({spacing:{before:200,after:200},shading:{type:ShadingType.CLEAR,fill:"DBE6F5",color:"auto"},children:[
      new TextRun({text:D.finLabel+": ",color:GREY,size:22,font:"Calibri"}),
      new TextRun({text:D.fin==null?"--":`${fmt(D.fin)} Punkte, ${gradeOfAvg(D.fin).w} (Note ${gradeOfAvg(D.fin).g})`,bold:true,color:NAVY,size:30,font:"Calibri"})]}),
    h("Zusammensetzung der Abschlussnote"),
    tbl(["Bestandteil","Punkte","Gewicht","Beitrag"],D.ab,[49,17,17,17],[1,2,3])];
  D.secs.forEach(s=>{ch.push(h(s.title),tbl(["Leistung","Art","Punkte","Note"],s.rows,[36,30,12,22],[2]));
    s.sum.forEach(([k,v])=>ch.push(new Paragraph({spacing:{before:80,after:40},children:[new TextRun({text:k+": ",bold:true,size:20,font:"Calibri"}),new TextRun({text:v,size:20,font:"Calibri"})]})));});
  ch.push(h("Notengrenzen"),tbl(["Note","Einzelleistung","Gesamtergebnis"],LIMITS,[40,30,30],[1,2]),p(""),p(FOOT,{color:GREY,size:16}));
  const doc=new Document({creator:"Notenrechner gD Polizei",title:"Noten\u00fcbersicht",sections:[{properties:{page:{margin:{top:1000,bottom:1000,left:1000,right:1000}}},children:ch}]});
  const blob=await Packer.toBlob(doc);
  deliver(new Blob([blob],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"}),fname("docx"));
}
build();

if("serviceWorker" in navigator){addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));}
