import { Navbar, TextInput, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
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

      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/about" className="mx-5">
          About
        </Link>
        <Link to="/dashboard">Dashboard</Link>
      </Navbar>

      <div className="flex gap-5">
        <Button className="w-12 h-10 sm:inline" color="gray" pill>
          <FaMoon />
        </Button>

        <Link to="/sign-in">
          <Button
            className="px-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white
          "
          >
            Sign In
          </Button>
        </Link>
      </div>
    </Navbar>
  );
}
