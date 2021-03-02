import React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import SectionExample from '../components/section-example';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <SectionExample />
    <div className="grid grid-cols-2 gap-3 mt-4">
      <div>
        <h2>Column 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
          rerum.
        </p>
      </div>
      <div>
        <h2>Column 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          asperiores, assumenda commodi dolore dolorum error excepturi impedit
          ipsa ipsam laborum magnam, minus molestias natus nihil officia
          pariatur quisquam reprehenderit sint!
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
