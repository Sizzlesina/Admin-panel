import { AiFillClockCircle } from 'react-icons/ai';
import { AiOutlineLineChart } from 'react-icons/ai';
import styled from 'styled-components';

const StyledCard = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
`;
const CardBody = styled.section`
  color: white;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.9rem;
  text-align: center;
`;
const CardFooter = styled.section`
  color: white;
  padding: 0.9rem 1rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  font-size: 0.6rem;
  &:last-child {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
  }
`;
function Card({ item }) {
  return (
    <StyledCard className={item.className}>
      <CardBody>
        <section className="flex-between">
          <section className="info-box-body">
            <h5>{item.title}</h5>
            <p>{item.text}</p>
          </section>
          <section className="info-box-icon">
            <AiOutlineLineChart className="mr-4 inline" />
          </section>
        </section>
      </CardBody>
      <CardFooter>
        <AiFillClockCircle className="ml-2 inline" />
        {item.footer}
      </CardFooter>
    </StyledCard>
  );
}

export default Card;
