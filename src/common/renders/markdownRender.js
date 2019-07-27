import React from 'react';
import styled from 'styled-components';

const MarkdownH1 = styled.h1`
  margin: 0.3em auto;
  font-size: 2.25rem;
  line-height: 2rem;
  display: flex;
  justify-content: center;
  align-self: center;
  text-align: center;
  color: #f4f4f4;
  font-weight: 100;
  font-family: 'Sacramento', serif;
  margin-bottom: 2rem;
`;

const MarkdownHeading = props => {
  switch (props.level) {
    case 1:
      return <MarkdownH1>{props.children}</MarkdownH1>;
    case 3:
      return <MarkdownH3>{props.children}</MarkdownH3>;
    case 5:
      return <MarkdownH5>{props.children}</MarkdownH5>;

    default:
      return <MarkdownH1>{props.children}</MarkdownH1>;
  }
};

const MarkdownH3 = styled.h3`
  margin: 0.3em 0;
  font-size: 1.74rem;
  text-align: left;
  color: slategray;
  font-weight: 100;
  display: block;
  font-family: 'Cormorant', serif;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const MarkdownH5 = styled.h5`
  margin: 0.3em 0;
  font-size: 1.25rem;
  text-align: left;
  color: gray;
  font-weight: 100;
  display: block;
  font-family: 'Cormorant', serif;
`;

const MarkdownParagraph = styled.p`
  text-align: left;
  font-family: 'Cormorant', serif;
  width: 100%;
`;

export default {
  paragraph: props => {
    return <MarkdownParagraph {...props} />;
  },
  heading: props => <MarkdownHeading {...props} />
};
