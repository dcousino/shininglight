import React from 'react';
import styled from 'styled-components';

const MarkdownH1 = styled.h1`
  margin: 0.3em 0;
  font-size: 2.25rem;
  text-align: center;
  color: #f4f4f4;
  font-weight: 100;
  display: block;
  font-family: 'Sacramento', serif;
`;

const MarkdownParagraph = styled.p`
  text-align: left;
  font-family: 'Cormorant', serif;
  width: 100%;
`;

export default {
  paragraph: props => <MarkdownParagraph {...props} />,
  heading: props => <MarkdownH1 {...props} />
};
