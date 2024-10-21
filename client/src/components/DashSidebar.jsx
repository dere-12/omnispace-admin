import { Sidebar } from "flowbite-react";
import {
  HiUser,
  HiArrowSmRight,
  HiOutlineUserGroup,
  HiDocumentText,
} from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Sidebar className="w-72 min-h-screen">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-2">
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={"Admin"}
              labelColor="dark"
              as="div"
            >
              Profile
            </Sidebar.Item>
          </Link>
          <Link to="/dashboard?tab=posts">
            <Sidebar.Item
              active={tab === "posts"}
              icon={HiDocumentText}
              as="div"
            >
              News Post
            </Sidebar.Item>
          </Link>
          <Link to="/dashboard?tab=users">
            <Sidebar.Item
              active={tab === "users"}
              icon={HiOutlineUserGroup}
              as="div"
            >
              Users
            </Sidebar.Item>
          </Link>
          <Link to="/sign-in">
            <Sidebar.Item
              icon={HiArrowSmRight}
              className="cursor-pointer"
              onClick={handleSignout}
              as="div"
            >
              Sign Out
            </Sidebar.Item>
          </Link>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
