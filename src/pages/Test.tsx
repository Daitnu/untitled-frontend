import axios from 'axios';
import React from 'react';
import UButton from '~/components/Atoms/UButton';
import UModal from '~/components/Molecules/UModal';
import { apiInstance } from '~/libraries/api';

const download = async () => {
  const response = await apiInstance.download('cmm/exportCSV', '헤헤.csv');
};

const Test: React.FC = () => {
  return (
    <>
      <div>hello</div>
      <button onClick={download}>파일다운로드</button>
      <UButton type="primary">가나다라마바사</UButton>
      <UButton>가나다라마바사</UButton>
      <UModal>컨텐츠입니다.!!</UModal>
    </>
  );
};

export default Test;
