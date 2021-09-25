import React, { useState } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

interface SilderWidthInputFn {
  firstNumber: number;
  lastNumber: number;
}

export const SliderWithInput = ({ firstNumber = 0, lastNumber = 0 }) => {
  const [rangeValues, setRangeValues] = useState([firstNumber, lastNumber]);

  const onChangeSliderHandler = (newRangeValues) => {
    setRangeValues(newRangeValues);
  };

  const onChangeInputNumberHandler = (newValue) => {
    const newRagneValue = [...rangeValues];
    newRagneValue[0] = newValue;
    setRangeValues(newRagneValue);
    onChangeSliderHandler([...newRagneValue]);
  };

  const onChangeInputLastNumberHandler = (newValue) => {
    const newRagneValue = [...rangeValues];
    newRagneValue[1] = newValue;
    setRangeValues(newRagneValue);
    onChangeSliderHandler(newRagneValue);
    onChangeSliderHandler([...newRagneValue]);
  };

  console.log(rangeValues);

  return (
    <Row>
      <Col span={6}>
        <Slider range defaultValue={[rangeValues[0], rangeValues[1]]} onChange={onChangeSliderHandler} />
      </Col>
      <Col span={3}>
        <InputNumber min={firstNumber} max={lastNumber} value={rangeValues[0]} onChange={onChangeInputNumberHandler} />
      </Col>
      <Col span={3}>
        <InputNumber
          min={firstNumber}
          max={lastNumber}
          value={rangeValues[1]}
          onChange={onChangeInputLastNumberHandler}
        />
      </Col>
    </Row>
  );
};
