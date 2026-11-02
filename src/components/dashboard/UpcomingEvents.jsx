import { CalendarDays } from "lucide-react";
export default function UpcomingEvents() {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <h2>Upcoming events</h2>
          <p>Key dates in your calendar</p>
        </div>
        <button className="icon-button">
          <CalendarDays size={17} />
        </button>
      </div>
      <div className="event-list">
        <div className="event-item">
          <div className="event-date">
            <b>04</b>
            <span>NOV</span>
          </div>
          <div>
            <strong>New joiner orientation</strong>
            <span>09:30 · Meeting room A</span>
          </div>
        </div>
        <div className="event-item">
          <div className="event-date">
            <b>06</b>
            <span>NOV</span>
          </div>
          <div>
            <strong>Payroll review</strong>
            <span>14:00 · Finance team</span>
          </div>
        </div>
        <div className="event-item">
          <div className="event-date">
            <b>12</b>
            <span>NOV</span>
          </div>
          <div>
            <strong>Benefits enrolment closes</strong>
            <span>All day · Company-wide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
