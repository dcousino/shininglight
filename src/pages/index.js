import Layout from '../common/layouts';
import React from 'react';
import Navbar from '../common/components/navbar';
import About from '../homepage/components/about';
import Hero from '../homepage/components/hero';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Hero />
    <About />
  </Layout>
);

export default IndexPage;
