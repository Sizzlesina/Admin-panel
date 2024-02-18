import { FaAngleDown } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledGroupLink = styled.section`
  font-size: 0.8rem;
  margin-top: 1rem;
  padding: 0.4rem 0;
  color: #dcdcdc;
`;
const DropdownToggle = styled.section`
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  padding: 0.2rem 1rem;
  transition: all 0.3s;
  &:hover span {
    color: #f7f7f7;
  }
`;
const Dropdown = styled.section`
  height: auto !important;
  display: block !important;
  -webkit-user-select: none;
  user-select: none;

  a,
  button {
    padding: 0.2rem 1rem;
    display: block;
    text-decoration: none;
    background-color: inherit;
    outline: none;
    border: none;
    color: #dcdcdc;
    transition: all 0.3s;
  }
  a::before,
  button::before {
    content: '»';
    margin: 0.8rem;
  }
  a:hover,
  button:hover {
    color: #fe8a7d;
  }
`;
function GroupLink({ icon, children, listItem, toggleOffIcon, toggleOnIcon }) {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const handleClick = () => {
    setDropdownToggle((prevState) => !prevState);
  };

  if (toggleOnIcon && toggleOffIcon)
    return (
      <StyledGroupLink>
        <DropdownToggle onClick={handleClick}>
          {icon}
          <span>
            {children} {dropdownToggle ? toggleOnIcon : toggleOffIcon}
          </span>
        </DropdownToggle>
        {dropdownToggle && (
          <Dropdown>
            {listItem.map((item, index) => (
              <Link to={item.route} key={index}>
                {item.title}
              </Link>
            ))}
          </Dropdown>
        )}
      </StyledGroupLink>
    );
  return (
    <StyledGroupLink>
      <DropdownToggle className="flex justify-around" onClick={handleClick}>
        {icon}
        <span>{children}</span>
        <span>
          {dropdownToggle ? (
            <FaAngleDown className="mr-10 inline" />
          ) : (
            <FaAngleLeft className="mr-10 inline" />
          )}
        </span>
      </DropdownToggle>
      {dropdownToggle && (
        <Dropdown>
          {listItem.map((item, index) => (
            <Link to={item.route} key={index}>
              {item.title}
            </Link>
          ))}
        </Dropdown>
      )}
    </StyledGroupLink>
  );
}

export default GroupLink;
