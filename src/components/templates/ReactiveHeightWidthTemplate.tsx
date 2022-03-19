import { Alert } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { IBusinessErrorResponse } from '~/@types/response';
import Footer from '../Footer';
import Header from '../Header';
import { Loading } from '../Loading';

interface ISimplePageTemplate {
  children: React.ReactElement | JSX.Element | string;
  isLoading?: boolean;
  errors?: IBusinessErrorResponse | null;
}

export const ReactiveHeightWidthTemplate = ({ children, isLoading = false, errors }: ISimplePageTemplate) => {
  let content: React.ElementType | JSX.Element | string = children;

  if (isLoading) {
    content = <Loading />;
  } else if (errors && errors.message) {
    const { message: errorsMessage, status, code } = errors;
    content = <Alert showIcon={false} message={status} description={errorsMessage} type="error" banner closable />;
  }

  return (
    <React.Fragment>
      <Header />
      <CustomContentLayout>
        <ContentWrapper>{content}</ContentWrapper>
      </CustomContentLayout>
      <Footer />
    </React.Fragment>
  );
};

const CustomContentLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
