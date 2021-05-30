declare module '*.svg' {
  import React from 'react';
  const content: typeof React.Component;
  export default content;
}

interface Window {
  Stripe: any;
  google: any;
}
