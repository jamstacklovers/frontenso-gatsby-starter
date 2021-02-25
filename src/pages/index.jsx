import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
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
