import styled from 'styled-components';

const StyledAdmin = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

function AdminPage() {
  return (
    <StyledAdmin>
      <p className="text-6xl font-semibold text-stone-500">Admin</p>
    </StyledAdmin>
  );
}

export default AdminPage;
