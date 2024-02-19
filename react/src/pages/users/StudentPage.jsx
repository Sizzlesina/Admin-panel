import styled from 'styled-components';

const StyledStudent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

function StudentPage() {
  return (
    <StyledStudent>
      <p className="text-6xl font-semibold text-stone-500">Student</p>
    </StyledStudent>
  );
}

export default StudentPage;
