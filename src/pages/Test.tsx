import React from 'react';
import axios from 'axios';

const download = () => {
  axios
    .get('http://localhost:8080/cmm/file', {
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
      const name = result.headers['content-disposition'].split('filename=')[1];
      const url = window.URL.createObjectURL(new Blob([result.data], { type: result.headers['content-type'] }));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', name);
      document.body.appendChild(link);
      link.click();
    });
};

const Test: React.FC = () => {
  return (
    <>
      <div>hello</div>
      <button onClick={download}>파일다운로드</button>
    </>
  );
};

export default Test;
