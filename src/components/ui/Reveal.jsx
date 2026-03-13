import { useState, useEffect } from "react";

// Fade-in reveal wrapper
export default function Reveal({ children, delay = "0s", up = 18 }) {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), 60); return () => clearTimeout(t); }, []);
  return (
    <div style={{ opacity: v ? 1 : 0, transform: v ? `translateY(0)` : `translateY(${up}px)`, transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}` }}>
      {children}
    </div>
  );
}
