import { useState } from "react";
import PortalStyles from "../src/components/layout/PortalStyles";
import Sidebar from "../src/components/layout/Sidebar";
import Topbar from "../src/components/layout/Topbar";
import Dashboard from "../src/pages/Dashboard";
import AskAI from "../src/pages/AskAI";
import Settings from "../src/pages/Settings";
import Toast from "../src/components/ui/Toast";
import CreateRecordModal from "../src/components/ui/CreateRecordModal";
import useToast from "../src/hooks/useToast";
import usePortalNavigation from "../src/hooks/usePortalNavigation";
import EmployeeDirectoryPage from "../src/pages/EmployeeDirectory";
import OrgChartPage from "../src/pages/OrgChart";
import OnboardingPage from "../src/pages/Onboarding";
import DocumentsPage from "../src/pages/Documents";
import RecruitmentPage from "../src/pages/Recruitment";
import RequisitionsPage from "../src/pages/Requisitions";
import CandidatesPage from "../src/pages/Candidates";
import CVScreeningPage from "../src/pages/CVScreening";
import InterviewsPage from "../src/pages/Interviews";
import OffersPage from "../src/pages/Offers";
import LeaveAbsencePage from "../src/pages/LeaveAbsence";
import AttendancePage from "../src/pages/Attendance";
import PayrollPage from "../src/pages/Payroll";
import BenefitsPage from "../src/pages/Benefits";
import ReportsAnalyticsPage from "../src/pages/ReportsAnalytics";
import TasksApprovalsPage from "../src/pages/TasksApprovals";

const pageComponents = {
  "Employee directory": EmployeeDirectoryPage,
  "Org chart": OrgChartPage,
  Onboarding: OnboardingPage,
  Documents: DocumentsPage,
  Recruitment: RecruitmentPage,
  Requisitions: RequisitionsPage,
  Candidates: CandidatesPage,
  "CV screening": CVScreeningPage,
  Interviews: InterviewsPage,
  Offers: OffersPage,
  "Leave & absence": LeaveAbsencePage,
  Attendance: AttendancePage,
  Payroll: PayrollPage,
  Benefits: BenefitsPage,
  "Reports & analytics": ReportsAnalyticsPage,
  "Tasks & approvals": TasksApprovalsPage,
};

export default function App() {
  const { activePage, search, setSearch, mobileOpen, setMobileOpen, navigate } =
    usePortalNavigation();
  const { toast, setToast, showToast } = useToast();
  const [showCreate, setShowCreate] = useState(false);
  const [createName, setCreateName] = useState("");
  const Page = pageComponents[activePage];
  const openCreate = () => setShowCreate(true);
  return (
    <>
      <PortalStyles />
      <div className="app-shell">
        <Sidebar
          activePage={activePage}
          onNavigate={navigate}
          mobileOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          showToast={showToast}
        />
        <div className="main-area">
          <Topbar
            activePage={activePage}
            search={search}
            setSearch={setSearch}
            onOpenMenu={() => setMobileOpen(true)}
            showToast={showToast}
          />
          <main className="content">
            {activePage === "Dashboard" ? (
              <Dashboard onNavigate={navigate} showToast={showToast} />
            ) : activePage === "Ask AI" ? (
              <AskAI showToast={showToast} />
            ) : activePage === "Settings" ? (
              <Settings showToast={showToast} />
            ) : Page ? (
              <Page search={search} showToast={showToast} onAdd={openCreate} />
            ) : null}
            <footer className="footer">
              <span>
                Skyform People Portal <i>·</i> Internal HR workspace
              </span>
              <span>
                All systems operational <i className="online-dot" />
              </span>
            </footer>
          </main>
        </div>
        <Toast message={toast} onClose={() => setToast("")} />
        {showCreate && (
          <CreateRecordModal
            activePage={activePage}
            value={createName}
            setValue={setCreateName}
            onClose={() => setShowCreate(false)}
            showToast={showToast}
          />
        )}
      </div>
    </>
  );
}
