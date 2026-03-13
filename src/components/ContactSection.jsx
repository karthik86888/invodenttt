import { useState, useRef } from "react";
import { B } from "../constants/brand";
import useIsMobile from "../hooks/useIsMobile";

/* ═══════════════════════════════════════════════════════════════
   SECTION 3 — CONTACT FORM + SELFIE UPLOAD
   ═══════════════════════════════════════════════════════════════ */

export default function ContactSection() {
  const mob = useIsMobile();
  const [form, setForm] = useState({ name: "", phone: "", email: "", treatment: "", date: "", message: "" });
  const [selfie, setSelfie] = useState(null);
  const [selfiePreview, setSelfiePreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;
    setSelfie(file);
    const reader = new FileReader();
    reader.onload = (e) => setSelfiePreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone) return;
    setIsSubmitting(true);

    // Create form data payload for Web3Forms
    const formData = new FormData();
    formData.append("access_key", "48aa6597-c249-41be-b6c2-6be0ca4b6337");
    formData.append("subject", "New Appointment Request - Invodent Clinic");
    formData.append("name", form.name);
    formData.append("phone", form.phone);
    if (form.email) formData.append("email", form.email);
    if (form.treatment) formData.append("treatment", form.treatment);
    if (form.date) formData.append("preferred_date", form.date);
    if (form.message) formData.append("message", form.message);

    // If patient attached a selfie, send it as an attachment
    if (selfie) {
      formData.append("attachment", selfie);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", phone: "", email: "", treatment: "", date: "", message: "" });
        setSelfie(null);
        setSelfiePreview(null);
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

  const inputStyle = {
    width: "100%", padding: mob ? "12px 14px" : "14px 18px", background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, color: "#fff",
    fontSize: mob ? 13 : 14, fontFamily: "'Outfit',sans-serif", outline: "none",
    transition: "border-color 0.3s",
  };

  const treatments = ["General Checkup", "Root Canal Treatment", "Dental Implants", "Teeth Whitening", "Braces / Aligners", "Dental Crown / Bridge", "Smile Makeover", "Other"];

  return (
    <div id="contact-section" style={{
      width: "100%", minHeight: "100vh",
      background: "linear-gradient(180deg, #060E1A 0%, #0B1829 50%, #060E1A 100%)",
      position: "relative", overflow: "hidden", flexShrink: 0, scrollSnapAlign: "start",
      fontFamily: "'Outfit',sans-serif", display: "flex", alignItems: "center", justifyContent: "center",
      padding: mob ? "80px 16px 32px" : "80px 40px 40px",
    }}>

      {/* Background glow */}
      {!mob && <>
        <div style={{ position: "absolute", top: "30%", left: "20%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${B.teal}10 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "15%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${B.blue}08 0%, transparent 70%)`, pointerEvents: "none" }} />
      </>}

      {!submitted ? (
        <div style={{ display: "flex", gap: mob ? 32 : 48, maxWidth: 1100, width: "100%", alignItems: "flex-start", flexWrap: "wrap", flexDirection: mob ? "column" : "row" }}>

          {/* ── LEFT: Form ── */}
          <div style={{ flex: "1 1 420px", minWidth: mob ? 0 : 320, width: mob ? "100%" : "auto" }}>
            <div style={{ fontSize: mob ? 11 : 13, letterSpacing: mob ? 3 : 5, color: B.teal, fontWeight: 700, marginBottom: 12, textTransform: "uppercase" }}>GET IN TOUCH</div>
            <h2 style={{ fontSize: mob ? "clamp(24px,7vw,32px)" : "clamp(28px,4vw,42px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 8 }}>
              Reach Us<br /><span style={{ color: B.teal }}>Directly</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: mob ? 13 : 14, marginBottom: mob ? 20 : 32, lineHeight: 1.6 }}>
              Fill in your details and we'll call you back within hours.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: mob ? 10 : 14 }}>
              <input style={inputStyle} placeholder="Your Name *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              <input style={inputStyle} placeholder="Phone Number *" type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              <input style={inputStyle} placeholder="Email Address (Optional)" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              <select style={{ ...inputStyle, appearance: "none", cursor: "pointer" }} value={form.treatment} onChange={e => setForm({ ...form, treatment: e.target.value })}>
                <option value="" style={{ background: "#0B1829" }}>Select Treatment</option>
                {treatments.map(t => <option key={t} value={t} style={{ background: "#0B1829" }}>{t}</option>)}
              </select>
              <input style={inputStyle} type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
              <textarea style={{ ...inputStyle, minHeight: mob ? 60 : 80, resize: "vertical" }} placeholder="Any message for us..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              <button onClick={handleSubmit} disabled={isSubmitting} style={{ width: "100%", padding: mob ? "14px" : "16px", background: B.grad, border: "none", borderRadius: 12, color: "#fff", fontSize: mob ? 14 : 16, fontWeight: 800, fontFamily: "'Outfit',sans-serif", cursor: isSubmitting ? "not-allowed" : "pointer", opacity: isSubmitting ? 0.7 : 1, letterSpacing: 0.5, boxShadow: `0 8px 30px rgba(43,191,191,0.3)`, transition: "all 0.3s" }}>
                {isSubmitting ? "Sending..." : "Send to Invodent →"}
              </button>
            </div>

            {/* Info pills */}
            <div style={{ display: "flex", gap: mob ? 8 : 12, marginTop: mob ? 14 : 20, flexWrap: "wrap" }}>
              {[["📍", "Balaji Nagar, Asilmetta"], ["📞", "+91 83092 65054"], ["🕐", "Mon–Sat 9:30–8PM"]].map(([ic, tx]) => (
                <div key={tx} style={{ display: "flex", alignItems: "center", gap: 6, padding: mob ? "6px 10px" : "8px 14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, fontSize: mob ? 10 : 11, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
                  <span>{ic}</span> {tx}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Selfie Upload ── */}
          <div style={{ flex: "1 1 380px", minWidth: mob ? 0 : 300, width: mob ? "100%" : "auto" }}>
            <div style={{ fontSize: mob ? 11 : 13, letterSpacing: mob ? 3 : 5, color: B.teal, fontWeight: 700, marginBottom: 12, textTransform: "uppercase" }}>SHOW US YOUR SMILE</div>
            <h2 style={{ fontSize: mob ? "clamp(20px,6vw,28px)" : "clamp(22px,3vw,32px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 8 }}>
              Upload Your <span style={{ color: B.teal }}>Selfie</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: mob ? 13 : 14, marginBottom: mob ? 16 : 24, lineHeight: 1.6 }}>
              Take a photo of your teeth or smile. Our team will review and guide you.
            </p>

            {/* Drop zone */}
            <div
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
              style={{
                width: "100%", minHeight: mob ? 200 : 280, borderRadius: 20,
                border: dragging ? `2px solid ${B.teal}` : selfiePreview ? "2px solid rgba(43,191,191,0.3)" : "2px dashed rgba(255,255,255,0.15)",
                background: dragging ? "rgba(43,191,191,0.08)" : selfiePreview ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.02)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 0.3s", position: "relative", overflow: "hidden",
                padding: selfiePreview ? 0 : mob ? 24 : 40,
              }}
            >
              <input ref={fileRef} type="file" accept="image/*" capture="user" style={{ display: "none" }} onChange={(e) => handleFile(e.target.files[0])} />

              {selfiePreview ? (
                <>
                  <img src={selfiePreview} alt="Your selfie" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 18 }} />
                  <div style={{ position: "absolute", bottom: 12, right: 12, background: "rgba(0,0,0,0.7)", borderRadius: 8, padding: "6px 14px", fontSize: 11, color: B.teal, fontWeight: 700 }}>
                    ✓ {selfie.name}
                  </div>
                  <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(0,0,0,0.7)", borderRadius: 8, padding: "6px 12px", fontSize: 11, color: "#fff", fontWeight: 600, cursor: "pointer" }}
                    onClick={(e) => { e.stopPropagation(); setSelfie(null); setSelfiePreview(null); }}
                  >
                    ✕ Remove
                  </div>
                </>
              ) : (
                <>
                  <div style={{ fontSize: mob ? 36 : 48, marginBottom: mob ? 10 : 16, opacity: 0.6 }}>📸</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: mob ? 13 : 15, fontWeight: 700, marginBottom: 8 }}>
                    {mob ? "Tap to Upload" : "Drag & Drop or Click"}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>
                    JPG, PNG — up to 10MB
                  </div>
                  <div style={{ marginTop: mob ? 14 : 20, padding: "10px 24px", border: `1.5px solid ${B.teal}50`, borderRadius: 50, color: B.teal, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>
                    CHOOSE FILE
                  </div>
                </>
              )}
            </div>

            {/* Camera tip */}
            <div style={{ marginTop: mob ? 12 : 16, padding: mob ? "10px 14px" : "14px 18px", background: "rgba(43,191,191,0.06)", border: "1px solid rgba(43,191,191,0.15)", borderRadius: 12, display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span style={{ fontSize: 18 }}>💡</span>
              <div style={{ fontSize: mob ? 11 : 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                <strong style={{ color: B.teal }}>Tip:</strong> Take a clear, well-lit photo showing your teeth for the best assessment.
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Success state */
        <div style={{ textAlign: "center", maxWidth: 500, padding: mob ? "0 16px" : 0 }}>
          <img src="/logo.png" alt="Invodent Success" style={{ height: mob ? 48 : 72, objectFit: "contain", marginBottom: 20, animation: "fadeInUp 0.6s ease" }} />
          <h2 style={{ fontSize: mob ? "clamp(24px,7vw,32px)" : "clamp(28px,4vw,42px)", fontWeight: 900, color: "#fff", marginBottom: 12, lineHeight: 1.1 }}>
            Thank you, <span style={{ color: B.teal }}>{form.name}</span>!
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: mob ? 13 : 15, lineHeight: 1.7, marginBottom: 28 }}>
            Our team will reach out to you at <strong style={{ color: B.teal }}>{form.phone}</strong> within a few hours.
            {selfie && <><br />We've received your selfie too!</>}
          </p>
          <div onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", treatment: "", date: "", message: "" }); setSelfie(null); setSelfiePreview(null); }}
            style={{ display: "inline-flex", padding: mob ? "12px 24px" : "14px 32px", background: B.grad, borderRadius: 50, color: "#fff", fontSize: 14, fontWeight: 800, cursor: "pointer", boxShadow: `0 8px 30px rgba(43,191,191,0.3)` }}>
            ← Back
          </div>
        </div>
      )}
    </div>
  );
}
