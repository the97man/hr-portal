import { MoreHorizontal, ArrowUpRight } from "lucide-react";
export default function HeadcountByPractice({ onNavigate }) {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <h2>People overview</h2>
          <p>Workforce distribution</p>
        </div>
        <button className="icon-button">
          <MoreHorizontal size={17} />
        </button>
      </div>
      <div className="donut-wrap">
        <div className="donut">
          <div>
            <strong>248</strong>
            <span>Employees</span>
          </div>
        </div>
        <div className="legend">
          <div>
            <i className="dot dot-navy" />
            <span>Engineering</span>
            <b>38%</b>
          </div>
          <div>
            <i className="dot dot-teal" />
            <span>Product</span>
            <b>24%</b>
          </div>
          <div>
            <i className="dot dot-blue" />
            <span>Sales</span>
            <b>21%</b>
          </div>
          <div>
            <i className="dot dot-grey" />
            <span>Other</span>
            <b>17%</b>
          </div>
        </div>
      </div>
      <div className="panel-bottom">
        <button
          className="text-link"
          onClick={() => onNavigate("Reports & analytics")}
        >
          View workforce report <ArrowUpRight size={14} />
        </button>
      </div>
    </section>
  );
}
