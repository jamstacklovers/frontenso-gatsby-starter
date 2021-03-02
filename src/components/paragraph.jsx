import { styled } from '@linaria/react';

const Paragraph = styled.div`
  font-size: 18px;
  line-height: 1.6;
  letter-spacing: -0.02em;

  p {
    margin-bottom: 1.4em;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default Paragraph;
