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
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0.5rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  align-items: center;
`;

export default SectionContainer;
