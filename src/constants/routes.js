/* ═══════════════════════════════════════════════════════════════
   ROUTE DEFINITIONS
   Single source of truth for all route paths, titles and meta.
   ═══════════════════════════════════════════════════════════════ */

export const ROUTES = [
  {
    id: 0,
    path: "/",
    title: "Invodent Dental Clinic — Best Dental Care in Visakhapatnam",
    description: "Invodent International Dental Care & Orthodontic Centre, Baker's Super Mart, Balaji Nagar, Asilmetta, Visakhapatnam, Andhra Pradesh 530003. 13+ years, 5000+ smiles. Book your free consultation today.",
  },
  {
    id: 1,
    path: "/about",
    title: "About Our Clinic — Invodent Dental, Visakhapatnam",
    description: "Meet the doctors, story, vision, mission and values behind Invodent — Visakhapatnam's most trusted dental clinic since 2012.",
  },
  {
    id: 2,
    path: "/smile-gallery",
    title: "Patient Results & Smile Gallery — Invodent Dental",
    description: "Real patient transformations at Invodent. Before & after gallery, 4.9★ Google reviews, and 5000+ happy smiles.",
  },
  {
    id: 3,
    path: "/dental-symptoms",
    title: "Find Your Dental Issue — Invodent Dental, Visakhapatnam",
    description: "Select your dental symptom and get instant treatment guidance. 10+ services under one roof at Invodent, Balaji Nagar, Asilmetta.",
  },
  {
    id: 4,
    path: "/dental-health-quiz",
    title: "Dental Health Quiz — Test Your Knowledge | Invodent",
    description: "5 dental myths busted. Test your dental knowledge in 2 minutes. Expert tips from Invodent's MDS-qualified specialists.",
  },
  {
    id: 5,
    path: "/book-appointment",
    title: "Book Appointment — Invodent Dental Clinic, Visakhapatnam",
    description: "Book your appointment at Invodent. Mon–Sat 9:30 AM–8 PM. +91 83092 65054. Baker's Super Mart, Balaji Nagar, Asilmetta, Visakhapatnam, Andhra Pradesh 530003.",
  },
];

/** Helper: get route path by door id (1-5) or home (0) */
export function getPath(id) {
  return ROUTES.find((r) => r.id === id)?.path || "/";
}

/** Helper: get route meta by path */
export function getRouteMeta(pathname) {
  return ROUTES.find((r) => r.path === pathname) || ROUTES[0];
}
