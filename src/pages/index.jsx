import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import TextAndImage from '../components/text-and-image';
import Spacer from '../components/spacer';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <TextAndImage
      title="An online space for the likeminded"
      text={
        '<p><strong>The Stillpoint Spaces Community</strong> is a social space for counsellors, therapists, and the psychologically curious from all around the world! We bring together professionals and the psychologically curious to re-imagine psychology today, together.</p><p>This network meets with our broader vision to create the conditions for personal and professional growth, and positive change in our lives and in the wider world.</p>'
      }
    />
    <Spacer />
    <TextAndImage
      title="An online space for the likeminded"
      text={
        '<p><strong>The Stillpoint Spaces Community</strong> is a social space for counsellors, therapists, and the psychologically curious from all around the world! We bring together professionals and the psychologically curious to re-imagine psychology today, together.</p><p>This network meets with our broader vision to create the conditions for personal and professional growth, and positive change in our lives and in the wider world.</p>'
      }
    />
  </Layout>
);

export default IndexPage;
