import {
  Activity,
  Bell,
  Building2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
export default function Settings({ showToast }) {
  const options = [
    ["Company profile", "Manage organisation details and locations", Building2],
    [
      "Roles & permissions",
      "Control access to HR data and workflows",
      ShieldCheck,
    ],
    ["Notifications", "Manage alerts and reminders", Bell],
    ["Integrations", "Connect payroll and productivity tools", Activity],
  ];
  return (
    <>
      <SectionTitle
        eyebrow="WORKSPACE"
        title="Settings"
        subtitle="Configure your workspace preferences and access controls."
      />
      <div className="settings-grid">
        {options.map(([title, description, Icon]) => (
          <button
            className="setting-card"
            key={title}
            onClick={() => showToast(`${title} settings opened.`)}
          >
            <Icon size={19} />
            <b>{title}</b>
            <span>{description}</span>
            <ChevronRight size={16} />
          </button>
        ))}
      </div>
    </>
  );
}
