import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { B, MYTHS } from "../../constants/brand";
import { getPath } from "../../constants/routes";
import BackBtn from "../ui/BackBtn";
import DoorNav from "../ui/DoorNav";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";
import GT from "../ui/GradientText";
import Btn from "../ui/Btn";
import useIsMobile from "../../hooks/useIsMobile";

export default function Door4() {
  const mob = useIsMobile();
  const nav = useNavigate();
  const [flipped, setFlipped] = useState({});
  const [hovCard, setHovCard] = useState(null);
  const revealed = Object.values(flipped).filter(Boolean).length;

  return (
    <div style={{ background: B.charcoal, minHeight: "100vh", fontFamily: "'Sora',sans-serif", position: "relative", overflowX: "hidden" }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(rgba(43,191,191,0.1) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
      <BackBtn />
      <DoorNav current={4} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: mob ? "72px 16px 48px" : "100px 32px 80px" }}>

        <Reveal>
          <SectionLabel color={B.gold}>Door 04 · Did You Know?</SectionLabel>
          <h1 style={{ fontSize: mob ? "clamp(28px,8vw,42px)" : "clamp(36px,5.5vw,72px)", fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.05, letterSpacing: -1.5 }}>
            Think You Know<br /><GT>Your Teeth?</GT>
          </h1>
          <p style={{ color: "#9CA3AF", fontSize: mob ? 13 : 15, maxWidth: 540, lineHeight: 1.8, marginBottom: 12 }}>
            5 myths that most people believe — and the truths that could save your smile. Tap each card to reveal the fact.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: mob ? 28 : 48 }}>
            <div style={{ height: 6, width: mob ? 140 : 180, background: "#1F2937", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${(revealed / MYTHS.length) * 100}%`, background: B.grad, transition: "width 0.5s ease", borderRadius: 3 }} />
            </div>
            <span style={{ color: "#6B7280", fontSize: 12 }}>{revealed}/{MYTHS.length} revealed</span>
          </div>
        </Reveal>

        {/* Myth/Fact cards */}
        <Reveal delay="0.15s">
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: mob ? 10 : 14, marginBottom: mob ? 40 : 72 }}>
            {MYTHS.slice(0, 4).map((m, i) => (
              <div key={i}
                onMouseEnter={() => !mob && setHovCard(i)}
                onMouseLeave={() => !mob && setHovCard(null)}
                onClick={() => setFlipped(f => ({ ...f, [i]: !f[i] }))}
                style={{ background: flipped[i] ? "rgba(43,191,191,0.07)" : "rgba(255,255,255,0.03)", border: `1.5px solid ${flipped[i] ? "rgba(43,191,191,0.35)" : hovCard === i ? "rgba(43,191,191,0.2)" : "rgba(255,255,255,0.07)"}`, borderRadius: mob ? 16 : 20, padding: mob ? "16px" : "24px", cursor: "pointer", transition: "all 0.3s", transform: (flipped[i] || hovCard === i) ? "scale(1.01)" : "scale(1)", minHeight: mob ? 100 : 130 }}>
                {!flipped[i] ? (
                  <div style={{ display: "flex", gap: mob ? 10 : 14, alignItems: "flex-start" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#EF4444", fontWeight: 800, fontSize: 13, flexShrink: 0 }}>✗</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: "#9CA3AF", fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 6 }}>Myth #{i + 1}</div>
                      <div style={{ color: "#E5E7EB", fontSize: mob ? 13 : 14, fontWeight: 700, lineHeight: 1.45 }}>{m.myth}</div>
                      <div style={{ color: "#4B5563", fontSize: 11, marginTop: 10 }}>Tap to reveal the truth →</div>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: "flex", gap: mob ? 10 : 14, alignItems: "flex-start", animation: "fadeInUp 0.3s ease" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: "rgba(43,191,191,0.15)", border: "1px solid rgba(43,191,191,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: B.teal, fontWeight: 800, fontSize: 13, flexShrink: 0 }}>✓</div>
                    <div>
                      <div style={{ color: B.teal, fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 6 }}>The Truth</div>
                      <div style={{ color: "#E2E8F0", fontSize: mob ? 13 : 14, lineHeight: 1.7 }}>{m.fact}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* 5th card spans full width */}
            <div onClick={() => setFlipped(f => ({ ...f, 4: !f[4] }))}
              style={{ gridColumn: "1 / -1", background: flipped[4] ? "rgba(43,191,191,0.07)" : "rgba(255,255,255,0.03)", border: `1.5px solid ${flipped[4] ? "rgba(43,191,191,0.35)" : "rgba(255,255,255,0.07)"}`, borderRadius: mob ? 16 : 20, padding: mob ? "16px" : "24px", cursor: "pointer", transition: "all 0.3s" }}>
              {!flipped[4] ? (
                <div style={{ display: "flex", gap: mob ? 10 : 14, alignItems: "center" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#EF4444", fontWeight: 800, fontSize: 13, flexShrink: 0 }}>✗</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "#9CA3AF", fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 4 }}>Myth #5</div>
                    <div style={{ color: "#E5E7EB", fontSize: mob ? 13 : 14, fontWeight: 700 }}>{MYTHS[4].myth}</div>
                  </div>
                  <div style={{ color: "#4B5563", fontSize: 11, flexShrink: 0 }}>Tap →</div>
                </div>
              ) : (
                <div style={{ display: "flex", gap: mob ? 10 : 14, alignItems: "center", animation: "fadeInUp 0.3s ease" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: "rgba(43,191,191,0.15)", border: "1px solid rgba(43,191,191,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: B.teal, fontWeight: 800, fontSize: 13, flexShrink: 0 }}>✓</div>
                  <div style={{ color: "#E2E8F0", fontSize: mob ? 13 : 14, lineHeight: 1.7 }}>{MYTHS[4].fact}</div>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        {/* Dental Care Tips */}
        <Reveal delay="0.2s">
          <div style={{ background: "rgba(43,191,191,0.05)", border: "1px solid rgba(43,191,191,0.2)", borderRadius: mob ? 20 : 28, padding: mob ? 20 : 36, marginBottom: 32, position: "relative", overflow: "hidden" }}>
            {!mob && <div style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(43,191,191,0.1),transparent 70%)", pointerEvents: "none" }} />}
            <SectionLabel>Prevention is Better Than Cure</SectionLabel>
            <h2 style={{ color: "#fff", fontSize: mob ? 20 : 28, fontWeight: 800, marginBottom: 10, lineHeight: 1.2 }}>The Invodent Way —<br />Healthy Teeth for Life.</h2>
            <p style={{ color: "#9CA3AF", fontSize: mob ? 13 : 14, lineHeight: 1.8, marginBottom: mob ? 16 : 28, maxWidth: 600 }}>
              Armed with the right knowledge, most dental problems are completely preventable.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr 1fr" : "repeat(3,1fr)", gap: mob ? 8 : 12, marginBottom: 24 }}>
              {[
                { icon: "🪥", title: "Brush Right", tip: "Soft bristles. Gentle circles. 2 minutes. Twice a day." },
                { icon: "🧵", title: "Floss Daily", tip: "Flossing reaches 40% of your tooth surface that your brush can't." },
                { icon: "💧", title: "Stay Hydrated", tip: "Water washes away food particles and bacteria." },
                { icon: "🍎", title: "Eat Smart", tip: "Crunchy fruits and vegetables naturally clean teeth." },
                { icon: "🦷", title: "Visit Every 6 Months", tip: "Professional cleaning removes tartar that brushing can't." },
                { icon: "😴", title: "Guard at Night", tip: "A custom night guard protects against teeth grinding." },
              ].map(c => (
                <div key={c.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(43,191,191,0.15)", borderRadius: mob ? 14 : 18, padding: mob ? "12px 10px" : "18px 16px" }}>
                  <div style={{ fontSize: mob ? 22 : 28, marginBottom: mob ? 4 : 8 }}>{c.icon}</div>
                  <div style={{ color: "#fff", fontSize: mob ? 11 : 13, fontWeight: 800, marginBottom: mob ? 4 : 6 }}>{c.title}</div>
                  <div style={{ color: "#9CA3AF", fontSize: mob ? 10 : 12, lineHeight: 1.6 }}>{c.tip}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Blog preview */}
        <Reveal delay="0.25s">
          <SectionLabel color={B.gold}>Dental Guides</SectionLabel>
          <h2 style={{ color: "#fff", fontSize: mob ? 20 : 24, fontWeight: 800, marginBottom: mob ? 16 : 24 }}>From Our Doctors' Desk</h2>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "repeat(3,1fr)", gap: mob ? 12 : 14, marginBottom: mob ? 36 : 56 }}>
            {[
              { tag: "Education", title: "5 Signs You Need a Root Canal (That Aren't Pain)", date: "Feb 2025", min: 5 },
              { tag: "Cosmetic", title: "Invisalign vs Braces in 2025 — Which Should You Choose?", date: "Mar 2025", min: 6 },
              { tag: "Prevention", title: "How Often Should You Really Visit Your Dentist?", date: "Jan 2025", min: 4 },
            ].map((b, i) => (
                <div key={i} 
                  onClick={() => {
                    const slugs = ["root-canal-signs", "invisalign-vs-braces", "dental-visit-frequency"];
                    nav(`/blog/${slugs[i]}`);
                  }}
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: mob ? 14 : 18, overflow: "hidden", cursor: "pointer", transition: "all 0.3s" }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(43,191,191,0.4)"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
                >
                  <div style={{ height: mob ? 80 : 120, overflow: "hidden", position: "relative" }}>
                    <img 
                      src={["/blog-tech.png", "/blog-invisalign.png", "/blog-hygiene.png"][i]} 
                      alt={b.title} 
                      style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} 
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(6,14,26,0.6))" }} />
                  </div>
                  <div style={{ padding: mob ? "12px 14px" : "16px 18px" }}>
                    <span style={{ background: B.grad, borderRadius: 50, padding: "3px 12px", color: "#fff", fontSize: 10, fontWeight: 700 }}>{b.tag}</span>
                    <div style={{ color: "#E5E7EB", fontSize: mob ? 12 : 13, fontWeight: 700, margin: "10px 0 6px", lineHeight: 1.45 }}>{b.title}</div>
                    <div style={{ color: "#6B7280", fontSize: 11 }}>{b.date} · {b.min} min read</div>
                  </div>
                </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay="0.3s">
          <div style={{ textAlign: "center", paddingTop: mob ? 24 : 32, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 20 }}>Ready to take action on what you've learned?</p>
            <Btn onClick={() => nav(getPath(5))} style={{ fontSize: mob ? 14 : 15, padding: mob ? "14px 32px" : "16px 48px" }}>Claim Your Smile →</Btn>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
