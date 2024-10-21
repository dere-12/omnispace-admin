import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashUsers from "../components/DashUsers";
import DashPosts from "../components/DashPosts";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-full flex">
      <div>
        <DashSidebar />
      </div>
      {/* profile tab*/}
      {tab == "profile" && <DashProfile />}
      {/* users tab */}
      {tab === "users" && <DashUsers />}
      {/* news post */}
      {tab === "posts" && <DashPosts />}
    </div>
  );
}
