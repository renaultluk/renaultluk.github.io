// import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDXProvider } from '@mdx-js/react';
import { ParallaxProvider } from 'react-scroll-parallax';

import MDXComponentMapping from '../src/components/MDXComponentMapping';
import Layout from '../src/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <MDXProvider components={MDXComponentMapping}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ParallaxProvider>
  );
}

export default MyApp
