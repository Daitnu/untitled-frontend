import React from 'react';
import { Space, Spin } from 'antd';
import { LoadingWarp } from '~/globalStyles';

export const Loading = ({ spaceSize = 'large', spinSize = 'large' } = {}) => {
  return (
    <LoadingWarp>
      <Space size="large">
        <Spin size="large" tip="Loading..." />
      </Space>
    </LoadingWarp>
  );
};
