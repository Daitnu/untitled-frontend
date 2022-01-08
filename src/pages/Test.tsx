import axios from 'axios';
import React from 'react';
import UButton from '~/components/Atoms/UButton';
import UModal from '~/components/Molecules/UModal';
import { apiInstance } from '~/libraries/api';

const download = async () => {
  const response = await apiInstance.download('cmm/exportCSV', '헤헤.csv');

  // axios
  //   .get('http://localhost:8080/cmm/exportCSV', {
  //     headers: {
  //       'Content-Disposition': 'attachment; filename=test.xlxs',
  //       'Content-Type': 'application/octet-stream',
  //     },
  //     responseType: 'blob',
  //     onDownloadProgress: (progressEvent) => {
  //       const { total, loaded } = progressEvent;
  //       console.log('progressEvent', progressEvent);
  //       console.log('percent', ((loaded / total) * 100).toFixed(2));
  //     },
  //   })
  //   .then((result) => {
  //     console.log('result', result);
  //     const name: string = result.headers['content-disposition'].split('filename=')[1];
  //     const newName = decodeURIComponent(name);

  //     const url = window.URL.createObjectURL(new Blob([result.data], { type: result.headers['content-type'] }));
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.setAttribute('download', newName);
  //     document.body.appendChild(link);
  //     link.click();
  //   });
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
