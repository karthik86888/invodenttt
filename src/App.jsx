import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./responsive.css";

// ── SEO ──────────────────────────────────────────────────────────
import { getRouteMeta } from "./constants/routes";

// ── Page Components ──────────────────────────────────────────────
import GlobalNavbar from "./components/GlobalNavbar";
import HeroVideoSection from "./components/HeroVideoSection";
import FiveDoorsLanding from "./components/FiveDoorsLanding";
import ContactSection from "./components/ContactSection";

// ── Door Pages ───────────────────────────────────────────────────
import Door1 from "./components/doors/Door1";
import Door2 from "./components/doors/Door2";
import Door3 from "./components/doors/Door3";
import Door4 from "./components/doors/Door4";
import Door5 from "./components/doors/Door5";

/* ═══════════════════════════════════════════════════════════════
   LANDING — Combines the 3 scroll-snap sections
   ═══════════════════════════════════════════════════════════════ */
function LandingPage() {
  const scrollToSection = (index) => {
    const container = document.getElementById("landing-scroll");
    if (container) {
      const sections = container.children;
      if (sections[index]) sections[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <GlobalNavbar />
      <div id="landing-scroll" style={{ width: "100%", height: "100vh", overflowY: "auto", scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}>
        <HeroVideoSection onScrollDown={() => scrollToSection(1)} />
        <FiveDoorsLanding />
        <ContactSection />
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SEO HEAD — Updates <title> and <meta> per route
   ═══════════════════════════════════════════════════════════════ */
function SeoHead() {
  const { pathname } = useLocation();
  const meta = getRouteMeta(pathname);

  useEffect(() => {
    document.title = meta.title;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", meta.description);
  }, [meta]);

  return null;
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL RESTORATION — Scroll to top on route change
   ═══════════════════════════════════════════════════════════════ */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

/* ═══════════════════════════════════════════════════════════════
   APP — ROUTER
   ═══════════════════════════════════════════════════════════════ */
export default function App() {
  return (
    <div style={{ width: "100vw", minHeight: "100vh", fontFamily: "'Outfit',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html, body { background:#060E1A; color:#fff; overflow-x:hidden; scroll-behavior:smooth; }
        @keyframes bounce {
          0%, 100% { transform:translateY(0); }
          50% { transform:translateY(6px); }
        }
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        input::placeholder, textarea::placeholder, select { color:#6B7280 !important; }
        input:focus, select:focus, textarea:focus { border-color:rgba(43,191,191,0.55) !important; }
        button:hover { opacity:0.88; transform:translateY(-1px) !important; }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-thumb { background:rgba(43,191,191,0.3); border-radius:2px; }
        ::-webkit-calendar-picker-indicator { filter: invert(1); }
      `}</style>

      <SeoHead />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<Door1 />} />
        <Route path="/smile-gallery" element={<Door2 />} />
        <Route path="/dental-symptoms" element={<Door3 />} />
        <Route path="/dental-health-quiz" element={<Door4 />} />
        <Route path="/book-appointment" element={<Door5 />} />
      </Routes>
    </div>
  );
}
