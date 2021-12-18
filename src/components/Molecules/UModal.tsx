import React, { useState } from 'react';
import { Modal as AntdModal, Button as AntdButton } from 'antd';

interface IModal {
  title?: string;
  children?: React.ReactElement | string;
  successCb?: (...args: any[]) => any;
  failCb?: (...args: any[]) => any;
}

const UModal = ({ title, children, successCb, failCb }: IModal) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (successCb) successCb();
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    if (failCb) failCb();
    setIsModalVisible(false);
  };

  return (
    <>
      <AntdButton type="primary" onClick={showModal}>
        Open Modal
      </AntdButton>
      <AntdModal title={title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </AntdModal>
    </>
  );
};

export default UModal;
