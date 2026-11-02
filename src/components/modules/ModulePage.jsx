import {
  ArrowUpRight,
  CircleHelp,
  Download,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import Button from "../ui/Button";
import DataTable from "../ui/DataTable";
import SectionTitle from "../ui/SectionTitle";
import { pageMeta } from "../../data/pageMeta";
import { moduleTables } from "../../data/moduleTables";

export default function ModulePage({ page, search = "", showToast, onAdd }) {
  const meta = pageMeta[page] || [
    "Workspace",
    "Manage your HR workspace and team operations.",
  ];
  const config = moduleTables[page] || moduleTables["Employee directory"];
  const activeCount = config.rows.filter((row) =>
    /Active|Open|Approved|Completed|Accepted|Processed/i.test(
      String(row[row.length - 1]),
    ),
  ).length;
  const attentionCount = config.rows.filter((row) =>
    /Pending|Review|Expiring|Feedback/i.test(String(row[row.length - 1])),
  ).length;
  return (
    <>
      <SectionTitle
        eyebrow={meta[0].toUpperCase()}
        title={page}
        subtitle={meta[1]}
        action={
          <div className="title-actions">
            <Button
              variant="secondary"
              icon={Download}
              onClick={() => showToast(`${page} data exported.`)}
            >
              Export
            </Button>
            <Button icon={Plus} onClick={onAdd}>
              {page === "Candidates"
                ? "Add candidate"
                : page === "Interviews"
                  ? "Schedule interview"
                  : page === "Leave & absence"
                    ? "New request"
                    : page === "Recruitment"
                      ? "Create job"
                      : "Create new"}
            </Button>
          </div>
        }
      />
      <div className="module-toolbar">
        <div className="search-inline">
          <Search size={15} />
          <input
            value={search}
            readOnly
            placeholder="Search records using the top search"
          />
        </div>
        <div className="toolbar-right">
          <button
            className="filter-btn"
            onClick={() => showToast("Filters panel opened.")}
          >
            <Filter size={15} /> Filters <span className="filter-count">2</span>
          </button>
          <button
            className="filter-btn"
            onClick={() => showToast("View options opened.")}
          >
            <SlidersHorizontal size={15} /> View
          </button>
        </div>
      </div>
      <div className="module-kpis">
        <div>
          <span>Total records</span>
          <b>{config.rows.length}</b>
        </div>
        <div>
          <span>Active / open</span>
          <b>{activeCount}</b>
        </div>
        <div>
          <span>Needs attention</span>
          <b>{attentionCount}</b>
        </div>
      </div>
      <section className="panel table-panel">
        <div className="panel-heading">
          <div>
            <h2>{page} records</h2>
            <p>Updated just now · Demo workspace data</p>
          </div>
          <button className="icon-button">
            <MoreHorizontal size={17} />
          </button>
        </div>
        <DataTable
          headers={config.headers}
          rows={config.rows}
          search={search}
          selectable
          onAction={(row) => showToast(`${row[1] || row[0]} record opened.`)}
        />
      </section>
      <div className="hint-card">
        <CircleHelp size={17} />
        <span>
          <b>Need a hand?</b> Use Ask AI to find policies, summarise records or
          prepare HR communications.
        </span>
        <button
          className="text-link"
          onClick={() => showToast("Ask AI assistant opened.")}
        >
          Ask AI <ArrowUpRight size={14} />
        </button>
      </div>
    </>
  );
}
