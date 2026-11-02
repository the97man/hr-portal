import { CheckCircle2, X } from "lucide-react";
export default function Toast({ message, onClose }) {
  if (!message) return null;
  return (
    <div className="toast">
      <CheckCircle2 size={17} />
      {message}
      <button onClick={onClose} aria-label="Dismiss notification">
        <X size={14} />
      </button>
    </div>
  );
}
