import React, { Children } from 'react';
import { Alert, Layout } from 'antd';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { Loading } from '~/components/Loading';
import { BusinessErrorResponse } from '~/@types/response';

const { Header: HeaderLayout, Footer: FooterLayout, Content: ContentLayout } = Layout;

interface ISimplePageTemplate {
  children: React.ReactElement;
  isLoading?: boolean;
  error?: BusinessErrorResponse | null;
}

export const SimplePageTemplate = ({ children, isLoading = false, error }: ISimplePageTemplate) => {
  let content: React.ElementType | JSX.Element = children;

  if (isLoading) {
    content = <Loading></Loading>;
  } else if (error && error.message) {
    const { message: errorMessage, status, code } = error;
    content = <Alert showIcon={false} message={status} description={errorMessage} type="error" banner closable />;
  }

  return (
    <Layout>
      <Header />
      {/* <HeaderLayout>
      </HeaderLayout> */}
      <ContentLayout>{content}</ContentLayout>
      <Footer />
      {/* <FooterLayout>
      </FooterLayout> */}
    </Layout>
  );
};
