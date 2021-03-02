import React from 'react';
import { styled } from '@linaria/react';
import { StaticImage } from 'gatsby-plugin-image';

import Container from './container';
import Title from './title';
import Paragraph from './paragraph';
import { MEDIA_TABLET } from '../constants';

const StyledTitle = styled(Title)`
  margin-bottom: 0.8em;
`;

const TextContent = styled.div`
  width: 40%;

  ${MEDIA_TABLET} {
    width: auto;
    margin-bottom: 40px;
  }
`;

function TextAndImage({ title, text }) {
  return (
    <section>
      <Container className="flex flex-col md:justify-between md:flex-row">
        <TextContent>
          <StyledTitle>{title}</StyledTitle>
          {text && <Paragraph dangerouslySetInnerHTML={{ __html: text }} />}
        </TextContent>
        <StaticImage
          src={'../images/tmp/section-image.jpg'}
          alt="Section Image"
          width={557}
          formats={['AVIF', 'WEBP', 'JPG', 'PNG']}
        />
      </Container>
    </section>
  );
}

export default TextAndImage;
