import { FaEllipsisH } from 'react-icons/fa';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
/** @format */
function SidebarHeader() {
  return (
    <section className="w-[100%] select-none bg-[#404e67] text-[#dcdcdc] md:basis-56">
      <section className="flex-between px-2 md:flex-row-reverse">
        <span className="inline cursor-pointer md:hidden">
          <BsToggleOff className="inline select-none" />
        </span>
        <span className="hidden cursor-pointer md:inline">
          <BsToggleOn className="inline select-none" />
        </span>
        <span>
          <img
            src="./images/logo.png"
            alt="logo"
            className="inline max-h-14 cursor-pointer select-none"
          />
        </span>
        <span className="cursor-pointer select-none md:hidden">
          <FaEllipsisH className="inline" />
        </span>
      </section>
    </section>
  );
}

export default SidebarHeader;
