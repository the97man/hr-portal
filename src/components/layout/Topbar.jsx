import {
  Bell,
  ChevronDown,
  ChevronRight,
  Command,
  Menu,
  Search,
  X,
} from "lucide-react";
import Avatar from "../ui/Avatar";

export default function Topbar({
  activePage,
  search,
  setSearch,
  onOpenMenu,
  showToast,
}) {
  return (
    <header className="topbar">
      <button className="hamburger" onClick={onOpenMenu} aria-label="Open menu">
        <Menu size={19} />
      </button>
      <div className="breadcrumbs">
        <span>Skyform</span>
        <ChevronRight size={14} />
        <b>{activePage}</b>
      </div>
      <label className="global-search">
        <Search size={16} />
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search people, jobs, requests..."
        />
        <kbd>
          <Command size={11} /> K
        </kbd>
        {search && (
          <button onClick={() => setSearch("")} aria-label="Clear search">
            <X size={14} />
          </button>
        )}
      </label>
      <div className="top-actions">
        <button
          className="icon-button notification-btn"
          onClick={() => showToast("You’re all caught up on notifications.")}
          aria-label="Notifications"
        >
          <Bell size={17} />
          <i />
        </button>
        <span className="top-divider" />
        <Avatar initials="AM" small />
        <div className="top-user">
          <b>Aman Gurana</b>
          <span>Admin</span>
        </div>
        <ChevronDown size={14} />
      </div>
    </header>
  );
}
