import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { B, REVIEWS } from "../../constants/brand";
import { getPath } from "../../constants/routes";
import BackBtn from "../ui/BackBtn";
import DoorNav from "../ui/DoorNav";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";
import GT from "../ui/GradientText";
import Btn from "../ui/Btn";
import useIsMobile from "../../hooks/useIsMobile";

export default function Door2() {
  const mob = useIsMobile();
  const nav = useNavigate();
  const [activeR, setActiveR] = useState(0);
  const [activeBA, setActiveBA] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveR(a => (a + 1) % REVIEWS.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ background: "#F2F8FB", minHeight: "100vh", fontFamily: "'Sora',sans-serif", position: "relative", overflowX: "hidden" }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(rgba(43,191,191,0.07) 1.5px, transparent 1.5px)", backgroundSize: "26px 26px", pointerEvents: "none" }} />
      <BackBtn />
      <DoorNav current={2} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: mob ? "72px 16px 48px" : "100px 32px 80px" }}>

        <Reveal>
          <SectionLabel color={B.blue}>Door 02 · Our Patients</SectionLabel>
          <h1 style={{ fontSize: mob ? "clamp(32px,9vw,48px)" : "clamp(42px,6vw,82px)", fontWeight: 900, color: "#0B1829", margin: "0 0 16px", lineHeight: 1, letterSpacing: -2 }}>
            Smiles<br /><GT>Don't Lie.</GT>
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: mob ? 10 : 16, marginBottom: mob ? 32 : 48, flexWrap: "wrap" }}>
            <div style={{ background: B.grad, borderRadius: 50, padding: "8px 20px", color: "#fff", fontSize: mob ? 12 : 14, fontWeight: 800 }}>4.9 ★ Google</div>
            <span style={{ color: B.slate, fontSize: mob ? 12 : 14 }}>100+ verified reviews · 5000+ smiles</span>
          </div>
        </Reveal>

        {/* Featured rotating review */}
        <Reveal delay="0.15s">
          <div key={activeR} style={{ background: "#fff", borderRadius: mob ? 20 : 28, padding: mob ? 20 : 36, boxShadow: "0 24px 80px rgba(43,191,191,0.12)", border: "1px solid rgba(43,191,191,0.1)", marginBottom: 16, position: "relative", overflow: "hidden", animation: "fadeInUp 0.5s ease" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: B.grad }} />
            <div style={{ color: B.teal, fontSize: mob ? 18 : 24, letterSpacing: 3, marginBottom: mob ? 10 : 16 }}>{"★".repeat(REVIEWS[activeR].stars)}</div>
            <p style={{ color: "#0B1829", fontSize: mob ? 14 : 17, lineHeight: 1.85, margin: "0 0 24px", fontStyle: "italic", fontWeight: 500 }}>
              "{REVIEWS[activeR].quote}"
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: mob ? 36 : 48, height: mob ? 36 : 48, borderRadius: "50%", background: B.grad, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: mob ? 14 : 18 }}>{REVIEWS[activeR].name[0]}</div>
                <div>
                  <div style={{ color: "#0B1829", fontSize: mob ? 12 : 14, fontWeight: 800 }}>{REVIEWS[activeR].name}</div>
                  <div style={{ color: B.slate, fontSize: mob ? 11 : 12 }}>{REVIEWS[activeR].area}, Visakhapatnam</div>
                </div>
              </div>
              <span style={{ background: "rgba(43,191,191,0.1)", border: "1px solid rgba(43,191,191,0.2)", borderRadius: 50, padding: "6px 14px", color: B.teal, fontSize: mob ? 10 : 12, fontWeight: 700 }}>{REVIEWS[activeR].treatment}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: mob ? 40 : 64 }}>
            {REVIEWS.map((_, i) => (
              <div key={i} onClick={() => setActiveR(i)} style={{ height: 8, width: i === activeR ? 28 : 8, borderRadius: 4, background: i === activeR ? B.teal : "#D1DAE3", cursor: "pointer", transition: "all 0.3s" }} />
            ))}
          </div>
        </Reveal>

        {/* All reviews grid */}
        <Reveal delay="0.2s">
          <SectionLabel color={B.blue}>All Reviews</SectionLabel>
          <h2 style={{ color: "#0B1829", fontSize: mob ? 20 : 28, fontWeight: 800, marginBottom: mob ? 16 : 28 }}>Hear From Visakhapatnam's Happiest Smiles</h2>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "repeat(3,1fr)", gap: mob ? 12 : 16, marginBottom: mob ? 40 : 72 }}>
            {REVIEWS.map((r, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: mob ? 16 : 20, padding: mob ? 16 : 24, boxShadow: "0 4px 24px rgba(0,0,0,0.06)", border: "1px solid rgba(43,191,191,0.08)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: B.grad }} />
                <div style={{ color: B.teal, fontSize: 14, letterSpacing: 2, marginBottom: 10 }}>{"★".repeat(r.stars)}</div>
                <p style={{ color: "#374151", fontSize: mob ? 12 : 13, lineHeight: 1.75, margin: "0 0 16px", fontStyle: "italic" }}>"{r.quote}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: B.grad, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 14, flexShrink: 0 }}>{r.name[0]}</div>
                  <div>
                    <div style={{ color: "#0B1829", fontSize: 12, fontWeight: 700 }}>{r.name} · <span style={{ color: B.slate, fontWeight: 400 }}>{r.area}</span></div>
                    <div style={{ color: B.teal, fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase" }}>{r.treatment}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Before & After */}
        <Reveal delay="0.25s">
          <SectionLabel color={B.blue}>Transformations</SectionLabel>
          <h2 style={{ color: "#0B1829", fontSize: mob ? 20 : 28, fontWeight: 800, marginBottom: 16 }}>Before & After — The Proof</h2>
          <p style={{ color: B.slate, fontSize: mob ? 13 : 14, marginBottom: mob ? 16 : 28 }}>Real patients. Real results. No digital enhancements.</p>
          <div style={{ display: "flex", gap: mob ? 6 : 10, marginBottom: mob ? 14 : 20, flexWrap: "wrap" }}>
            {["All", "Orthodontics", "Invisalign", "Implants", "Cosmetic"].map((f, i) => (
              <button key={f} onClick={() => setActiveBA(i)} style={{ borderRadius: 50, padding: mob ? "6px 14px" : "7px 18px", border: activeBA === i ? "none" : "1px solid rgba(43,191,191,0.25)", background: activeBA === i ? B.grad : "#fff", color: activeBA === i ? "#fff" : B.slate, fontSize: mob ? 11 : 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s" }}>{f}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "repeat(3,1fr)", gap: mob ? 12 : 16, marginBottom: mob ? 40 : 72 }}>
            {["Smile Transformation", "Orthodontic Correction", "Implant Placement"].map((c, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
                <div style={{ height: mob ? 120 : 160, background: `linear-gradient(135deg, rgba(43,191,191,${0.1 + i * 0.05}), rgba(59,130,196,${0.1 + i * 0.05}))`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ flex: 1, height: "100%", background: "rgba(43,191,191,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: mob ? 28 : 36 }}>😐</div>
                    <div style={{ width: 3, height: "100%", background: B.grad, position: "relative" }}>
                      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 28, height: 28, borderRadius: "50%", background: B.grad, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 800 }}>⟺</div>
                    </div>
                    <div style={{ flex: 1, height: "100%", background: "rgba(59,130,196,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: mob ? 28 : 36 }}>😄</div>
                  </div>
                  <div style={{ position: "absolute", top: 8, left: 8, background: "rgba(0,0,0,0.5)", color: "#fff", fontSize: 9, borderRadius: 50, padding: "3px 10px" }}>BEFORE</div>
                  <div style={{ position: "absolute", top: 8, right: 8, background: B.teal, color: "#fff", fontSize: 9, borderRadius: 50, padding: "3px 10px" }}>AFTER</div>
                </div>
                <div style={{ padding: mob ? "12px 14px" : "16px 18px" }}>
                  <div style={{ color: "#0B1829", fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{c}</div>
                  <div style={{ color: B.slate, fontSize: 12 }}>Treatment at Invodent, Visakhapatnam</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Overall rating */}
        <Reveal delay="0.3s">
          <div style={{ background: "#fff", borderRadius: mob ? 18 : 24, padding: mob ? "24px 20px" : "36px 40px", boxShadow: "0 24px 80px rgba(43,191,191,0.1)", border: "1px solid rgba(43,191,191,0.12)", textAlign: "center", marginBottom: mob ? 40 : 64 }}>
            <div style={{ fontSize: mob ? 48 : 64, fontWeight: 900, background: B.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>4.9</div>
            <div style={{ color: B.teal, fontSize: mob ? 20 : 28, letterSpacing: 6, margin: "-8px 0 10px" }}>★★★★★</div>
            <div style={{ color: B.slate, fontSize: mob ? 12 : 14, marginBottom: mob ? 16 : 24 }}>Based on 100+ verified Google Reviews</div>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", flexDirection: mob ? "column" : "row" }}>
              <Btn onClick={() => window.open('https://www.google.com/maps/place/INVODENT+INTERNATIONAL+DENTAL+CARE+AND+ORTHODONTIC+CENTRE/@17.7247106,83.3172149,790m/data=!3m1!1e3!4m8!3m7!1s0x3a394391047b582b:0x4efa67ece6c3c412!8m2!3d17.7247055!4d83.3197898!9m1!1b1!16s%2Fg%2F11jzmn8zdk?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D', '_blank')} style={{ padding: "12px 28px" }}>Leave a Google Review ↗</Btn>
            </div>
          </div>
        </Reveal>

        <Reveal delay="0.35s">
          <div style={{ textAlign: "center", paddingTop: mob ? 24 : 32, borderTop: "1px solid rgba(43,191,191,0.12)" }}>
            <p style={{ color: B.slate, fontSize: 14, marginBottom: 20 }}>Now tell us — what's your dental concern?</p>
            <Btn onClick={() => nav(getPath(3))} style={{ fontSize: mob ? 14 : 15, padding: mob ? "14px 32px" : "16px 48px" }}>Tell Us Where It Hurts →</Btn>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
