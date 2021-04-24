import React from 'react';
import { useParams } from 'react-router-dom';

const CorpInformation: React.FC = () => {
  const { code: stringCode } = useParams();
  const code = Number(stringCode);

  return <>{Number.isInteger(code) ? <div>CorpInformation {code}</div> : <INVALID_CODE_VALUE />} </>;
};

const INVALID_CODE_VALUE: React.FC = () => <div>잘못된 주소입니다.</div>;

export default CorpInformation;
