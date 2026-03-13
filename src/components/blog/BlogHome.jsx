import React from "react";
import { useNavigate } from "react-router-dom";
import { B } from "../../constants/brand";
import { BLOG_POSTS } from "../../data/BlogData";
import useIsMobile from "../../hooks/useIsMobile";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import Constellation from "../ui/Constellation";
import GlobalNavbar from "../GlobalNavbar";
import BackBtn from "../ui/BackBtn";

export default function BlogHome() {
  const mob = useIsMobile();
  const nav = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "#060E1A", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>
      <GlobalNavbar />
      <Constellation opacity={0.05} />
      
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: mob ? "100px 20px 60px" : "140px 60px 100px" }}>
        <BackBtn />
        
        <Reveal>
          <SectionLabel color={B.teal}>Invodent Insights</SectionLabel>
          <h1 style={{ fontSize: mob ? 32 : 48, fontWeight: 900, marginBottom: 20, background: B.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            The Modern Dental Blog
          </h1>
          <p style={{ color: B.slate, fontSize: mob ? 16 : 18, maxWidth: 600, marginBottom: 60 }}>
            Exploring the intersection of advanced technology, cinematic aesthetics, and world-class dental care.
          </p>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "repeat(3, 1fr)", gap: 30 }}>
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <div 
                onClick={() => nav(`/blog/${post.slug}`)}
                style={{ 
                  background: "rgba(255,255,255,0.03)", 
                  borderRadius: 24, 
                  overflow: "hidden", 
                  border: "1px solid rgba(255,255,255,0.08)",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.borderColor = "rgba(43,191,191,0.3)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <div style={{ height: 220, overflow: "hidden" }}>
                  <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ color: B.teal, fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, marginBottom: 12 }}>
                    {post.category}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, lineHeight: 1.4 }}>{post.title}</h3>
                  <p style={{ color: B.slate, fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>{post.excerpt}</p>
                  <div style={{ color: "#fff", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                    Read Article <span style={{ color: B.teal }}>→</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
