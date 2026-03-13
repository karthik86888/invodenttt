// Chip badge
const Chip = ({ children, style = {} }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(43,191,191,0.1)", border: "1px solid rgba(43,191,191,0.25)", borderRadius: 50, padding: "5px 14px", ...style }}>
    {children}
  </div>
);

export default Chip;
