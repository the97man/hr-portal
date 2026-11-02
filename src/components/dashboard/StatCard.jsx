export default function StatCard({ label, value, note, Icon }) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <span>{label}</span>
        <span className="stat-icon">
          <Icon size={17} />
        </span>
      </div>
      <div className="stat-value">{value}</div>
      <div className="stat-note">{note}</div>
    </div>
  );
}
