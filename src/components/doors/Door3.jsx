import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { B, PROBLEMS, SERVICES_ALL } from "../../constants/brand";
import { getPath } from "../../constants/routes";
import Constellation from "../ui/Constellation";
import BackBtn from "../ui/BackBtn";
import DoorNav from "../ui/DoorNav";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";
import GT from "../ui/GradientText";
import Btn from "../ui/Btn";
import useIsMobile from "../../hooks/useIsMobile";

export default function Door3() {
  const mob = useIsMobile();
  const nav = useNavigate();
  const [sel, setSel] = useState(null);
  const problem = PROBLEMS.find(p => p.id === sel);

  return (
    <div style={{ background: "#071E2E", minHeight: "100vh", fontFamily: "'Sora',sans-serif", position: "relative", overflowX: "hidden" }}>
      <Constellation opacity={0.18} count={mob ? 25 : 55} />
      <BackBtn />
      <DoorNav current={3} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: mob ? "72px 16px 48px" : "100px 32px 80px" }}>

        <Reveal>
          <SectionLabel>Door 03 · Your Problem</SectionLabel>
          <h1 style={{ fontSize: mob ? "clamp(30px,8vw,44px)" : "clamp(38px,5.5vw,76px)", fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.05, letterSpacing: -1.5 }}>
            Tell Us Where<br /><GT>It Hurts.</GT>
          </h1>
          <p style={{ color: B.steel, fontSize: mob ? 14 : 16, maxWidth: 500, lineHeight: 1.8, marginBottom: mob ? 28 : 48 }}>
            Tap your problem. We'll show you exactly which treatment you need, how long it takes, and what it costs at Invodent.
          </p>
        </Reveal>

        {/* Problem selector */}
        <Reveal delay="0.15s">
          <div style={{ display: "grid", gridTemplateColumns: mob ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: mob ? 8 : 12, marginBottom: mob ? 20 : 32 }}>
            {PROBLEMS.map(p => (
              <div key={p.id} onClick={() => setSel(sel === p.id ? null : p.id)}
                style={{ background: sel === p.id ? "rgba(43,191,191,0.14)" : "rgba(255,255,255,0.04)", border: `1.5px solid ${sel === p.id ? B.teal : "rgba(43,191,191,0.15)"}`, borderRadius: mob ? 14 : 20, padding: mob ? "14px 10px" : "20px 14px", cursor: "pointer", textAlign: "center", transition: "all 0.25s", transform: sel === p.id ? "scale(1.04)" : "scale(1)", backdropFilter: "blur(8px)" }}>
                <div style={{ fontSize: mob ? 26 : 34, marginBottom: mob ? 6 : 10 }}>{p.emoji}</div>
                <div style={{ color: sel === p.id ? "#fff" : "#CBD5E1", fontSize: mob ? 10 : 12, fontWeight: 700, lineHeight: 1.35 }}>{p.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Treatment reveal panel */}
        {problem ? (
          <div key={problem.id} style={{ background: "rgba(43,191,191,0.07)", border: "1px solid rgba(43,191,191,0.3)", borderRadius: mob ? 18 : 24, padding: mob ? 20 : 32, marginBottom: mob ? 32 : 48, animation: "fadeInUp 0.35s ease" }}>
            <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: mob ? 20 : 32, alignItems: "start" }}>
              <div>
                <div style={{ color: B.teal, fontSize: 10, letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>Recommended Treatment</div>
                <h2 style={{ color: "#fff", fontSize: mob ? 22 : 28, fontWeight: 900, margin: "0 0 12px" }}>{problem.treatment}</h2>
                <p style={{ color: B.steel, fontSize: mob ? 13 : 14, lineHeight: 1.8, marginBottom: 20 }}>{problem.desc}</p>

              </div>
              <div>
                {!mob && <div style={{ fontSize: 72, textAlign: "center", marginBottom: 16 }}>{problem.icon}</div>}
                <Btn style={{ width: "100%", padding: "14px" }} onClick={() => nav(getPath(5))}>Book This Treatment →</Btn>
                <button onClick={() => setSel(null)} style={{ width: "100%", marginTop: 10, padding: "12px", background: "transparent", border: "1px solid rgba(43,191,191,0.2)", borderRadius: 50, color: B.steel, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>← Choose a different problem</button>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ background: "rgba(255,255,255,0.03)", border: "1px dashed rgba(43,191,191,0.2)", borderRadius: mob ? 18 : 24, padding: mob ? 20 : 28, marginBottom: mob ? 32 : 48, textAlign: "center" }}>
            <div style={{ color: B.steel, fontSize: 14 }}>← Tap any problem above to see your treatment plan</div>
          </div>
        )}

        {/* All services */}
        <Reveal delay="0.2s">
          <SectionLabel>All Services</SectionLabel>
          <h2 style={{ color: "#fff", fontSize: mob ? 20 : 28, fontWeight: 800, marginBottom: mob ? 16 : 28 }}>Everything Under One Roof — Balaji Nagar, Asilmetta</h2>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "repeat(2,1fr)", gap: mob ? 10 : 12, marginBottom: mob ? 40 : 64 }}>
            {SERVICES_ALL.map(s => (
              <div key={s.name} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(43,191,191,0.12)", borderRadius: 16, padding: mob ? "14px 16px" : "18px 20px", display: "flex", gap: mob ? 10 : 14, alignItems: "flex-start" }}>
                <span style={{ fontSize: mob ? 22 : 28, flexShrink: 0 }}>{s.icon}</span>
                <div>
                  <div style={{ color: "#fff", fontSize: mob ? 13 : 14, fontWeight: 700, marginBottom: 3 }}>{s.name}</div>
                  <div style={{ color: B.steel, fontSize: mob ? 11 : 12, lineHeight: 1.5 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Why choose */}
        <Reveal delay="0.25s">
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "repeat(3,1fr)", gap: mob ? 12 : 16, marginBottom: mob ? 40 : 64 }}>
            {[
              { icon: "💊", title: "Painless Techniques", desc: "Advanced anaesthesia and modern equipment ensures all procedures at Invodent are comfortable and stress-free." },
              { icon: "🎓", title: "MDS-Qualified Specialists", desc: "Every treatment is performed by a postgraduate-qualified specialist — not a generalist with a weekend certificate." },
              { icon: "📋", title: "Transparent Cost Plans", desc: "No hidden fees. Full treatment cost breakdowns provided before any procedure begins." },
            ].map(c => (
              <div key={c.title} style={{ background: "rgba(43,191,191,0.06)", border: "1px solid rgba(43,191,191,0.15)", borderRadius: 20, padding: mob ? "18px 16px" : "24px 20px", textAlign: "center" }}>
                <div style={{ fontSize: mob ? 28 : 36, marginBottom: mob ? 10 : 14 }}>{c.icon}</div>
                <div style={{ color: "#fff", fontSize: mob ? 14 : 15, fontWeight: 700, marginBottom: 8 }}>{c.title}</div>
                <div style={{ color: B.steel, fontSize: mob ? 12 : 13, lineHeight: 1.7 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay="0.3s">
          <div style={{ textAlign: "center", paddingTop: mob ? 24 : 32, borderTop: "1px solid rgba(43,191,191,0.1)" }}>
            <p style={{ color: B.steel, fontSize: 14, marginBottom: 20 }}>But do you really know your teeth?</p>
            <Btn onClick={() => nav(getPath(4))} style={{ fontSize: mob ? 14 : 15, padding: mob ? "14px 32px" : "16px 48px" }}>Think You Know Your Teeth? →</Btn>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
