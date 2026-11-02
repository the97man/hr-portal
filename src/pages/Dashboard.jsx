import WelcomeHeader from "../components/dashboard/WelcomeHeader";
import StatCard from "../components/dashboard/StatCard";
import ApprovalsTable from "../components/dashboard/ApprovalsTable";
import HeadcountByPractice from "../components/dashboard/HeadcountByPractice";
import RecentActivity from "../components/dashboard/RecentActivity";
import UpcomingEvents from "../components/dashboard/UpcomingEvents";
import { stats } from "../data/stats";

export default function Dashboard({ onNavigate, showToast }) {
  return (
    <>
      <WelcomeHeader onNavigate={onNavigate} showToast={showToast} />
      <div className="stats-grid">
        {stats.map(([label, value, note, Icon]) => (
          <StatCard
            key={label}
            label={label}
            value={value}
            note={note}
            Icon={Icon}
          />
        ))}
      </div>
      <div className="dashboard-grid">
        <ApprovalsTable onNavigate={onNavigate} showToast={showToast} />
        <HeadcountByPractice onNavigate={onNavigate} />
      </div>
      <div className="dashboard-grid lower-grid">
        <RecentActivity onNavigate={onNavigate} />
        <UpcomingEvents />
      </div>
    </>
  );
}
