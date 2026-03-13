import { B } from "../constants/brand";
import useIsMobile from "../hooks/useIsMobile";

export default function GlobalNavbar() {
  const mob = useIsMobile();

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      padding: mob ? "8px 16px" : "10px 48px",
      display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center",
      background: "linear-gradient(180deg,rgba(6,14,26,0.95) 0%,rgba(6,14,26,0) 100%)",
      backdropFilter: "blur(8px)", fontFamily: "'Outfit',sans-serif",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
        <img src="/logo.png" alt="Invodent" style={{
          height: mob ? 48 : 80, width: "auto", objectFit: "contain",
          margin: mob ? "-6px 0" : "-15px 0",
        }} />
      </div>
      
      <div style={{ textAlign: "center" }}>
        {!mob && (
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, letterSpacing: 3, fontWeight: 600 }}>
            VISAKHAPATNAM · EST. 2012
          </div>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(43,191,191,0.1)", border: "1px solid rgba(43,191,191,0.2)", borderRadius: 50, padding: mob ? "5px 12px" : "7px 16px" }}>
          <span style={{ color: B.teal, fontSize: mob ? 12 : 14 }}>★</span>
          <span style={{ color: "#fff", fontSize: mob ? 12 : 13, fontWeight: 700 }}>4.9</span>
          {!mob && <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 11 }}>Google</span>}
        </div>
      </div>
    </div>
  );
}
