import React from 'react';
import { Alert, Layout } from 'antd';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { Loading } from '~/components/Loading';
import { BusinessErrorResponse } from '~/@types/response';

const { Header: HeaderLayout, Footer: FooterLayout, Content: ContentLayout } = Layout;

interface ISimplePageTemplate {
  children: React.ReactElement;
  isLoading?: boolean;
  errors?: BusinessErrorResponse | null;
}

export const ThreeLayerTemplate = ({ children, isLoading = false, errors }: ISimplePageTemplate) => {
  let content: React.ElementType | JSX.Element = children;

  if (isLoading) {
    content = <Loading></Loading>;
  } else if (errors && errors.message) {
    const { message: errorsMessage, status, code } = errors;
    content = <Alert showIcon={false} message={status} description={errorsMessage} type="error" banner closable />;
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
