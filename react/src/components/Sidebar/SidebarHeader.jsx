import { FaEllipsisH } from 'react-icons/fa';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { useHeaders } from '../../hooks/useHeaders';
import { Link } from 'react-router-dom';
function SidebarHeader() {
  const { handleToggleSidebar, isOpenSidebar, handleToggleHeader } =
    useHeaders();
  return (
    <section className="w-[100%] select-none bg-[#404e67] text-[#dcdcdc] md:basis-56">
      <section className="flex-between px-2 md:flex-row-reverse">
        {isOpenSidebar ? (
          <span className="cursor-pointer ">
            <BsToggleOn
              className="inline select-none"
              onClick={handleToggleSidebar}
            />
          </span>
        ) : (
          <span className="cursor-pointer ">
            <BsToggleOff
              className="inline select-none"
              onClick={handleToggleSidebar}
            />
          </span>
        )}
        <span>
          <Link to={'/'}>
            <img
              src="./images/logo.png"
              alt="logo"
              className="inline max-h-14 cursor-pointer select-none"
            />
          </Link>
        </span>
        <span className="cursor-pointer select-none md:hidden">
          <FaEllipsisH className="inline" onClick={handleToggleHeader} />
        </span>
      </section>
    </section>
  );
}

export default SidebarHeader;
