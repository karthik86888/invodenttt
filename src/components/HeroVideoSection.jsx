import { B } from "../constants/brand";
import Constellation from "./ui/Constellation";
import useIsMobile from "../hooks/useIsMobile";

/* ═══════════════════════════════════════════════════════════════
   SECTION 1 — HERO (Split: Text Left + YouTube Right)
   ═══════════════════════════════════════════════════════════════ */

export default function HeroVideoSection({ onScrollDown }) {
  const mob = useIsMobile();

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative", overflow: "hidden", flexShrink: 0, scrollSnapAlign: "start", background: "linear-gradient(135deg, #060E1A 0%, #0B1829 50%, #060E1A 100%)", fontFamily: "'Outfit',sans-serif" }}>

      {/* Subtle background constellation */}
      <Constellation opacity={0.08} count={mob ? 20 : 40} />

      {/* Background glow accents */}
      {!mob && <>
        <div style={{ position: "absolute", top: "20%", left: "-5%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${B.teal}08 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "10%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${B.blue}06 0%, transparent 70%)`, pointerEvents: "none" }} />
      </>}

      {/* Main split content */}
      <div style={{
        position: "relative", zIndex: 2, height: "100%",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: mob ? "70px 20px 20px" : "100px 60px 60px",
        gap: mob ? 12 : 60, maxWidth: 1300, margin: "0 auto",
        flexDirection: mob ? "column" : "row",
        flexWrap: "nowrap",
      }}>

        {/* ── LEFT: Text + CTA ── */}
        <div style={{ flex: "1 1 420px", minWidth: mob ? 0 : 340, width: mob ? "100%" : "auto", textAlign: mob ? "center" : "left" }}>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: mob ? "4px 12px" : "8px 18px", background: "rgba(43,191,191,0.08)", border: "1px solid rgba(43,191,191,0.2)", borderRadius: 50, marginBottom: mob ? 8 : 28, animation: "fadeInUp 0.6s ease" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: B.teal, display: "inline-block" }} />
            <span style={{ color: B.teal, fontSize: mob ? 8 : 12, fontWeight: 700, letterSpacing: mob ? 1 : 2, textTransform: "uppercase" }}>
              {mob ? "INVODENT DENTAL CARE" : "INVODENT DENTAL CARE AND ORTHODONTIC CENTRE"}
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: mob ? "clamp(22px,6.5vw,28px)" : "clamp(36px,5.5vw,64px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: mob ? 8 : 20, letterSpacing: -1, animation: "fadeInUp 0.8s ease" }}>
            Best Dental Care in<br />
            <span style={{ background: B.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Visakhapatnam</span>
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: mob ? 12 : "clamp(15px,1.6vw,19px)", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, maxWidth: mob ? "100%" : 460, marginBottom: mob ? 16 : 36, fontWeight: 400, animation: "fadeInUp 1s ease" }}>
            Working on your smile, before we get to your teeth.<br />
            13+ years of transforming lives at Invodent.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: mob ? 10 : 14, flexWrap: "wrap", animation: "fadeInUp 1.2s ease", justifyContent: mob ? "center" : "flex-start", flexDirection: mob ? "column" : "row" }}>
            <div onClick={() => {
              const el = document.getElementById('contact-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, background: B.grad, borderRadius: 50, padding: mob ? "12px 24px" : "16px 36px", color: "#fff", fontSize: mob ? 13 : 15, fontWeight: 800, letterSpacing: 0.5, boxShadow: `0 8px 35px rgba(43,191,191,0.3)`, transition: "transform 0.3s" }}>
              Book Free Consultation
            </div>
            <div onClick={onScrollDown} style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, background: "transparent", border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: 50, padding: mob ? "12px 24px" : "16px 36px", color: "#fff", fontSize: mob ? 13 : 15, fontWeight: 700, letterSpacing: 0.5, transition: "all 0.3s" }}>
              Explore Doors ↓
            </div>
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", gap: mob ? 10 : 20, marginTop: mob ? 12 : 36, alignItems: "center", animation: "fadeInUp 1.4s ease", justifyContent: mob ? "center" : "flex-start" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ color: B.teal, fontSize: mob ? 12 : 16 }}>★</span>
              <span style={{ color: "#fff", fontSize: mob ? 11 : 14, fontWeight: 700 }}>4.9</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: mob ? 10 : 12 }}>Google</span>
            </div>
            <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.1)" }} />
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: mob ? 10 : 12, fontWeight: 600 }}>
              5000+ Happy Smiles
            </div>
          </div>
        </div>

        {/* ── RIGHT: YouTube Video ── */}
        <div style={{ flex: mob ? "0 0 auto" : "1 1 480px", maxWidth: mob ? "300px" : "none", width: "100%", animation: "fadeInUp 1s ease" }}>
          <div style={{
            position: "relative", width: "100%", paddingBottom: "56.25%",
            borderRadius: mob ? 12 : 20, overflow: "hidden",
            boxShadow: `0 15px 40px rgba(0,0,0,0.5), 0 0 30px ${B.teal}10`,
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            <iframe
              src="https://www.youtube.com/embed/llRwDBSC3Jc?autoplay=1&mute=1&loop=1&playlist=llRwDBSC3Jc&controls=1&rel=0&modestbranding=1"
              title="Invodent Clinic Tour"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
          {/* Video caption */}
          {!mob && (
            <div style={{ marginTop: 14, textAlign: "center", color: "rgba(255,255,255,0.35)", fontSize: 12, fontWeight: 600, letterSpacing: 1 }}>
              🎬 Take a virtual tour of Invodent
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div onClick={onScrollDown} style={{ position: "absolute", bottom: mob ? 16 : 28, left: "50%", transform: "translateX(-50%)", zIndex: 5, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer" }}>
        <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, letterSpacing: 3, fontWeight: 600 }}>SCROLL DOWN</div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth="2" strokeLinecap="round" style={{ animation: "bounce 2s infinite" }}>
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </div>
  );
}
