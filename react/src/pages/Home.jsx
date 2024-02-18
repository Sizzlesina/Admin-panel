import styled from 'styled-components';
import CardRow from '../components/Card/CardRow';
import { CARD_ITEMS } from '../helpers/constants';
import TextContent from '../components/UI/TextContent';
import { useHeaders } from '../hooks/useHeaders';

const StyledHome = styled.main`
  padding: 1rem;
  min-height: calc(100vh - 3.5rem);
  background-color: #f3f3f3;
`;

function Home() {
  const { isOpenSidebar } = useHeaders();

  return (
    <StyledHome
      className={`${isOpenSidebar ? 'w-100' : 'w-[calc(100% - 14rem)]'} `}
    >
      <section>
        <CardRow cardItems={CARD_ITEMS.filter((card) => card.id <= 4)} />
        <CardRow cardItems={CARD_ITEMS.filter((card) => card.id > 4)} />
      </section>
      <section>
        <TextContent />
      </section>
    </StyledHome>
  );
}

export default Home;
