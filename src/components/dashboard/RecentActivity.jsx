import { ArrowUpRight } from "lucide-react";
import Avatar from "../ui/Avatar";
import Badge from "../ui/Badge";
export default function RecentActivity({ onNavigate }) {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <h2>Recent people activity</h2>
          <p>Latest updates from across the organisation</p>
        </div>
        <button
          className="text-link"
          onClick={() => onNavigate("Employee directory")}
        >
          View directory <ArrowUpRight size={14} />
        </button>
      </div>
      <div className="activity-list">
        <div className="activity-item">
          <Avatar initials="MT" />
          <div>
            <strong>Maya Thomas joined Finance</strong>
            <span>Onboarding started · 2 hours ago</span>
          </div>
          <Badge tone="blue">New joiner</Badge>
        </div>
        <div className="activity-item">
          <Avatar initials="JD" />
          <div>
            <strong>James Davis updated profile</strong>
            <span>Personal details · Yesterday</span>
          </div>
          <Badge>Profile</Badge>
        </div>
        <div className="activity-item">
          <Avatar initials="SK" />
          <div>
            <strong>Sara Khan submitted annual leave</strong>
            <span>12–16 Nov · Yesterday</span>
          </div>
          <Badge tone="amber">Awaiting review</Badge>
        </div>
      </div>
    </section>
  );
}
