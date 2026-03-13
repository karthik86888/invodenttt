import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { B } from "../../constants/brand";
import { BLOG_POSTS } from "../../data/BlogData";
import useIsMobile from "../../hooks/useIsMobile";
import GlobalNavbar from "../GlobalNavbar";
import Constellation from "../ui/Constellation";
import BackBtn from "../ui/BackBtn";
import Reveal from "../ui/Reveal";

export default function BlogPost() {
  const { slug } = useParams();
  const nav = useNavigate();
  const mob = useIsMobile();
  
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) nav("/blog");
  }, [post, nav]);

  if (!post) return null;

  return (
    <div style={{ minHeight: "100vh", background: "#060E1A", color: "#fff", fontFamily: "'Outfit', sans-serif" }}>
      <GlobalNavbar />
      <Constellation opacity={0.05} />

      {/* Hero Header */}
      <div style={{ position: "relative", height: mob ? "50vh" : "70vh", overflow: "hidden" }}>
        <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, #060E1A)" }} />
        
        <div style={{ position: "absolute", bottom: mob ? 40 : 80, left: 0, width: "100%", padding: mob ? "0 20px" : "0 60px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <Reveal>
              <div style={{ color: B.teal, fontSize: 14, fontWeight: 800, textTransform: "uppercase", letterSpacing: 3, marginBottom: 16 }}>
                {post.category} • {post.date}
              </div>
              <h1 style={{ fontSize: mob ? 32 : 56, fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
                {post.title}
              </h1>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: mob ? "40px 20px 100px" : "80px 60px 120px" }}>
        <div style={{ marginBottom: 40 }}>
          <BackBtn />
        </div>
        
        <Reveal>
          <div 
            className="blog-content"
            style={{ 
              color: "rgba(255,255,255,0.8)", 
              fontSize: mob ? 17 : 20, 
              lineHeight: 1.8,
              fontWeight: 400
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Reveal>

        <style>{`
          .blog-content h2 { color:#fff; font-size:32px; margin:40px 0 20px; font-weight:800; }
          .blog-content h3 { color:#fff; font-size:24px; margin:30px 0 15px; font-weight:700; }
          .blog-content p { margin-bottom:24px; }
          @media (max-width: 768px) {
            .blog-content h2 { font-size:26px; }
            .blog-content h3 { font-size:20px; }
          }
        `}</style>

        {/* Footer CTA */}
        <div style={{ marginTop: 80, padding: 40, background: "rgba(43,191,191,0.05)", borderRadius: 32, border: "1px solid rgba(43,191,191,0.15)", textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>Ready for a Transformation?</h2>
          <p style={{ color: B.slate, marginBottom: 24 }}>Book your priority consultation at Invodent today.</p>
          <button 
            onClick={() => nav("/book-appointment")}
            style={{ 
              background: B.grad, color: "#fff", border: "none", padding: "16px 40px", 
              borderRadius: 50, fontWeight: 800, cursor: "pointer", transition: "all 0.3s" 
            }}
          >
            Check Available Slots
          </button>
        </div>
      </div>
    </div>
  );
}
