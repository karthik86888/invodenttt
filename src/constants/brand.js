// ── Brand tokens ──────────────────────────────────────────────────
export const B = {
  teal: "#2BBFBF", blue: "#3B82C4",
  grad: "linear-gradient(90deg,#2BBFBF,#3B82C4)",
  gradD: "linear-gradient(135deg,#2BBFBF,#3B82C4)",
  navy: "#0B1829", navyMid: "#0D2035",
  white: "#F7FBFC", charcoal: "#111827",
  steel: "#A8C4D4", slate: "#4A5568",
  gold: "#F0C040",
};

// ── Door definitions ──────────────────────────────────────────────
export const DOORS = [
  { id: 1, label: "About Our\nClinic", sub: "Meet our doctors · Our story · Why Invodent", bg: "#0B1829", accent: B.teal, icon: "🏥", num: "01" },
  { id: 2, label: "Patient\nResults", sub: "Real transformations · Before & After", bg: "#F2F8FB", accent: B.blue, icon: "😁", num: "02" },
  { id: 3, label: "Find Your\nDental Issue", sub: "Select your symptom · Get instant guidance", bg: "#083344", accent: B.teal, icon: "🦷", num: "03" },
  { id: 4, label: "Dental\nHealth Quiz", sub: "Test your dental knowledge in 2 minutes", bg: "#111827", accent: "#F0C040", icon: "🧠", num: "04" },
  { id: 5, label: "Book Your\nAppointment", sub: "Schedule a visit · Walk-in welcome", bg: "#060E1A", accent: B.teal, icon: "✨", num: "05" },
];

// ── Data ──────────────────────────────────────────────────────────
export const PROBLEMS = [
  { id: "pain", emoji: "😣", label: "Toothache / Pain", treatment: "Root Canal Treatment", desc: "Painless modern RCT saves your infected tooth in minimal sessions. Advanced anaesthesia ensures zero discomfort.", cost: "₹3,000–₹8,000", sessions: "1–3", icon: "🛡️" },
  { id: "crooked", emoji: "😬", label: "Crooked Teeth", treatment: "Orthodontics & Braces", desc: "Metal, ceramic & clear aligners for all ages. Discreet options available. Straighten your smile without compromising your lifestyle.", cost: "₹25,000–₹80,000", sessions: "12–24 months", icon: "😁" },
  { id: "missing", emoji: "😮", label: "Missing Tooth", treatment: "Dental Implants", desc: "Permanent titanium implants that look, feel and function like natural teeth. The gold standard in tooth replacement.", cost: "₹25,000–₹45,000", sessions: "2–4", icon: "🦷" },
  { id: "yellow", emoji: "😕", label: "Stained / Yellow", treatment: "Cosmetic Dentistry", desc: "Professional veneers, bonding and smile makeovers using the latest aesthetic dentistry techniques.", cost: "₹8,000–₹50,000", sessions: "1–3", icon: "✨" },
  { id: "gums", emoji: "😟", label: "Bleeding Gums", treatment: "Preventive & Gum Care", desc: "Deep cleaning, scaling, root planing and targeted gum treatments to restore periodontal health.", cost: "₹1,500–₹5,000", sessions: "2–4", icon: "🩺" },
  { id: "chipped", emoji: "😧", label: "Chipped / Broken", treatment: "Crowns & Restorations", desc: "Custom-crafted dental crowns, inlays, and composite bonding that blend seamlessly with your natural teeth.", cost: "₹5,000–₹15,000", sessions: "2–3", icon: "👑" },
  { id: "child", emoji: "🧒", label: "My Child's Teeth", treatment: "Pediatric Dentistry", desc: "Gentle, fun and child-friendly dental care. We make every visit a positive experience for your little ones.", cost: "₹500–₹5,000", sessions: "1–2", icon: "🎈" },
  { id: "sens", emoji: "🥶", label: "Tooth Sensitivity", treatment: "Teeth Cleaning & Care", desc: "Professional scaling, polishing and desensitisation treatment. Targeted care for sensitive enamel.", cost: "₹800–₹2,500", sessions: "1–2", icon: "🧹" },
];

