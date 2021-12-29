import React from 'react';
import axios from 'axios';
import UButton from '~/components/Atoms/UButton';
import UModal from '~/components/Molecules/UModal';

const download = () => {
  axios
    .get('http://localhost:8080/cmm/exportCSV', {
      headers: {
        'Content-Disposition': 'attachment; filename=test.xlxs',
      },
      responseType: 'blob',
      onDownloadProgress: (progressEvent) => {
        const { total, loaded } = progressEvent;
        console.log('progressEvent', progressEvent);
        console.log('percent', ((loaded / total) * 100).toFixed(2));
      },
    })
    .then((result) => {
      console.log('result', result);
      const name: string = result.headers['content-disposition'].split('filename=')[1];
      const newName = decodeURIComponent(name);

      const url = window.URL.createObjectURL(
        new Blob([new Uint8Array([0xef, 0xbb, 0xbf]), result.data], { type: result.headers['content-type'] }),
      );
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', newName);
      document.body.appendChild(link);
      link.click();
    });
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
