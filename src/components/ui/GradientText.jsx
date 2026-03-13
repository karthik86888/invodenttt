import { B } from "../../constants/brand";

// Gradient text wrapper
const GT = ({ children, style = {} }) => (
  <span style={{ background: B.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", ...style }}>{children}</span>
);

export default GT;
