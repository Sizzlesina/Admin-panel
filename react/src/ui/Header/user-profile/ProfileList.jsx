import { ImExit } from "react-icons/im";
import { FaLock } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { HiCog } from "react-icons/hi";
import styled from "styled-components";
import ProfileListItem from "./ProfileListItem";

const StyledProfileList = styled.section`
  position: absolute;
  margin-top: 0.2rem;
  left: 0;
  z-index: 1000;
  height: auto;
  width: 13rem;
  background-color: #ffffff;
  color: #000000;
  box-shadow: 0 1px 20px 0 rgba(70, 90, 100, 0.08);
`;
const PROFILE_OPTIONS = [
  {
    title: "تنظیمات",
    icon: <HiCog className="inline cursor-pointer select-none ml-1 " />,
    id: 1,
  },
  {
    title: "کاربر",
    icon: <AiOutlineUser className="inline cursor-pointer select-none ml-1 " />,
    id: 2,
  },
  {
    title: "پیام ها",
    icon: (
      <BsFillEnvelopeFill className="inline cursor-pointer select-none ml-1 " />
    ),
    id: 3,
  },
  {
    title: "قفل صفحه",
    icon: <FaLock className="inline cursor-pointer select-none ml-1 " />,
    id: 4,
  },
  {
    title: "خروج",
    icon: <ImExit className="inline cursor-pointer select-none ml-1 " />,
    id: 5,
  },
];
function ProfileList() {
  return (
    <StyledProfileList>
      <section className="list-group rounded">
        {PROFILE_OPTIONS.map((option) => (
          <ProfileListItem option={option} key={option.id} />
        ))}
      </section>
    </StyledProfileList>
  );
}

export default ProfileList;
