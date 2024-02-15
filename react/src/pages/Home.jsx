import styled from 'styled-components';
import CardRow from '../components/UI/Card/CardRow';
import { CARD_ITEMS } from '../helpers/constants';
import TextContent from '../components/UI/TextContent';

const StyledHome = styled.main`
  width: calc(100% - 14rem);
  padding: 1rem;
  min-height: calc(100vh - 3.5rem);
  background-color: #f3f3f3;
`;

function Home() {
  return (
    <StyledHome>
      <section className="gap gap-rows-1">
        <CardRow cardItems={CARD_ITEMS.filter((card) => card.id <= 4)} />
        <CardRow cardItems={CARD_ITEMS.filter((card) => card.id > 4)} />
      </section>
      <section className="gap gap-rows-1">
        <TextContent />
      </section>
    </StyledHome>
  );
}

export default Home;
