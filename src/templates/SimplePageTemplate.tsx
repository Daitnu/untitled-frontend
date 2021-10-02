import React from 'react';
import { Layout } from 'antd';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

const { Header: HeaderLayout, Footer: FooterLayout, Content: ContentLayout } = Layout;

export const SimplePageTemplate = ({ children }) => {
  return (
    <Layout>
      <Header />
      {/* <HeaderLayout>
      </HeaderLayout> */}
      <ContentLayout>{children}</ContentLayout>
      <Footer />
      {/* <FooterLayout>
      </FooterLayout> */}
    </Layout>
  );
};
