import styled from 'styled-components';
import { TEXT } from '../../helpers/constants';

const TextContentContainer = styled.section`
  background-color: #ffffff;
  margin: 1rem 0;
  border-radius: 0.25rem;
  padding: 1rem;
`;
const TextContentHeader = styled.section`
  h5 {
    font-size: 0.93rem;
    font-weight: bold;
    line-height: 1;
    margin-block-end: 0.5rem;
  }
  p {
    font-size: 0.74rem;
    color: #777;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;
const TextContentBody = styled.section`
  p {
    font-size: 0.74rem;
    margin-bottom: 1rem;
  }
`;
function TextContent() {
  return (
    <section className="gap gap-col-1">
      <TextContentContainer>
        <TextContentHeader>
          <h5>بخش کاربران</h5>
          <p>در این بخش اطلاعاتی در مورد کاربران به شما داده می شود</p>
        </TextContentHeader>
        <TextContentBody>
          {TEXT.map((item) => (
            <p className="font-light" key={item.id}>
              {item.text}
            </p>
          ))}
        </TextContentBody>
      </TextContentContainer>
    </section>
  );
}

export default TextContent;
