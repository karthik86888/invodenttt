import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { B, SERVICES_ALL } from "../../constants/brand";
import { getPath } from "../../constants/routes";
import Constellation from "../ui/Constellation";
import BackBtn from "../ui/BackBtn";
import DoorNav from "../ui/DoorNav";
import Reveal from "../ui/Reveal";
import SectionLabel from "../ui/SectionLabel";
import GT from "../ui/GradientText";
import Btn from "../ui/Btn";
import useIsMobile from "../../hooks/useIsMobile";

export default function Door5() {
  const mob = useIsMobile();
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", email: "", treatment: "", date: "", msg: "" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || form.phone.trim().replace(/\D/g, "").length < 10) e.phone = "Enter a valid 10-digit number";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const submit = async () => {
    if (!validate()) return;

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("access_key", "48aa6597-c249-41be-b6c2-6be0ca4b6337");
    formData.append("subject", "New Appointment Request - Door 5");
    formData.append("name", form.name);
    formData.append("phone", form.phone);
    if (form.email) formData.append("email", form.email);
    if (form.treatment) formData.append("treatment", form.treatment);
    if (form.date) formData.append("preferred_date", form.date);
    if (form.msg) formData.append("message", form.msg);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setDone(true);
      } else {
        alert("Oops! Something went wrong sending the request. Please call instead.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try calling us instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputS = (field) => ({
    width: "100%", padding: mob ? "12px 14px" : "14px 18px", borderRadius: 14,
    border: `1.5px solid ${errors[field] ? "#EF4444" : "rgba(43,191,191,0.2)"}`,
    background: "rgba(43,191,191,0.04)", color: "#fff",
    fontSize: mob ? 13 : 14, outline: "none", fontFamily: "inherit", boxSizing: "border-box",
    transition: "border-color 0.25s",
  });

  return (
    <div style={{ background: "#060E1A", minHeight: "100vh", fontFamily: "'Sora',sans-serif", position: "relative", overflowX: "hidden" }}>
      <Constellation opacity={0.28} count={mob ? 30 : 70} />
      <BackBtn />
      <DoorNav current={5} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: mob ? "72px 16px 48px" : "100px 32px 80px" }}>

        {!done ? (
          <>
            <Reveal>
              <SectionLabel>Door 05 · Book Now</SectionLabel>
              <h1 style={{ fontSize: mob ? "clamp(32px,9vw,48px)" : "clamp(42px,6vw,80px)", fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1, letterSpacing: -1.5 }}>
                Claim<br /><GT>Your Smile.</GT>
              </h1>
              <p style={{ color: B.steel, fontSize: mob ? 14 : 16, maxWidth: 500, lineHeight: 1.8, marginBottom: mob ? 28 : 48 }}>
                Your transformation is one appointment away. Choose your treatment, pick a time, and let Invodent do the rest.
              </p>
            </Reveal>

            <Reveal delay="0.15s">
              <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: mob ? 24 : 40, alignItems: "start" }}>

                {/* Form */}
                <div style={{ background: "rgba(43,191,191,0.04)", border: "1px solid rgba(43,191,191,0.18)", borderRadius: mob ? 20 : 28, padding: mob ? 20 : 32, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: B.grad }} />
                  <div style={{ color: B.teal, fontSize: 10, letterSpacing: 3, textTransform: "uppercase", marginBottom: mob ? 14 : 20, fontWeight: 700 }}>Appointment Request Form</div>

                  <div style={{ display: "flex", flexDirection: "column", gap: mob ? 10 : 14 }}>
                    <div>
                      <label style={{ color: B.steel, fontSize: 12, marginBottom: 6, display: "block", letterSpacing: 0.5 }}>Full Name *</label>
                      <input placeholder="Dr. / Mr. / Ms. Your Name" value={form.name}
                        onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: "" })); }}
                        style={inputS("name")} />
                      {errors.name && <div style={{ color: "#EF4444", fontSize: 11, marginTop: 4 }}>{errors.name}</div>}
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: 12 }}>
                      <div>
                        <label style={{ color: B.steel, fontSize: 12, marginBottom: 6, display: "block" }}>Phone Number *</label>
                        <input placeholder="+91 XXXXX XXXXX" value={form.phone} type="tel"
                          onChange={e => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(er => ({ ...er, phone: "" })); }}
                          style={inputS("phone")} />
                        {errors.phone && <div style={{ color: "#EF4444", fontSize: 11, marginTop: 4 }}>{errors.phone}</div>}
                      </div>
                      <div>
                        <label style={{ color: B.steel, fontSize: 12, marginBottom: 6, display: "block" }}>Email (optional)</label>
                        <input placeholder="you@email.com" value={form.email} type="email"
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))} style={inputS("email")} />
                      </div>
                    </div>

                    <div>
                      <label style={{ color: B.steel, fontSize: 12, marginBottom: 6, display: "block" }}>Treatment Required</label>
                      <select value={form.treatment} onChange={e => setForm(f => ({ ...f, treatment: e.target.value }))}
                        style={{ ...inputS("treatment"), color: form.treatment ? "#fff" : "#6B7280", background: "#060E1A" }}>
                        <option value="">Select a treatment…</option>
                        {SERVICES_ALL.map(s => <option key={s.name} value={s.name}>{s.icon} {s.name}</option>)}
                      </select>
                    </div>

                    <div>
                      <label style={{ color: B.steel, fontSize: 12, marginBottom: 6, display: "block" }}>Preferred Date</label>
                      <input type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                        style={{ ...inputS("date"), colorScheme: "dark" }} />
                    </div>

                    <div>
                      <label style={{ color: B.steel, fontSize: 12, marginBottom: 6, display: "block" }}>Message / Additional Info</label>
                      <textarea placeholder="Tell us anything else about your concern…" value={form.msg}
                        onChange={e => setForm(f => ({ ...f, msg: e.target.value }))}
                        style={{ ...inputS("msg"), minHeight: mob ? 60 : 88, resize: "vertical" }} />
                    </div>

                    <Btn onClick={submit} disabled={isSubmitting} style={{ width: "100%", padding: mob ? "14px" : "16px", fontSize: mob ? 14 : 15, cursor: isSubmitting ? "not-allowed" : "pointer", opacity: isSubmitting ? 0.7 : 1 }}>
                      {isSubmitting ? "Sending..." : "Confirm My Appointment ✓"}
                    </Btn>

                    <a href="https://wa.me/918309265054" target="_blank" rel="noreferrer"
                      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: mob ? "12px" : "14px", borderRadius: 14, border: "1px solid rgba(37,211,102,0.3)", color: "#25D366", fontSize: mob ? 13 : 14, fontWeight: 600, textDecoration: "none", transition: "background 0.2s", boxSizing: "border-box" }}>
                      💬 Chat on WhatsApp Instead
                    </a>
                  </div>
                </div>

                {/* Contact info sidebar */}
                <div style={{ display: "flex", flexDirection: "column", gap: mob ? 12 : 16 }}>

                  <div style={{ background: "rgba(43,191,191,0.06)", border: "1px solid rgba(43,191,191,0.18)", borderRadius: mob ? 18 : 24, padding: mob ? 20 : 28 }}>
                    <div style={{ fontSize: mob ? 32 : 40, marginBottom: 12 }}>🏥</div>
                    <div style={{ color: "#fff", fontSize: mob ? 16 : 18, fontWeight: 800, marginBottom: 4 }}>Invodent Dental Clinic</div>
                    <div style={{ color: B.teal, fontSize: mob ? 11 : 12, marginBottom: mob ? 12 : 16 }}>International Dental Care & Orthodontic Centre</div>
                    {[
                      ["📍", "Invodent Dental Clinic, Baker's Super Mart, Balaji Nagar, Asilmetta, Visakhapatnam, Andhra Pradesh 530003"],
                      ["📞", "+91 83092 65054"],
                      ["🌐", "www.invodent.com"],
                      ["🕐", "Monday – Saturday: 9:30 AM – 8:00 PM"],
                      ["🔴", "Sunday: Closed"],
                      ["📘", "Facebook: /InvodentInternationalDentalCare"],
                      ["📸", "Instagram: @invodentdentalcare"],
                    ].map(([ic, tx]) => (
                      <div key={tx} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: mob ? 8 : 10 }}>
                        <span style={{ fontSize: mob ? 13 : 15, flexShrink: 0 }}>{ic}</span>
                        <span style={{ color: B.steel, fontSize: mob ? 12 : 13, lineHeight: 1.5 }}>{tx}</span>
                      </div>
                    ))}
                  </div>

                  {/* Real Google Map Embed */}
                  <div style={{ background: "rgba(43,191,191,0.04)", border: "1px solid rgba(43,191,191,0.15)", borderRadius: mob ? 18 : 24, padding: mob ? 14 : 20, textAlign: "center" }}>
                    <div style={{ height: mob ? 160 : 200, borderRadius: 16, overflow: "hidden", marginBottom: 14, background: "rgba(43,191,191,0.06)", position: "relative" }}>
                      <iframe
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(85%)" }}
                        src="https://maps.google.com/maps?q=INVODENT%20INTERNATIONAL%20DENTAL%20CARE%20AND%20ORTHODONTIC%20CENTRE,%20Visakhapatnam&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <Btn onClick={() => window.open("https://maps.app.goo.gl/17S5JMvpvoEdHEkZA", "_blank")} outline style={{ width: "100%", padding: "11px", fontSize: 13 }}>Open in Google Maps ↗</Btn>
                  </div>


                </div>
              </div>
            </Reveal>

            {/* FAQ */}
            <Reveal delay="0.3s">
              <div style={{ marginTop: mob ? 32 : 56 }}>
                <SectionLabel>Quick FAQs</SectionLabel>
                <h2 style={{ color: "#fff", fontSize: mob ? 20 : 24, fontWeight: 800, marginBottom: mob ? 16 : 24 }}>Common Questions Before Booking</h2>
                <div style={{ display: "grid", gridTemplateColumns: mob ? "1fr" : "1fr 1fr", gap: mob ? 10 : 12 }}>
                  {[
                    { q: "Do I need to bring any documents?", a: "No documents needed. Just come in. Our team will take care of everything from your first consultation." },
                    { q: "Is parking available near the clinic?", a: "Yes, parking is available at Invodent Dental Clinic, Baker's Super Mart, Balaji Nagar, Asilmetta, Visakhapatnam, Andhra Pradesh 530003." },
                    { q: "What if I need to reschedule?", a: "Just WhatsApp or call us. We'll find you the next available slot with no cancellation fee." },
                    { q: "Do you accept health insurance?", a: "We accept select insurance plans. Call us to confirm coverage for your specific treatment." },
                  ].map((faq, i) => (
                    <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(43,191,191,0.1)", borderRadius: 16, padding: mob ? "14px 16px" : "18px 20px" }}>
                      <div style={{ color: "#fff", fontSize: mob ? 12 : 13, fontWeight: 700, marginBottom: 6 }}>Q: {faq.q}</div>
                      <div style={{ color: B.steel, fontSize: mob ? 11 : 12, lineHeight: 1.65 }}>{faq.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </>
        ) : (
          /* Confirmation screen */
          <div style={{ textAlign: "center", minHeight: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: mob ? "0 8px" : 0 }}>
            <div style={{ fontSize: mob ? 56 : 80, marginBottom: 20, animation: "fadeInUp 0.6s ease" }}>🦷✨</div>
            <h2 style={{ fontSize: mob ? "clamp(24px,7vw,36px)" : "clamp(32px,5vw,56px)", fontWeight: 900, color: "#fff", marginBottom: 12, lineHeight: 1.1, letterSpacing: -1 }}>
              Your smile journey<br /><GT>starts right now.</GT>
            </h2>
            <p style={{ color: B.steel, fontSize: mob ? 13 : 15, lineHeight: 1.9, maxWidth: 420, marginBottom: 32 }}>
              Thank you, <strong style={{ color: "#fff" }}>{form.name}</strong>. Dr. Mounika's team will call you at <strong style={{ color: B.teal }}>{form.phone}</strong> within the next few hours to confirm your appointment.
            </p>
            <div style={{ background: "rgba(43,191,191,0.07)", border: "1px solid rgba(43,191,191,0.25)", borderRadius: 20, padding: mob ? "18px 20px" : "24px 32px", maxWidth: 420, marginBottom: 32, textAlign: "left", width: "100%" }}>
              <div style={{ color: B.teal, fontSize: 13, fontWeight: 800, marginBottom: 10 }}>Your Appointment Details</div>
              <div style={{ color: "#fff", fontSize: 13, marginBottom: 4 }}>👤 {form.name}</div>
              <div style={{ color: B.steel, fontSize: 13, marginBottom: 4 }}>📞 {form.phone}</div>
              {form.treatment && <div style={{ color: B.steel, fontSize: 13, marginBottom: 4 }}>🦷 {form.treatment}</div>}
              {form.date && <div style={{ color: B.steel, fontSize: 13, marginBottom: 4 }}>📅 {form.date}</div>}
              <div style={{ borderTop: "1px solid rgba(43,191,191,0.15)", marginTop: 14, paddingTop: 14, color: B.steel, fontSize: 12, lineHeight: 1.7 }}>📍 Invodent Dental Clinic, Baker's Super Mart, Balaji Nagar, Asilmetta, Visakhapatnam, Andhra Pradesh 530003<br />🕐 Mon–Sat 9:30 AM – 8:00 PM</div>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", flexDirection: mob ? "column" : "row" }}>
              <Btn onClick={() => nav("/")} style={{ padding: "13px 28px" }}>← Back to All Doors</Btn>
              <Btn outline onClick={() => { setDone(false); setForm({ name: "", phone: "", email: "", treatment: "", date: "", msg: "" }); }} style={{ padding: "13px 28px" }}>Book Another Appointment</Btn>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
