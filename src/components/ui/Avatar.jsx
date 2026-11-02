export default function Avatar({ initials, small = false }) {
  return (
    <span className={`avatar ${small ? "avatar-sm" : ""}`}>{initials}</span>
  );
}
