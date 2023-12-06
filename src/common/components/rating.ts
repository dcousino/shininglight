import styled from "styled-components";

export const RatingSection = styled.div`
  display: inline-block;
  position: relative;
  font-family: FontAwesome;
  &::before {
    content: "\f006 \f006 \f006 \f006 \f006";
  }
`;
export const Stars = styled.div<{ width: number }>`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: ${(props) => starRating(props.width)};
  &::before {
    content: "\f005 \f005 \f005 \f005 \f005";
    color: hsl(49.5, 94%, 73.7%);
  }
`;

function starRating(rating: number) {
  if (!rating) return 0;
  const percentage = (rating / 5) * 100;
  return `${Math.round(percentage / 10) * 10}%`;
}
