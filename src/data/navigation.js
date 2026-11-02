import {
  Users,
  BriefcaseBusiness,
  Clock3,
  Wallet,
  LayoutDashboard,
  Sparkles,
  Building2,
  ClipboardCheck,
  FileText,
  FolderKanban,
  UserRound,
  ScanSearch,
  CalendarDays,
  Mail,
  Plane,
  ShieldCheck,
  BarChart3,
  ListChecks,
} from "lucide-react";

export const navGroups = [
  {
    title: "Workspace",
    items: [
      ["Dashboard", LayoutDashboard],
      ["Ask AI", Sparkles],
    ],
  },
  {
    title: "People",
    items: [
      ["Employee directory", Users],
      ["Org chart", Building2],
      ["Onboarding", ClipboardCheck],
      ["Documents", FileText],
    ],
  },
  {
    title: "Talent",
    items: [
      ["Recruitment", BriefcaseBusiness],
      ["Requisitions", FolderKanban],
      ["Candidates", UserRound],
      ["CV screening", ScanSearch],
      ["Interviews", CalendarDays],
      ["Offers", Mail],
    ],
  },
  {
    title: "Time & pay",
    items: [
      ["Leave & absence", Plane],
      ["Attendance", Clock3],
      ["Payroll", Wallet],
      ["Benefits", ShieldCheck],
    ],
  },
  {
    title: "Insights",
    items: [
      ["Reports & analytics", BarChart3],
      ["Tasks & approvals", ListChecks],
    ],
  },
];
