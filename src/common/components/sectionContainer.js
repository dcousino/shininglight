import styled from 'styled-components';

const SectionContainer = styled.div`
  z-index: 999;
  position: relative;
  background: ${props => props.theme.colors.primary};
  width: 90%;
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  margin: -20px auto;
  display: flex;
  line-height: 1.5em;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1.2rem 0.2rem;
  align-items: center;
  h1 {
    margin: 0.3em 0;
  }
`;

export default SectionContainer;
