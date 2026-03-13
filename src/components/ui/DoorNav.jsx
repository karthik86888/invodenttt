import { useNavigate } from "react-router-dom";
import { B, DOORS } from "../../constants/brand";
import { getPath } from "../../constants/routes";
import useIsMobile from "../../hooks/useIsMobile";

export default function DoorNav({ current }) {
  const mob = useIsMobile();
  const nav = useNavigate();

  return (
    <div style={{
      position: "fixed", top: mob ? 16 : 24,
      left: "50%", transform: "translateX(-50%)",
      zIndex: 40, display: "flex", gap: mob ? 4 : 6,
    }}>
      {DOORS.map((d) => (
        <div key={d.id} onClick={() => nav(getPath(d.id))} title={d.title} style={{
          width: current === d.id ? (mob ? 18 : 24) : (mob ? 8 : 10),
          height: mob ? 8 : 10,
          borderRadius: 5,
          background: current === d.id ? B.teal : "rgba(255,255,255,0.15)",
          cursor: "pointer", transition: "all 0.35s ease",
          boxShadow: current === d.id ? `0 0 10px ${B.teal}` : "none",
        }} />
      ))}
    </div>
  );
}
