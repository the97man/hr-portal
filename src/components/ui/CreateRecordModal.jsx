import { Check, X } from "lucide-react";
import Button from "./Button";
export default function CreateRecordModal({
  activePage,
  value,
  setValue,
  onClose,
  showToast,
}) {
  if (!activePage) return null;
  const title =
    activePage === "Candidates"
      ? "candidate"
      : activePage === "Interviews"
        ? "interview"
        : activePage === "Leave & absence"
          ? "leave request"
          : "record";
  const create = () => {
    if (!value.trim()) {
      showToast("Please enter a name or title.");
      return;
    }
    showToast(`${value} created successfully (demo).`);
    setValue("");
    onClose();
  };
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <div className="modal-head">
          <div>
            <span className="eyebrow">NEW RECORD</span>
            <h2>Create {title}</h2>
          </div>
          <button className="icon-button" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <label className="field-label">
          Name / title
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Enter a name or title"
          />
        </label>
        <label className="field-label">
          Department
          <select defaultValue="People">
            <option>People</option>
            <option>Engineering</option>
            <option>Product</option>
            <option>Finance</option>
            <option>Sales</option>
          </select>
        </label>
        <label className="field-label">
          Notes
          <textarea placeholder="Add details (optional)" />
        </label>
        <div className="modal-actions">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={create} icon={Check}>
            Create record
          </Button>
        </div>
      </div>
    </div>
  );
}
