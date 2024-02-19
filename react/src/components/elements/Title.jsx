import styled from 'styled-components';

const StyledTitle = styled.section`
  font-size: 0.9rem;
  padding: 0 1rem;
  margin-top: 1rem;
  color: #999999;

`;

function Title({ icon, children, className }) {
  if (icon)
    return (
      <StyledTitle>
        {icon}
        <span>{children}</span>
      </StyledTitle>
    );

  return <StyledTitle className="text-xs">{children}</StyledTitle>;
}

export default Title;
