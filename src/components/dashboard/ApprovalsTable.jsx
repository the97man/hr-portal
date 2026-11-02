import {
  Plane,
  Wallet,
  Clock3,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import Badge from "../ui/Badge";
import { requests } from "../../data/requests";
export default function ApprovalsTable({ onNavigate, showToast }) {
  return (
    <section className="panel approvals-panel">
      <div className="panel-heading">
        <div>
          <h2>Pending approvals</h2>
          <p>Requests that need your attention</p>
        </div>
        <button
          className="text-link"
          onClick={() => onNavigate("Tasks & approvals")}
        >
          View all <ArrowUpRight size={14} />
        </button>
      </div>
      <div className="approval-list">
        {requests.slice(0, 3).map((request, index) => {
          const Icon = [Plane, Wallet, Clock3][index];
          return (
            <div className="approval-row" key={request[0]}>
              <div className="approval-symbol">
                <Icon size={17} />
              </div>
              <div className="approval-main">
                <strong>{request[1]}</strong>
                <span>
                  {request[2]} · {request[3]}
                </span>
              </div>
              <div className="approval-right">
                <strong>{request[4]}</strong>
                <Badge tone={request[5] === "Approved" ? "green" : "amber"}>
                  {request[5]}
                </Badge>
              </div>
              <button
                className="icon-button"
                onClick={() => showToast(`${request[1]} opened for review.`)}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          );
        })}
      </div>
      <div className="panel-bottom">
        <button
          className="text-link"
          onClick={() => onNavigate("Tasks & approvals")}
        >
          Go to approvals <ArrowUpRight size={14} />
        </button>
      </div>
    </section>
  );
}
