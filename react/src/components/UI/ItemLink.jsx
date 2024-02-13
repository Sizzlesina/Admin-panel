import styled from 'styled-components';

const StyledItemLink = styled.a`
  font-size: 0.8rem;
  margin-top: 1rem;
  padding: 0.4rem 1rem;
  display: block;
  text-decoration: none;
  outline: none;
  border: none;
  color: #dcdcdc;
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
    color: #fe8a7d;
  }
`;

function ItemLink({ icon, children }) {
  if (icon)
    return (
      <StyledItemLink>
        {icon}
        <span>{children}</span>
      </StyledItemLink>
    );
  return <StyledItemLink>{children}</StyledItemLink>;
}

export default ItemLink;
