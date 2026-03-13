import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { B, DOORS } from "../constants/brand";
import { getPath } from "../constants/routes";
import Constellation from "./ui/Constellation";
import useIsMobile from "../hooks/useIsMobile";

/* ═══════════════════════════════════════════════════════════════
   FIVE DOORS — LANDING PAGE
   Desktop: hover-expand panels
   Mobile:  horizontal snap-scroll cards
   ═══════════════════════════════════════════════════════════════ */

export default function FiveDoorsLanding() {
  const nav = useNavigate();
  const mob = useIsMobile();
  const [hov, setHov] = useState(null);
  const [clicked, setClicked] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [counter, setCounter] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const counterIntervalRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t); }, []);

  // Auto-animate counter 0→78 on page load
  const startCounter = useCallback(() => {
    if (counterIntervalRef.current) clearInterval(counterIntervalRef.current);
    setCounter(0);
    let c = 0;
    counterIntervalRef.current = setInterval(() => {
      c++;
      setCounter(c);
      if (c >= 78) clearInterval(counterIntervalRef.current);
    }, 25);
  }, []);

  useEffect(() => {
    startCounter();
    return () => { if (counterIntervalRef.current) clearInterval(counterIntervalRef.current); };
  }, [startCounter]);

  const handleClick = (id) => {
    setClicked(id);
    setTimeout(() => nav(getPath(id)), 600);
  };

  const getW = (id) => {
    if (!hov) return "20%";
    return hov === id ? "40%" : "15%";
  };

  // Track active card on mobile via scroll
  useEffect(() => {
    if (!mob || !scrollContainerRef.current) return;
    const el = scrollContainerRef.current;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.offsetWidth * 0.85 + 16; // 85vw + gap
      const idx = Math.round(scrollLeft / cardWidth);
      setActiveCard(Math.min(idx, DOORS.length - 1));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [mob]);

  // richer background per door
  const doorBgs = [
    "linear-gradient(165deg, #0B1829 0%, #0F2640 50%, #0B1829 100%)",
    "linear-gradient(165deg, #0A2A3A 0%, #0E3347 50%, #0A2A3A 100%)",
    "linear-gradient(165deg, #083344 0%, #0C4052 50%, #083344 100%)",
    "linear-gradient(165deg, #111827 0%, #1A2332 50%, #111827 100%)",
    "linear-gradient(165deg, #060E1A 0%, #0D1F30 50%, #060E1A 100%)",
  ];

  /* ═══════════════════ MOBILE: SNAP-SCROLL CARDS ═══════════════════ */
  if (mob) {
    return (
      <div style={{
        width: "100vw", height: "100vh", display: "flex", flexDirection: "column",
        overflow: "hidden", fontFamily: "'Outfit',sans-serif", position: "relative",
        background: "#060E1A", flexShrink: 0, scrollSnapAlign: "start",
        justifyContent: "center",
      }}>
        <Constellation opacity={0.12} count={30} />

        {/* Title */}
        <div style={{ position: "relative", zIndex: 3, textAlign: "center", padding: "0 20px", marginBottom: 20 }}>
          <div style={{ color: B.teal, fontSize: 10, letterSpacing: 4, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>DISCOVER</div>
          <h2 style={{ color: "#fff", fontSize: 24, fontWeight: 800, lineHeight: 1.15, margin: 0 }}>
            Five Doors to<br /><span style={{ background: B.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Your Smile</span>
          </h2>
        </div>

        {/* Snap-scroll container */}
        <div
          ref={scrollContainerRef}
          className="doors-snap-container"
          style={{
            display: "flex", gap: 16, overflowX: "auto",
            scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch",
            padding: "0 24px", position: "relative", zIndex: 3,
          }}
        >
          {DOORS.map((door, i) => (
            <div
              key={door.id}
              onClick={() => handleClick(door.id)}
              style={{
                flex: "0 0 80vw", minHeight: 380,
                background: doorBgs[i],
                borderRadius: 24, scrollSnapAlign: "center",
                position: "relative", overflow: "hidden",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                padding: "32px 24px", cursor: "pointer",
                border: `1.5px solid ${door.accent}30`,
                boxShadow: `0 8px 40px rgba(0,0,0,0.4), 0 0 20px ${door.accent}10`,
                transform: clicked === door.id ? "scale(0.96)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
            >
              {/* Constellation on each card */}
              <Constellation opacity={0.2} count={25} />

              {/* Gradient vignette */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 35%, transparent 65%, rgba(0,0,0,0.4) 100%)", zIndex: 1, pointerEvents: "none", borderRadius: 24 }} />

              {/* Glow */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle, ${door.accent}15 0%, transparent 70%)`, pointerEvents: "none", zIndex: 1 }} />

              {/* Top accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: B.grad, zIndex: 3, borderRadius: "24px 24px 0 0" }} />

              {/* Content */}
              <div style={{ position: "relative", zIndex: 3, textAlign: "center", width: "100%" }}>
                {/* Door content per card */}
                {i === 0 && (<>
                  <div style={{ fontSize: 40, marginBottom: 14 }}>🏥</div>
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: "#fff", lineHeight: 1.15, margin: "0 0 10px" }}>
                    About Our<br /><span style={{ color: B.teal }}>Clinic</span>
                  </h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: 20 }}>
                    Meet our doctors, our story, and why patients choose Invodent
                  </p>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "bounce 2s infinite" }}>
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </>)}

                {i === 1 && (<>
                  {/* Mini smile mosaic */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, maxWidth: 120, margin: "0 auto 16px" }}>
                    {["https://lh3.googleusercontent.com/aida-public/AB6AXuBSbAWPXh2shywCY_bowJitmjDBPV9G3w1elX_dj48UKSeNTt9YGggnpO04lLeX-bIe1HdDe3OwVokieKiJczaQKz6l4pOQLx9W3lDh4E6wmVQeLxkvuJsuUXRRwks86X61YfsHzDkf3vH3kzuMj23KF9JsewAfc6aHFhWJ3CdgiqbVyRLKlaTMs7HABapWZ2mgcku36XOIr86zCvrCgNK1PIun_dtTYzTbeJcjlHmbbm91AlyO6sD6evlE8YUtGOpKBoJ88Mou0XVn",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuDK8LkwkRytst1YCUEsXb42Vko94lUWMSRyQRYZ-MSfalCWq1vzInqvG3RKiU86DVrN_kLt7Gijr07LFXI3V-WYai2a96Ib30b_wKs1XP8cxRTA4z2Hu2ooGalAnQIXh0iVbEEQ9RjdVFv4Su7oJSKF9B4zeVf7UHnp2TTPnKRYh_nk0wdnJG6HsN5SKhRqbEEDfQN4LaJ1PQ4UFt29rjb721CUEZEjp_omOzQs-pPbK2Xgzb9n4lyGt01a6T0QGWlTU-jGDu7Q24h7",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsp6zeQsEi_9Xnl0eYeze5VukBCzSFyt_ecOp5aig1FYo0ZpFZMN59P8bVXmVPZAiNs0eWfoSimu_JdGTO2ITQUcSCH7NixWfkiFuXw-YX5CzagvA1Sla1XcVJ3ZjJ5v0DTNxg4fh46woF1rvS9QimKWD29ufujX23AboCsn8QAzJspEBdj8GrXZiVojND8yHcFSUjMYjElvTxdni2ISxagQH8LX7Fw5xrWHTOoJf4_f4CoYOAEUDm8Ej7LTOCU1CuZAYNpyeoCHN4",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyi41zTLxMvn394QWuuTHyHd-2YrZ20tOiluQcqvt9gOj10G84eMmukUp6g0wWWhOnl-khHpZVzr1nvDg0zLuu9ZLvUquVWVq6jr6zlEoguxaVuIt-sAxn7eV2_r8UxCSdhJT1SXN58ycw2Ecim6fiiGTslFA75UrhpxPe3jnA1vBUwssa2R1lJtwSBA-p3P-ujqLlwyFQ2l_2htqMfpAUhBw6Ni2LrzI47oX5B9m0HrQhvBk_he6ls9KszZJYtsveMmH4qfEeeKur"
                    ].map((src, j) => (
                      <div key={j} style={{ width: 52, height: 52, borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(43,191,191,0.25)" }}>
                        <img src={src} alt={`Smile ${j + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                    ))}
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: "#fff", lineHeight: 1.15, margin: "0 0 10px" }}>
                    Patient<br /><span style={{ color: B.teal }}>Results</span>
                  </h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginBottom: 14 }}>
                    Real transformations. Before & After gallery.
                  </p>
                  <span style={{ display: "inline-flex", padding: "6px 16px", background: "rgba(11,24,41,0.8)", borderRadius: 50, color: B.teal, fontSize: 11, fontWeight: 700, letterSpacing: 2 }}>
                    4.9 ★ GOOGLE
                  </span>
                </>)}

                {i === 2 && (<>
                  <svg width={80} height={80} viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="1.5" style={{ marginBottom: 16 }}>
                    <path d="M50 10 C30 10 20 25 20 45 C20 70 40 90 50 90 C60 90 80 70 80 45 C80 25 70 10 50 10 Z" />
                    <path d="M35 30 Q50 25 65 30" />
                    <path d="M40 70 Q50 85 60 70" />
                  </svg>
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: "#fff", lineHeight: 1.15, margin: "0 0 10px" }}>
                    Find Your<br /><span style={{ color: B.teal }}>Dental Issue</span>
                  </h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                    Select your symptom and get instant guidance.
                  </p>
                </>)}

                {i === 3 && (<>
                  <div style={{ marginBottom: 16 }}>
                    <span style={{ fontSize: 52, fontWeight: 700, color: B.teal, textShadow: `0 0 30px ${B.teal}40` }}>
                      {counter}%
                    </span>
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: "#fff", lineHeight: 1.15, margin: "0 0 10px" }}>
                    Dental<br /><span style={{ color: B.teal }}>Health Quiz</span>
                  </h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginBottom: 16 }}>
                    Test your dental knowledge in just 2 minutes.
                  </p>
                  <span style={{ display: "inline-block", padding: "8px 24px", border: `1.5px solid ${B.teal}`, borderRadius: 50, color: B.teal, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
                    Start Quiz
                  </span>
                </>)}

                {i === 4 && (<>
                  <div style={{ fontSize: 40, marginBottom: 14 }}>📅</div>
                  <h3 style={{ fontSize: 24, fontWeight: 800, color: "#fff", lineHeight: 1.15, margin: "0 0 10px" }}>
                    Book Your<br /><span style={{ color: B.teal }}>Appointment</span>
                  </h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, marginBottom: 16 }}>
                    Schedule your visit today. Walk-ins also welcome.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6, maxWidth: 200, margin: "0 auto" }}>
                    {[["📍", "Balaji Nagar, Asilmetta"], ["📞", "+91 83092 65054"], ["🕐", "Mon–Sat 9:30–8PM"]].map(([ic, tx]) => (
                      <div key={tx} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "8px 12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10 }}>
                        <span style={{ color: B.teal, fontSize: 13 }}>{ic}</span>
                        <span style={{ color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>{tx}</span>
                      </div>
                    ))}
                  </div>
                </>)}
              </div>

              {/* Bottom accent */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: B.grad, zIndex: 3, borderRadius: "0 0 24px 24px" }} />

              {/* Tap hint */}
              <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", zIndex: 5, color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: 2, fontWeight: 600, whiteSpace: "nowrap" }}>
                TAP TO ENTER →
              </div>
            </div>
          ))}
          {/* Spacer at end for last card snap */}
          <div style={{ flex: "0 0 8px" }} />
        </div>

        {/* Dot indicators */}
        <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 20, position: "relative", zIndex: 5 }}>
          {DOORS.map((d, i) => (
            <div key={d.id} style={{
              width: activeCard === i ? 24 : 8, height: 6,
              borderRadius: 3,
              background: activeCard === i ? B.teal : "rgba(255,255,255,0.15)",
              transition: "all 0.35s ease",
              boxShadow: activeCard === i ? `0 0 8px ${B.teal}` : "none",
            }} />
          ))}
        </div>

        {/* Bottom hint */}
        <div style={{ position: "relative", zIndex: 5, textAlign: "center", marginTop: 12, paddingBottom: 16 }}>
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, letterSpacing: 3, fontWeight: 600 }}>
            SWIPE TO EXPLORE · TAP TO ENTER
          </div>
        </div>
      </div>
    );
  }

  /* ═══════════════════ DESKTOP: HOVER-EXPAND PANELS ═══════════════════ */
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden", fontFamily: "'Outfit',sans-serif", position: "relative", background: "#060E1A", flexShrink: 0, scrollSnapAlign: "start" }}>

      {/* ── Five door panels ─────────────────────────── */}
      <div style={{ display: "flex", height: "100%", position: "relative" }}>
        {DOORS.map((door, i) => {
          const isHov = hov === door.id;
          const isClicked = clicked === door.id;
          return (
            <div key={door.id}
              onMouseEnter={() => setHov(door.id)}
              onMouseLeave={() => setHov(null)}
              onClick={() => handleClick(door.id)}
              style={{
                width: getW(door.id),
                height: "100%",
                background: doorBgs[i],
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "width 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.5s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRight: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none",
                transform: isClicked ? "scale(1.05)" : "scale(1)",
                opacity: loaded ? 1 : 0,
                transitionDelay: `${i * 0.08}s`,
              }}>

              <Constellation opacity={isHov ? 0.3 : 0.12} count={isHov ? 65 : 30} />

              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%,-50%)",
                width: isHov ? 340 : 0, height: isHov ? 340 : 0,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${door.accent}20 0%, ${door.accent}08 40%, transparent 70%)`,
                transition: "all 0.6s ease",
                pointerEvents: "none", zIndex: 1,
              }} />

              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.5) 100%)`, zIndex: 1, pointerEvents: "none" }} />

              <div style={{
                position: "absolute", inset: 0,
                border: isHov ? `2px solid ${door.accent}50` : "2px solid transparent",
                zIndex: 2, pointerEvents: "none",
                boxShadow: isHov ? `inset 0 0 80px ${door.accent}18, 0 0 30px ${door.accent}10` : "none",
                transition: "all 0.4s ease",
              }} />

              <div style={{ position: "relative", zIndex: 3, textAlign: "center", padding: "0 24px", width: "100%", transition: "all 0.45s ease", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                {i === 0 && (<>
                  <h2 style={{ fontSize: isHov ? "clamp(28px,3.2vw,40px)" : "clamp(20px,2.2vw,30px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, margin: "0 0 16px", transition: "font-size 0.45s ease" }}>
                    About Our<br /><span style={{ color: B.teal }}>Clinic</span>
                  </h2>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: isHov ? 24 : 12, transition: "all 0.4s" }}>
                    Meet our doctors, our story,<br />and why patients choose Invodent
                  </p>
                  <div style={{ opacity: isHov ? 1 : 0.4, transition: "opacity 0.4s" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={B.teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "bounce 2s infinite" }}>
                      <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </>)}

                {i === 1 && (<>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, maxWidth: isHov ? 180 : 140, margin: "0 auto 20px", transition: "all 0.4s" }}>
                    {["https://lh3.googleusercontent.com/aida-public/AB6AXuBSbAWPXh2shywCY_bowJitmjDBPV9G3w1elX_dj48UKSeNTt9YGggnpO04lLeX-bIe1HdDe3OwVokieKiJczaQKz6l4pOQLx9W3lDh4E6wmVQeLxkvuJsuUXRRwks86X61YfsHzDkf3vH3kzuMj23KF9JsewAfc6aHFhWJ3CdgiqbVyRLKlaTMs7HABapWZ2mgcku36XOIr86zCvrCgNK1PIun_dtTYzTbeJcjlHmbbm91AlyO6sD6evlE8YUtGOpKBoJ88Mou0XVn",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuDK8LkwkRytst1YCUEsXb42Vko94lUWMSRyQRYZ-MSfalCWq1vzInqvG3RKiU86DVrN_kLt7Gijr07LFXI3V-WYai2a96Ib30b_wKs1XP8cxRTA4z2Hu2ooGalAnQIXh0iVbEEQ9RjdVFv4Su7oJSKF9B4zeVf7UHnp2TTPnKRYh_nk0wdnJG6HsN5SKhRqbEEDfQN4LaJ1PQ4UFt29rjb721CUEZEjp_omOzQs-pPbK2Xgzb9n4lyGt01a6T0QGWlTU-jGDu7Q24h7",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsp6zeQsEi_9Xnl0eYeze5VukBCzSFyt_ecOp5aig1FYo0ZpFZMN59P8bVXmVPZAiNs0eWfoSimu_JdGTO2ITQUcSCH7NixWfkiFuXw-YX5CzagvA1Sla1XcVJ3ZjJ5v0DTNxg4fh46woF1rvS9QimKWD29ufujX23AboCsn8QAzJspEBdj8GrXZiVojND8yHcFSUjMYjElvTxdni2ISxagQH8LX7Fw5xrWHTOoJf4_f4CoYOAEUDm8Ej7LTOCU1CuZAYNpyeoCHN4",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyi41zTLxMvn394QWuuTHyHd-2YrZ20tOiluQcqvt9gOj10G84eMmukUp6g0wWWhOnl-khHpZVzr1nvDg0zLuu9ZLvUquVWVq6jr6zlEoguxaVuIt-sAxn7eV2_r8UxCSdhJT1SXN58ycw2Ecim6fiiGTslFA75UrhpxPe3jnA1vBUwssa2R1lJtwSBA-p3P-ujqLlwyFQ2l_2htqMfpAUhBw6Ni2LrzI47oX5B9m0HrQhvBk_he6ls9KszZJYtsveMmH4qfEeeKur"
                    ].map((src, j) => (
                      <div key={j} style={{ width: isHov ? 80 : 60, height: isHov ? 80 : 60, borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(43,191,191,0.25)", transition: "all 0.4s ease" }}>
                        <img src={src} alt={`Smile ${j + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                    ))}
                  </div>
                  <h2 style={{ fontSize: isHov ? "clamp(28px,3.2vw,40px)" : "clamp(20px,2.2vw,30px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, margin: "0 0 12px", transition: "font-size 0.45s" }}>
                    Patient<br /><span style={{ color: B.teal }}>Results</span>
                  </h2>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginBottom: 16 }}>
                    Real transformations.<br />Before & After gallery.
                  </p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 16px", background: "rgba(11,24,41,0.8)", borderRadius: 50, color: B.teal, fontSize: 11, fontWeight: 700, letterSpacing: 2 }}>
                    4.9 ★ GOOGLE
                  </span>
                </>)}

                {i === 2 && (<>
                  <div style={{ marginBottom: 20, opacity: isHov ? 1 : 0.85, transition: "opacity 0.4s" }}>
                    <svg width={isHov ? 120 : 90} height={isHov ? 120 : 90} viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="1.5" style={{ transition: "all 0.4s" }}>
                      <path d="M50 10 C30 10 20 25 20 45 C20 70 40 90 50 90 C60 90 80 70 80 45 C80 25 70 10 50 10 Z" />
                      <path d="M35 30 Q50 25 65 30" />
                      <path d="M40 70 Q50 85 60 70" />
                    </svg>
                  </div>
                  <h2 style={{ fontSize: isHov ? "clamp(28px,3.2vw,40px)" : "clamp(20px,2.2vw,30px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, margin: "0 0 12px", transition: "font-size 0.45s" }}>
                    Find Your<br /><span style={{ color: B.teal }}>Dental Issue</span>
                  </h2>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                    Select your symptom and<br />get instant guidance.
                  </p>
                </>)}

                {i === 3 && (<>
                  <div style={{ marginBottom: 20 }} onMouseEnter={() => startCounter()}>
                    <span style={{ fontSize: isHov ? 72 : 54, fontWeight: 700, color: B.teal, transition: "font-size 0.4s", textShadow: isHov ? `0 0 30px ${B.teal}60` : "none" }}>
                      {counter}%
                    </span>
                  </div>
                  <h2 style={{ fontSize: isHov ? "clamp(28px,3.2vw,40px)" : "clamp(20px,2.2vw,30px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, margin: "0 0 12px", transition: "font-size 0.45s" }}>
                    Dental<br /><span style={{ color: B.teal }}>Health Quiz</span>
                  </h2>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginBottom: isHov ? 20 : 8, transition: "all 0.4s" }}>
                    Test your dental knowledge<br />in just 2 minutes.
                  </p>
                  <div style={{ opacity: isHov ? 1 : 0, transform: isHov ? "translateY(0)" : "translateY(8px)", transition: "all 0.4s" }}>
                    <span style={{ display: "inline-block", padding: "8px 24px", border: `1.5px solid ${B.teal}`, borderRadius: 50, color: B.teal, fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
                      Start Quiz
                    </span>
                  </div>
                </>)}

                {i === 4 && (<>
                  <h2 style={{ fontSize: isHov ? "clamp(28px,3.2vw,40px)" : "clamp(20px,2.2vw,30px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, margin: "0 0 12px", transition: "font-size 0.45s" }}>
                    Book Your<br /><span style={{ color: B.teal }}>Appointment</span>
                  </h2>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, marginBottom: isHov ? 20 : 10, transition: "all 0.4s" }}>
                    Schedule your visit today.<br />Walk-ins also welcome.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: isHov ? 220 : 180, margin: "0 auto", opacity: isHov ? 1 : 0.5, transition: "all 0.4s" }}>
                    {[["📍", "Balaji Nagar, Asilmetta"], ["📞", "+91 83092 65054"], ["🕐", "Mon–Sat 9:30–8PM"]].map(([ic, tx]) => (
                      <div key={tx} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "10px 14px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, transition: "border-color 0.3s" }}>
                        <span style={{ color: B.teal, fontSize: 14 }}>{ic}</span>
                        <span style={{ color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>{tx}</span>
                      </div>
                    ))}
                  </div>
                </>)}

              </div>

              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: isHov ? 4 : 2,
                background: isHov ? B.grad : `${door.accent}40`,
                opacity: isHov ? 1 : 0.4,
                transition: "all 0.4s ease", zIndex: 3,
                boxShadow: isHov ? `0 0 20px ${door.accent}50` : "none",
              }} />

              <div style={{
                position: "absolute", top: 0, left: 0, right: 0,
                height: isHov ? 3 : 0,
                background: B.grad,
                transition: "all 0.4s ease", zIndex: 3,
                opacity: isHov ? 0.6 : 0,
              }} />
            </div>
          );
        })}
      </div>

      {/* ── Bottom hint ─────────────────────────────── */}
      <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, letterSpacing: 3, textAlign: "center", whiteSpace: "nowrap", fontWeight: 600 }}>
          HOVER TO PREVIEW · CLICK TO ENTER
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {DOORS.map((d) => (
            <div key={d.id} style={{
              width: hov === d.id ? 24 : 8, height: 4,
              borderRadius: 2,
              background: hov === d.id ? B.teal : "rgba(255,255,255,0.15)",
              transition: "all 0.35s ease",
              boxShadow: hov === d.id ? `0 0 8px ${B.teal}` : "none",
            }} />
          ))}
        </div>
      </div>

      {/* ── Progress bar ─────────────────────────────── */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "rgba(43,191,191,0.12)", zIndex: 10 }}>
        <div style={{ height: "100%", width: "20%", background: B.grad, boxShadow: `0 0 12px ${B.teal}40` }} />
      </div>
    </div>
  );
}
