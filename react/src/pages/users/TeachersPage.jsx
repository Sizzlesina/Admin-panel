import styled from 'styled-components';

const StyledTeachers = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

function TeachersPage() {
  return (
    <StyledTeachers>
      <p className="text-6xl font-semibold text-stone-500">Teachers</p>
    </StyledTeachers>
  );
}

export default TeachersPage;
