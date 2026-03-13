import { B } from "../../constants/brand";

// Pill button
const Btn = ({ children, onClick, style = {}, outline = false }) => (
  <button onClick={onClick} style={{
    background: outline ? "transparent" : B.grad,
    border: outline ? "1px solid rgba(43,191,191,0.4)" : "0",
    outline: "none",
    borderRadius: 50, padding: "14px 32px",
    color: "#fff", fontSize: 14, fontWeight: 700,
    cursor: "pointer", letterSpacing: 0.3,
    boxShadow: outline ? "none" : "0 8px 28px rgba(43,191,191,0.28)",
    transition: "all 0.2s", fontFamily: "inherit",
    appearance: "none", WebkitAppearance: "none",
    ...style
  }}>{children}</button>
);

export default Btn;
