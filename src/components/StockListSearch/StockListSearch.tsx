import React, { useState } from 'react';
import { Button, Collapse, Row, Col, Descriptions, PageHeader, Checkbox } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { SliderWithInput } from '../Molecules';
import CollapsePanel from 'antd/lib/collapse/CollapsePanel';
import { STOCK_LIST_GRID_COLUMN_NAMES } from '~/constants';

const MIN_MAX = {
  [STOCK_LIST_GRID_COLUMN_NAMES.PER21]: {
    min: Number.MAX_SAFE_INTEGER,
    max: Number.MIN_SAFE_INTEGER,
  },
  [STOCK_LIST_GRID_COLUMN_NAMES.PER22]: {
    min: Number.MAX_SAFE_INTEGER,
    max: Number.MIN_SAFE_INTEGER,
  },
  [STOCK_LIST_GRID_COLUMN_NAMES.PER23]: {
    min: Number.MAX_SAFE_INTEGER,
    max: Number.MIN_SAFE_INTEGER,
  },
  [STOCK_LIST_GRID_COLUMN_NAMES.RATE_OF_GROWTH]: {
    min: Number.MAX_SAFE_INTEGER,
    max: Number.MIN_SAFE_INTEGER,
  },
};

const onClickInitBtn = ({ gridDatas }) => {
  return gridDatas.forEach((row) => {
    let { per21, per22, per23, rateOfGrowth } = row;
    per21 = per21 > 0 ? Math.ceil(per21) : Math.floor(per21);
    per22 = per22 > 0 ? Math.ceil(per22) : Math.floor(per22);
    per23 = per23 > 0 ? Math.ceil(per23) : Math.floor(per23);
    rateOfGrowth = rateOfGrowth > 0 ? Math.ceil(rateOfGrowth) : Math.floor(rateOfGrowth);
    MIN_MAX.per21.max = Math.max(MIN_MAX.per21.max, per21);
    MIN_MAX.per21.min = Math.min(MIN_MAX.per21.min, per21);
    MIN_MAX.per22.max = Math.max(MIN_MAX.per22.max, per22);
    MIN_MAX.per22.min = Math.min(MIN_MAX.per22.min, per22);
    MIN_MAX.per23.max = Math.max(MIN_MAX.per23.max, per23);
    MIN_MAX.per23.min = Math.min(MIN_MAX.per23.min, per23);
    MIN_MAX.rateOfGrowth.max = Math.max(MIN_MAX.rateOfGrowth.max, rateOfGrowth);
    MIN_MAX.rateOfGrowth.min = Math.min(MIN_MAX.rateOfGrowth.min, rateOfGrowth);
  });
};

export const StockListSearch = ({ gridDatas }) => {
  const [state, setstate] = useState(onClickInitBtn({ gridDatas }));

  return (
    <Collapse>
      <CollapsePanel header="검색조건" key="1">
        <SliderWithInput labelName={'PER21'} min={MIN_MAX.per21.min} max={MIN_MAX.per21.max} />
        <SliderWithInput labelName={'PER22'} min={MIN_MAX.per22.min} max={MIN_MAX.per22.max} />
        <SliderWithInput labelName={'PER23'} min={MIN_MAX.per23.min} max={MIN_MAX.per23.max} />
        <SliderWithInput labelName={'성장률'} min={MIN_MAX.rateOfGrowth.min} max={MIN_MAX.rateOfGrowth.max} />
        <Row>
          <Checkbox>우선주 시가총액 적용</Checkbox>
        </Row>

        <Row justify="end" gutter={4}>
          <Col>
            <Button type="primary">초기화</Button>
          </Col>
          <Col>
            <Button type="primary" icon={<SearchOutlined />}>
              검색
            </Button>
          </Col>
        </Row>
      </CollapsePanel>
    </Collapse>
  );
};
