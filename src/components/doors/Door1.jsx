import { useNavigate } from "react-router-dom";
import { B } from "../../constants/brand";
import { getPath } from "../../constants/routes";
import Constellation from "../ui/Constellation";
import BackBtn from "../ui/BackBtn";
import DoorNav from "../ui/DoorNav";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";
import GT from "../ui/GradientText";
import Btn from "../ui/Btn";
import useIsMobile from "../../hooks/useIsMobile";

export default function Door1() {
  const mob = useIsMobile();
  const nav = useNavigate();
  return (
    <div style={{ background: B.navy, minHeight: "100vh", fontFamily: "'Sora',sans-serif", position: "relative", overflowX: "hidden" }}>
      <Constellation opacity={0.15} count={mob ? 30 : 65} />
      <BackBtn />
      <DoorNav current={1} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: mob ? "72px 16px 48px" : "100px 32px 80px" }}>

        {/* Hero */}
        <Reveal delay="0s">
          <SectionLabel>Door 01 · Our Story</SectionLabel>
          <h1 style={{ fontSize: mob ? "clamp(32px,9vw,48px)" : "clamp(42px,6vw,82px)", fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1, letterSpacing: -2 }}>
            Behind the<br /><GT>White Coat.</GT>
          </h1>
          <p style={{ color: B.steel, fontSize: mob ? 14 : 16, maxWidth: 520, lineHeight: 1.8, marginBottom: mob ? 32 : 48 }}>
            Not just a dental clinic. Invodent is where international standards meet the warmth of Visakhapatnam — a place built by a doctor who refused to settle for ordinary.
          </p>
        </Reveal>

        {/* Stats */}
        <Reveal delay="0.15s">
          <div style={{ display: "grid", gridTemplateColumns: mob ? "repeat(3,1fr)" : "repeat(6,auto)", gap: mob ? 10 : 24, marginBottom: mob ? 40 : 72 }}>
            {[["5000+", "Patients Treated"], ["Est.", "2012"], ["4.9 ★", "Google Rating"], ["10+", "Treatments"], ["13+", "Years of Care"], ["2", "Expert Doctors"]].map(([n, l]) => (
              <div key={l} style={{ background: "rgba(43,191,191,0.07)", border: "1px solid rgba(43,191,191,0.15)", borderRadius: mob ? 12 : 16, padding: mob ? "14px 10px" : "20px 24px", textAlign: "center" }}>
                <div style={{ fontSize: mob ? 20 : 26, fontWeight: 900, background: B.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{n}</div>
                <div style={{ fontSize: mob ? 8 : 10, color: B.steel, letterSpacing: mob ? 1 : 2, textTransform: "uppercase", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Clinic Story */}
        <Reveal delay="0.2s">
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: mob ? 24 : 40, marginBottom: mob ? 48 : 80, alignItems: "start" }}>
            <div>
              <SectionLabel>The Story</SectionLabel>
              <h2 style={{ color: "#fff", fontSize: mob ? 22 : 28, fontWeight: 800, marginBottom: 20, lineHeight: 1.2 }}>
                One dentist. One vision.<br />One Visakhapatnam.
              </h2>
              <p style={{ color: B.steel, fontSize: mob ? 13 : 14, lineHeight: 1.9, marginBottom: 16 }}>
                In 2012, Dr. Venkata Mounika Madisa opened Invodent with a single conviction — that patients in Visakhapatnam deserved international-standard dental care, not a compromise. With an MDS in Orthodontics & Dentofacial Orthopaedics and a passion for precision, she built a clinic from the ground up at Balaji Nagar, Asilmetta.
              </p>
              <p style={{ color: B.steel, fontSize: mob ? 13 : 14, lineHeight: 1.9 }}>
                What followed was a decade of 5000+ smiles transformed, a team of award-winning specialists, and infrastructure that rivals top clinics in metro cities — digital X-rays, 3D imaging, sterilisation protocols at international standards.
              </p>
            </div>
            <div>
              <div style={{ background: "rgba(43,191,191,0.06)", border: "1px solid rgba(43,191,191,0.18)", borderRadius: mob ? 18 : 24, padding: mob ? 20 : 28, position: "relative", overflow: "hidden" }}>
                <div style={{ fontSize: mob ? 48 : 64, textAlign: "center", marginBottom: 12 }}>🏥</div>
                <div style={{ background: "linear-gradient(135deg,rgba(43,191,191,0.15),rgba(59,130,196,0.1))", borderRadius: 16, padding: mob ? "14px 16px" : "20px 24px", marginBottom: 12 }}>
                  <div style={{ color: B.teal, fontSize: 10, letterSpacing: 3, textTransform: "uppercase", marginBottom: 6 }}>Location</div>
                  <div style={{ color: "#fff", fontSize: mob ? 13 : 14, fontWeight: 700 }}>Invodent Dental Clinic</div>
                  <div style={{ color: B.steel, fontSize: mob ? 12 : 13 }}>Baker's Super Mart, Balaji Nagar, Asilmetta, Visakhapatnam, Andhra Pradesh 530003</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 10 }}>
                  {[["🕐", "Mon–Sat 9:30 AM–8 PM"], ["📞", "+91 83092 65054"], ["💉", "Digital X-rays & 3D Imaging"], ["🏆", "Award-Winning Specialists"]].map(([ic, tx]) => (
                    <div key={tx} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "12px 14px", display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ fontSize: 16 }}>{ic}</span>
                      <span style={{ color: B.steel, fontSize: 12, lineHeight: 1.4 }}>{tx}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Vision & Mission */}
        <Reveal delay="0.22s">
          <SectionLabel>Our Purpose</SectionLabel>
          <h2 style={{ color: "#fff", fontSize: mob ? 22 : 28, fontWeight: 800, marginBottom: mob ? 20 : 32, lineHeight: 1.2 }}>
            What <GT>Drives Us</GT>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: mob ? 16 : 24, marginBottom: mob ? 32 : 48 }}>
            <div style={{ background: "rgba(43,191,191,0.05)", border: "1px solid rgba(43,191,191,0.18)", borderRadius: 20, padding: mob ? 20 : 28, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: B.grad }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(43,191,191,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🔭</div>
                <span style={{ color: B.teal, fontSize: 13, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase" }}>Vision</span>
              </div>
              <p style={{ color: B.steel, fontSize: mob ? 13 : 14, lineHeight: 1.9 }}>
                To manifest excellence and establish ourselves as the hallmark of ethical dentistry while continuing to remain driven by our virtues of <strong style={{ color: "#fff" }}>uncompromised quality</strong>, <strong style={{ color: "#fff" }}>sustainability</strong>, <strong style={{ color: "#fff" }}>compassion</strong> and <strong style={{ color: "#fff" }}>prudence</strong>.
              </p>
            </div>
            <div style={{ background: "rgba(59,130,196,0.05)", border: "1px solid rgba(59,130,196,0.18)", borderRadius: 20, padding: mob ? 20 : 28, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#3B82C4,#2BBFBF)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(59,130,196,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🎯</div>
                <span style={{ color: B.blue, fontSize: 13, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase" }}>Mission</span>
              </div>
              <p style={{ color: B.steel, fontSize: mob ? 13 : 14, lineHeight: 1.9 }}>
                To consistently pursue dentistry with <strong style={{ color: "#fff" }}>passion</strong> and build <strong style={{ color: "#fff" }}>trust</strong> by bringing together the strength of our academic acumen and professional dexterity while exercising endurance and remaining conscious of our <strong style={{ color: "#fff" }}>responsibility towards the society</strong>.
              </p>
            </div>
          </div>

          <h3 style={{ color: "#fff", fontSize: mob ? 18 : 20, fontWeight: 800, marginBottom: 8, lineHeight: 1.2 }}>
            Our Values: <span style={{ color: B.teal }}>P.E.E.K.</span>
          </h3>
          <p style={{ color: B.steel, fontSize: 13, marginBottom: 24, lineHeight: 1.5 }}>
            The four pillars that guide everything we do at Invodent.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: mob ? 10 : 16, marginBottom: mob ? 48 : 80 }}>
            {[
              { letter: "P", name: "Passion", desc: "The fuel that drives us towards continuously being the best at everything we do.", color: B.teal },
              { letter: "E", name: "Ethics", desc: "The moral footing that our practice revolves around.", color: B.blue },
              { letter: "E", name: "Excellence", desc: "Our desire to be outstanding and striving to do more to achieve greatness.", color: B.gold },
              { letter: "K", name: "Knowledge", desc: "The supremacy we acquire with continuous learning, critical thinking and logic.", color: B.teal },
            ].map((v) => (
              <div key={v.name} style={{ display: "flex", alignItems: "flex-start", gap: mob ? 12 : 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: mob ? "14px 16px" : "20px 22px" }}>
                <div style={{ width: mob ? 40 : 48, height: mob ? 40 : 48, borderRadius: 14, background: `linear-gradient(135deg,${v.color}25,${v.color}08)`, border: `1.5px solid ${v.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: mob ? 18 : 22, fontWeight: 900, color: v.color, flexShrink: 0 }}>
                  {v.letter}
                </div>
                <div>
                  <div style={{ color: "#fff", fontSize: mob ? 14 : 15, fontWeight: 800, marginBottom: 4 }}>{v.name}</div>
                  <div style={{ color: B.steel, fontSize: mob ? 12 : 13, lineHeight: 1.6 }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Timeline */}
        <Reveal delay="0.25s">
          <SectionLabel>Our Journey</SectionLabel>
          <h2 style={{ color: "#fff", fontSize: mob ? 22 : 28, fontWeight: 800, marginBottom: mob ? 24 : 36, lineHeight: 1.2 }}>13 Years of Transforming Smiles</h2>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr 1fr" : "repeat(4,1fr)", gap: mob ? 16 : 0, marginBottom: mob ? 48 : 80, position: "relative" }}>
            {!mob && <div style={{ position: "absolute", top: 28, left: 40, right: 40, height: 2, background: "linear-gradient(90deg,#2BBFBF,#3B82C4,rgba(43,191,191,0.2))", zIndex: 0 }} />}
            {[
              { year: "2012", title: "Invodent Founded", desc: "Dr. Mounika opens Invodent at Balaji Nagar, Asilmetta with international-standard infrastructure.", color: B.teal },
              { year: "2017", title: "Award Recognition", desc: "Recognised as a leading orthodontic centre in Andhra Pradesh.", color: B.blue },
              { year: "2021", title: "Digital Expansion", desc: "Full digital upgrade — 3D imaging, laser dentistry & digital X-rays.", color: B.gold },
              { year: "2025", title: "5000+ Smiles", desc: "Milestone reached. Visakhapatnam's most trusted dental destination.", color: B.teal },
            ].map((t) => (
              <div key={t.year} style={{ position: "relative", zIndex: 1, paddingTop: mob ? 0 : 60, paddingRight: mob ? 0 : 16 }}>
                {mob ? (
                  <div style={{ background: "rgba(43,191,191,0.06)", border: `1px solid ${t.color}30`, borderRadius: 16, padding: "16px 14px", textAlign: "center" }}>
                    <div style={{ fontSize: 20, fontWeight: 900, color: t.color, marginBottom: 6 }}>{t.year}</div>
                    <div style={{ color: "#fff", fontSize: 13, fontWeight: 800, marginBottom: 4 }}>{t.title}</div>
                    <div style={{ color: B.steel, fontSize: 11, lineHeight: 1.5 }}>{t.desc}</div>
                  </div>
                ) : (
                  <>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", backgroundImage: `linear-gradient(135deg,${t.color}33,${t.color}11)`, backgroundColor: "#081221", border: `2px solid ${t.color}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, position: "absolute", top: 0, left: 0 }}>
                      <span style={{ color: t.color, fontSize: 11, fontWeight: 800 }}>{t.year}</span>
                    </div>
                    <div style={{ color: "#fff", fontSize: 14, fontWeight: 800, marginBottom: 6 }}>{t.title}</div>
                    <div style={{ color: B.steel, fontSize: 12, lineHeight: 1.6 }}>{t.desc}</div>
                  </>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Doctors */}
        <Reveal delay="0.3s">
          <SectionLabel>Meet the Team</SectionLabel>
          <h2 style={{ color: "#fff", fontSize: mob ? 22 : 28, fontWeight: 800, marginBottom: mob ? 20 : 32, lineHeight: 1.2 }}>The Specialists Behind Your Smile</h2>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: mob ? 16 : 24, marginBottom: mob ? 48 : 80 }}>
            {[
              { emoji: "👩‍⚕️", name: "Dr. Venkata Mounika Madisa", role: "Founder & Chief Orthodontist", qual: "MDS – Orthodontics & Dentofacial Orthopaedics · BDS", specs: ["Orthodontics", "Invisalign", "Clear Aligners", "Dental Aesthetics"], ach: "Award-winning specialist · Dental textbook contributor", bio: "Dr. Mounika brings over 13 years of clinical excellence to every patient. Her specialisation in orthodontics and dentofacial orthopaedics, combined with a relentless pursuit of aesthetic perfection, has made her one of the most sought-after orthodontists in Visakhapatnam." },
              { emoji: "👨‍⚕️", name: "Dr. Jaya Reddy Mettu", role: "Associate Dentist & Cosmetology Specialist", qual: "BDS · Fellowship in Medical Cosmetology · Mastership in Clinical Dentistry", specs: ["General Dentistry", "Cosmetic Procedures", "Facial Aesthetics"], ach: "Dual specialisation in dental & medical cosmetology", bio: "Dr. Jaya combines the art of dentistry with advanced cosmetology techniques. Her unique dual qualification in dental science and medical cosmetology makes her a rare specialist for patients seeking complete facial aesthetic transformation alongside dental care." },
            ].map(d => (
              <div key={d.name} style={{ background: "rgba(43,191,191,0.05)", border: "1px solid rgba(43,191,191,0.18)", borderRadius: mob ? 18 : 24, padding: mob ? 20 : 28, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: B.grad }} />
                <div style={{ fontSize: mob ? 40 : 52, marginBottom: 14 }}>{d.emoji}</div>
                <div style={{ color: "#fff", fontSize: mob ? 16 : 18, fontWeight: 800, marginBottom: 2 }}>{d.name}</div>
                <div style={{ color: B.teal, fontSize: mob ? 11 : 12, fontWeight: 600, marginBottom: 8 }}>{d.role}</div>
                <div style={{ color: B.steel, fontSize: mob ? 11 : 12, marginBottom: 14 }}>{d.qual}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                  {d.specs.map(s => <span key={s} style={{ background: "rgba(43,191,191,0.12)", border: "1px solid rgba(43,191,191,0.25)", borderRadius: 50, padding: "4px 12px", color: B.teal, fontSize: mob ? 10 : 11, fontWeight: 600 }}>{s}</span>)}
                </div>
                <div style={{ background: "rgba(240,192,64,0.08)", border: "1px solid rgba(240,192,64,0.2)", borderRadius: 12, padding: "10px 14px", marginBottom: 14 }}>
                  <span style={{ color: B.gold, fontSize: 11 }}>🏆 {d.ach}</span>
                </div>
                <p style={{ color: B.steel, fontSize: mob ? 12 : 13, lineHeight: 1.75 }}>{d.bio}</p>
                <Btn onClick={() => navigate("/book-appointment")} style={{ marginTop: 18, width: "100%", padding: "12px" }}>Book with {d.name.split(" ")[1]}</Btn>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Three pillars */}
        <Reveal delay="0.35s">
          <SectionLabel>Why Invodent</SectionLabel>
          <h2 style={{ color: "#fff", fontSize: mob ? 22 : 28, fontWeight: 800, marginBottom: 28 }}>International Care. Local Heart.</h2>
          <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "repeat(3,1fr)", gap: mob ? 12 : 16, marginBottom: mob ? 40 : 64 }}>
            {[
              { icon: "🔬", title: "State-of-the-Art Tech", desc: "Digital X-rays, 3D imaging, laser dentistry & sterilisation at international standards." },
              { icon: "🎓", title: "MDS-Qualified Team", desc: "Every specialist holds a postgraduate dental degree. No compromises on expertise." },
              { icon: "💚", title: "Transparent Pricing", desc: "No hidden costs. All treatment plans are shared upfront with complete cost clarity." },
            ].map(p => (
              <div key={p.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(43,191,191,0.12)", borderRadius: 20, padding: mob ? "18px 16px" : "24px 20px", textAlign: "center" }}>
                <div style={{ fontSize: mob ? 28 : 36, marginBottom: mob ? 10 : 14 }}>{p.icon}</div>
                <div style={{ color: "#fff", fontSize: mob ? 14 : 15, fontWeight: 700, marginBottom: 8 }}>{p.title}</div>
                <div style={{ color: B.steel, fontSize: mob ? 12 : 13, lineHeight: 1.7 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay="0.4s">
          <div style={{ textAlign: "center", paddingTop: mob ? 24 : 32, borderTop: "1px solid rgba(43,191,191,0.1)" }}>
            <p style={{ color: B.steel, fontSize: 14, marginBottom: 20 }}>But don't just take our word for it.</p>
            <Btn onClick={() => nav(getPath(2))} style={{ fontSize: mob ? 14 : 15, padding: mob ? "14px 32px" : "16px 48px" }}>See What Our Patients Say →</Btn>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
