import styled from 'styled-components';

export const FinancialStatementsTable = styled.table`
  width: 100%;

  td {
    border: 1px solid #d8d8d8;
  }

  th {
    background: #d8d8d8;
    border: 1px solid black;
  }

  td,
  th {
    padding: 10px;
  }

  caption {
    font-size: 2rem;
    text-align: left;
    margin-bottom: 0.5rem;
  }
`;
