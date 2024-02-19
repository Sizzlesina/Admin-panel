import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';
import { FaCogs } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { BsBarChartLineFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import styled from 'styled-components';
import ItemLink from '../elements/ItemLink';
import Title from '../elements/Title';
import GroupLink from '../elements/GroupLink';
import {
  SETTINGS_LIST,
  TEXTS_LIST,
  USERS_LIST,
} from '../../helpers/constants.jsx';

const StyledSidebar = styled.aside`
  flex: 0 0 14rem;
  color: #dcdcdc;
  background-color: #404e67;
`;
const SidebarContainer = styled.section`
  position: fixed;
  right: 0;
  top: 3.5rem;
  z-index: 10000;
`;
const SidebarWrapper = styled.section`
  padding: 1rem 0;
  overflow: auto;
`;
function Sidebar() {
  return (
    <StyledSidebar className="md:inline">
      <SidebarContainer>
        <SidebarWrapper>
          <ItemLink home={true} icon={<AiFillHome className=" ml-3 inline" />}>
            خانه
          </ItemLink>
          <Title type="sidebar">بخش محتوی</Title>
          <ItemLink icon={<FaBars className="ml-3 inline" />}>دسته ها</ItemLink>
          <GroupLink
            icon={<BsBarChartLineFill className="ml-3 inline" />}
            listItem={TEXTS_LIST}
            toggleOnIcon={<FaAngleDown className="mr-[2.2rem] inline" />}
            toggleOffIcon={<FaAngleLeft className="mr-[2.2rem] inline" />}
          >
            نوشته ها
          </GroupLink>
          <Title>بخش کاربران</Title>
          <GroupLink
            icon={<HiUsers className="ml-3 inline" />}
            listItem={USERS_LIST}
          >
            کاربران
          </GroupLink>
          <Title type="sidebar">تنظیمات</Title>
          <GroupLink
            icon={<FaCogs className="ml-3 inline" />}
            listItem={SETTINGS_LIST}
            toggleOnIcon={<FaAngleDown className="mr-[1.5rem] inline" />}
            toggleOffIcon={<FaAngleLeft className="mr-[1.5rem] inline" />}
          >
            تنظیمات منو
          </GroupLink>
        </SidebarWrapper>
      </SidebarContainer>
    </StyledSidebar>
  );
}

export default Sidebar;