export const MYTHS = [
  { myth: "Brushing harder = cleaner teeth", fact: "Hard brushing erodes enamel and recedes gums permanently. Gentle circular strokes with a soft brush clean far more effectively." },
  { myth: "Baby teeth don't need dental care", fact: "Infected baby teeth damage incoming permanent teeth and cause speech, alignment and developmental issues that last a lifetime." },
  { myth: "Only visit the dentist when it hurts", fact: "Most serious problems — cavities, gum disease, oral cancer — are completely painless until advanced. Prevention costs 10x less than cure." },
  { myth: "Dental X-rays are dangerous radiation", fact: "Modern digital X-rays at Invodent use 90% less radiation than traditional X-rays. They're completely safe for adults and children." },
  { myth: "Braces are only for teenagers", fact: "1 in 4 orthodontic patients today is an adult. Clear aligners like Invisalign mean nobody needs to know you're straightening your teeth." },
];

export const REVIEWS = [
  { name: "Priya S.", area: "MVP Colony", treatment: "Invisalign", stars: 5, quote: "Dr. Mounika transformed my smile in 8 months. I wore Invisalign through my wedding and nobody even knew! The results are beyond what I imagined.", date: "Jan 2025" },
  { name: "Ravi K.", area: "Gajuwaka", treatment: "Dental Implants", stars: 5, quote: "The implant looks so natural even my dentist back in Hyderabad couldn't tell it apart from my real teeth. Completely painless from consultation to finish.", date: "Dec 2024" },
  { name: "Ananya M.", area: "Dwaraka Nagar", treatment: "Root Canal", stars: 5, quote: "I was terrified of root canals. Dr. Mounika made it painless — done in a single session with zero discomfort. Invodent has changed my entire view of dentistry.", date: "Feb 2025" },
  { name: "Suresh P.", area: "Siripuram", treatment: "Braces", stars: 5, quote: "My daughter wore braces for 18 months. Dr. Mounika was incredibly patient and kind with her every single visit. Results are perfect.", date: "Mar 2025" },
  { name: "Kavitha R.", area: "Rushikonda", treatment: "Smile Makeover", stars: 5, quote: "I got 8 veneers done at Invodent. Worth every rupee. People compliment my smile every day now. The entire team is warm and professional.", date: "Nov 2024" },
  { name: "Arjun T.", area: "Vizag Port", treatment: "Implants", stars: 5, quote: "After losing two teeth in an accident, I thought I'd never smile properly again. Dr. Mounika's implants gave me my confidence back completely.", date: "Jan 2025" },
];

export const SERVICES_ALL = [
  { icon: "🦷", name: "Dental Implants", desc: "Permanent titanium implants — natural look & feel" },
  { icon: "😁", name: "Orthodontics & Braces", desc: "Metal, ceramic & clear aligners for all ages" },
  { icon: "💎", name: "Invisalign Treatment", desc: "Removable invisible aligners — no metal discomfort" },
  { icon: "🛡️", name: "Root Canal Treatment", desc: "Painless modern RCT in minimal sessions" },
  { icon: "✨", name: "Cosmetic Dentistry", desc: "Veneers, bonding & complete smile makeovers" },
  { icon: "🧒", name: "Pediatric Dentistry", desc: "Gentle, fun dental care for children of all ages" },
  { icon: "🧹", name: "Teeth Cleaning", desc: "Professional scaling & polishing for healthy gums" },
  { icon: "👑", name: "Crowns & Restorations", desc: "Custom crowns, fillings & long-lasting restorations" },
  { icon: "🔧", name: "Tooth Extractions", desc: "Painless extractions including wisdom tooth removal" },
  { icon: "🩺", name: "Preventive Dentistry", desc: "Fluoride treatments, check-ups & oral hygiene" },
];
