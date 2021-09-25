import React, { useState } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

interface SilderWidthInputFn {
  firstNumber: number;
  lastNumber: number;
}

export const SliderWithInput = ({ firstNumber = 0, lastNumber = 0 }: SilderWidthInputFn) => {
  const [rangeValues, setRangeValues] = useState([firstNumber, lastNumber]);

  const onChangeSliderHandler = (newRangeValues) => {
    setRangeValues(newRangeValues);
  };

  const onBlurInputNumberHandler = (e) => {
    const newValue = e.target.value;
    const newRagneValue = [...rangeValues];
    newRagneValue[0] = newValue;
    setRangeValues(newRagneValue.sort());
  };

  const onBlurInputLastNumberHandler = (e) => {
    const newValue = e.target.value;
    const newRagneValue = [...rangeValues];
    newRagneValue[1] = newValue;
    setRangeValues(newRagneValue.sort());
  };

  return (
    <Row>
      <Col span={6}>
        <Slider range value={[rangeValues[0], rangeValues[1]]} onChange={onChangeSliderHandler} />
      </Col>
      <Col span={3}>
        <InputNumber min={firstNumber} max={lastNumber} value={rangeValues[0]} onBlur={onBlurInputNumberHandler} />
      </Col>
      <Col span={3}>
        <InputNumber min={firstNumber} max={lastNumber} value={rangeValues[1]} onBlur={onBlurInputLastNumberHandler} />
      </Col>
    </Row>
  );
};
