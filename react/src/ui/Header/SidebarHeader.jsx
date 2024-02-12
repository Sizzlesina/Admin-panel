import { FaEllipsisH } from "react-icons/fa";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
/** @format */
function SidebarHeader() {
  return (
    <section className="w-[100%] md:basis-56 bg-[#404e67] text-[#dcdcdc] select-none">
      <section className="flex-between md:flex-row-reverse px-2">
        <span className="inline md:hidden cursor-pointer">
          <BsToggleOff className="inline select-none" />
        </span>
        <span className="hidden md:inline cursor-pointer">
          <BsToggleOn className="inline select-none" />
        </span>
        <span>
          <img
            src="./logo.png"
            alt="logo"
            className="max-h-14 inline select-none"
          />
        </span>
        <span className="md:hidden cursor-pointer select-none">
          <FaEllipsisH className="inline" />
        </span>
      </section>
    </section>
  );
}

export default SidebarHeader;
