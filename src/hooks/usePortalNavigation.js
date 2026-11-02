import { useState } from "react";
export default function usePortalNavigation() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = (page) => {
    setActivePage(page);
    setSearch("");
    setMobileOpen(false);
  };
  return {
    activePage,
    setActivePage,
    search,
    setSearch,
    mobileOpen,
    setMobileOpen,
    navigate,
  };
}
