import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDXProvider } from '@mdx-js/react';

import MDXComponentMapping from '../components/MDXComponentMapping';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponentMapping}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}

export default MyApp
