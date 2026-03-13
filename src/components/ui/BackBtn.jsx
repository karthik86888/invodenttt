import { useNavigate } from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile";

export default function BackBtn() {
  const mob = useIsMobile();
  const nav = useNavigate();

  return (
    <div onClick={() => nav("/")} style={{
      position: "fixed", top: mob ? 16 : 24, left: mob ? 12 : 24,
      zIndex: 40, background: "rgba(11,24,41,0.85)", backdropFilter: "blur(10px)",
      border: "1px solid rgba(43,191,191,0.2)", borderRadius: 50,
      padding: mob ? "8px 14px" : "10px 20px",
      color: "#fff", fontSize: mob ? 11 : 12, fontWeight: 700,
      cursor: "pointer", letterSpacing: 1.5,
      display: "flex", alignItems: "center", gap: 6,
      transition: "all 0.3s",
    }}>
      ← {mob ? "Back" : "All Doors"}
    </div>
  );
}
