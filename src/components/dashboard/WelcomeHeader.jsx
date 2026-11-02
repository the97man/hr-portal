import { ArrowDownToLine, Plus } from "lucide-react";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";
export default function WelcomeHeader({ onNavigate, showToast }) {
  return (
    <SectionTitle
      eyebrow="MONDAY, 2 NOVEMBER 2026"
      title="Good evening, Aman"
      subtitle="Here’s what’s happening across your people operations today."
      action={
        <div className="title-actions">
          <Button
            variant="secondary"
            icon={ArrowDownToLine}
            onClick={() => showToast("Dashboard report exported.")}
          >
            Export
          </Button>
          <Button icon={Plus} onClick={() => onNavigate("Employee directory")}>
            Add employee
          </Button>
        </div>
      }
    />
  );
}
