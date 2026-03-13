import { B } from "../../constants/brand";

// Section label with colored dot
const SectionLabel = ({ children, color = B.teal }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 7, marginBottom: 16 }}>
    <div style={{ width: 6, height: 6, borderRadius: "50%", background: color, flexShrink: 0 }} />
    <span style={{ color, fontSize: 10, letterSpacing: 3.5, textTransform: "uppercase", fontWeight: 700 }}>{children}</span>
  </div>
);

export default SectionLabel;
