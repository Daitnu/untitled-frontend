import React, { useState } from 'react';
import { Slider, InputNumber, Checkbox, Row, Col } from 'antd';

interface SilderWidthInputFn {
  labelName: string;
  min: number;
  max: number;
}

export const SliderWithInput = ({ labelName, min = 0, max = 0 }: SilderWidthInputFn) => {
  const [rangeValues, setRangeValues] = useState([min, max]);

  const onChangeSliderHandler = (newRangeValues) => {
    setRangeValues(newRangeValues);
  };

  const onBlurInputNumberHandler = (e) => {
    const newValue = e.target.value;
    const newRagneValue = [...rangeValues];
    newRagneValue[0] = newValue;
    setRangeValues(newRagneValue.sort());
  };

  const onBlurInputmaxHandler = (e) => {
    const newValue = e.target.value;
    const newRagneValue = [...rangeValues];
    newRagneValue[1] = newValue;
    setRangeValues(newRagneValue.sort());
  };

  const onChangeCheckbox = (e) => {
    // todo
  };

  return (
    <Row align="middle">
      <Col flex="70px">
        <label color="magenta">{labelName}</label>
      </Col>
      <Col flex="110px">
        <Checkbox onChange={onChangeCheckbox}>음수제거</Checkbox>
      </Col>
      <Col flex="auto">
        <Row align="middle">
          <Col flex="auto">
            <Slider range value={[rangeValues[0], rangeValues[1]]} onChange={onChangeSliderHandler} />
          </Col>
          <Col flex="200px">
            <InputNumber min={min} max={max} value={rangeValues[0]} onBlur={onBlurInputNumberHandler} />
            <span>~</span>
            <InputNumber min={min} max={max} value={rangeValues[1]} onBlur={onBlurInputmaxHandler} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
