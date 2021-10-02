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
    console.log(`checked = ${e.target.checked}`);
  };

  console.log('range ', rangeValues);
  return (
    <Row>
      <label color="magenta">{labelName}</label>
      <Checkbox onChange={onChangeCheckbox}>음수제거</Checkbox>
      <Col span={6}>
        <Slider range value={[rangeValues[0], rangeValues[1]]} onChange={onChangeSliderHandler} />
      </Col>
      <Col>
        <InputNumber min={min} max={max} value={rangeValues[0]} onBlur={onBlurInputNumberHandler} />
      </Col>
      <span>~</span>
      <Col>
        <InputNumber min={min} max={max} value={rangeValues[1]} onBlur={onBlurInputmaxHandler} />
      </Col>
    </Row>
  );
};
