import styled from 'styled-components';

const StyledCourses = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

function CoursesPage() {
  return (
    <StyledCourses>
      <p className="text-6xl font-semibold text-stone-500">Courses</p>
    </StyledCourses>
  );
}

export default CoursesPage;
