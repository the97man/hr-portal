import { ChevronDown, Settings, MoreHorizontal, X } from "lucide-react";
import { navGroups } from "../../data/navigation";
import Avatar from "../ui/Avatar";
import BrandMark from "./BrandMark";

export default function Sidebar({
  activePage,
  onNavigate,
  mobileOpen,
  onClose,
  showToast,
}) {
  return (
    <>
      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="brand-row">
          <BrandMark />
          <button
            className="mobile-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>
        <div className="workspace-switch">
          <div className="workspace-avatar">A</div>
          <div>
            <b>Arclight Systems</b>
            <span>Demo workspace</span>
          </div>
          <ChevronDown size={15} />
        </div>
        <nav className="side-nav">
          {navGroups.map((group) => (
            <div className="nav-group" key={group.title}>
              <div className="nav-label">{group.title}</div>
              {group.items.map(([label, Icon]) => (
                <button
                  key={label}
                  className={`nav-item ${activePage === label ? "active" : ""}`}
                  onClick={() => onNavigate(label)}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                  {label === "Tasks & approvals" && (
                    <i className="nav-count">4</i>
                  )}
                </button>
              ))}
            </div>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <button
            className={`nav-item settings-link ${activePage === "Settings" ? "active" : ""}`}
            onClick={() => {
              onNavigate("Settings");
              showToast("Settings opened.");
            }}
          >
            <Settings size={16} />
            Settings
          </button>
          <div className="profile-row">
            <Avatar initials="AM" />
            <div>
              <b>Aman Gurana</b>
              <span>Administrator</span>
            </div>
            <MoreHorizontal size={17} />
          </div>
        </div>
      </aside>
      {mobileOpen && (
        <button
          className="mobile-scrim"
          onClick={onClose}
          aria-label="Close navigation"
        />
      )}
    </>
  );
}
