import { Navbar, TextInput, Button, Dropdown, Avatar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex items-center py-2"
      >
        <img
          src="https://www.pngitem.com/pimgs/m/529-5294086_transparent-random-logo-png-png-download.png"
          alt="Omnispace logo"
          className="rounded-full w-6"
        />
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Omnispace
        </span>
      </Link>

      <form>
        <div className="relative">
          <TextInput
            type="text"
            placeholder="Search..."
            className="lg:inline w-full"
          />
          <AiOutlineSearch className="absolute right-3 top-5 transform -translate-y-1/2 text-gray-500" />
        </div>
      </form>

      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about" className="mx-5">
            About
          </Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/dashboard"} as={"div"}>
          {currentUser === null ? (
            <Link to="/sign-in">Dashboard</Link>
          ) : (
            <Link to="/dashboard">Dashboard</Link>
          )}
        </Navbar.Link>
      </Navbar.Collapse>

      <div className="flex gap-5">
        <Button className="w-12 h-10 sm:inline" color="gray" pill>
          <FaMoon />
        </Button>

        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="user avatar" rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
            </Dropdown.Header>

            <Dropdown.Divider />
            <Dropdown.Item>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-Up">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign Up
            </Button>
          </Link>
        )}
      </div>
    </Navbar>
  );
}
