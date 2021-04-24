import React from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, LineChart, PieChart } from '~/components/Chart';
import { FinancialStatementsTable } from '~/components/Table';
import * as S from './styled';

const CorpInformation: React.FC = () => {
  const { code: stringCode } = useParams();
  const code = Number(stringCode);

  if (!Number.isInteger(code)) {
    return <INVALID_CODE_VALUE />;
  }

  return (
    <>
      <S.Container>
        <S.FinancialStatementsSection>
          <FinancialStatementsTable />
        </S.FinancialStatementsSection>
        <S.AnalysisSection>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <BarChart />
            <LineChart />
            <PieChart />
          </div>
        </S.AnalysisSection>
      </S.Container>
    </>
  );
};
// {/* <FinancialStatementsGrid data={data} />}

const INVALID_CODE_VALUE: React.FC = () => <div>잘못된 주소입니다.</div>;

export default CorpInformation;
