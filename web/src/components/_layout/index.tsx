/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import Header from '../_root/header';
import { motion } from 'framer-motion';
// import { useStaticQuery, graphql } from 'gatsby';

const Layout = ({ children }: any): JSX.Element => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Header />
      <main className={'overflow-hidden'}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, type: 'tween' }}
        >
          {children}
        </motion.div>
      </main>
    </>
  );
};

export default Layout;
