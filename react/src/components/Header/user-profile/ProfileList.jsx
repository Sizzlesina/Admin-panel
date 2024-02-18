import styled from 'styled-components';
import ProfileListItem from './ProfileListItem';
import { PROFILE_OPTIONS } from '../../../helpers/constants.jsx';

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

function ProfileList() {
  return (
    <StyledProfileList>
      <section className="list-group rounded">
        {PROFILE_OPTIONS.map((option, index) => (
          <ProfileListItem option={option} key={index} />
        ))}
      </section>
    </StyledProfileList>
  );
}

export default ProfileList;
