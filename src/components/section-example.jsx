import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function SectionExample() {
  return (
    <div>
      <h1>section</h1>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="Astronaut"
        width={150}
        formats={['AVIF', 'WEBP', 'JPEG', 'PNG']}
      />
    </div>
  );
}

export default SectionExample;
