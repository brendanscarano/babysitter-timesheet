import React from 'react';
import propTypes from 'prop-types';
import { Checkbox, InputNumber } from 'antd';
// `$${rateAmount} hourly`

const Hourly = ({ onChange, value }) => (
  <div>
    Hours Sat
    {' '}
    <InputNumber
      min={1}
      max={24}
      value={value || 1}
      onChange={e => onChange(e)}
    />
  </div>
);

const Flat = ({ onChange, value, checked }) => (
  <div>
    Sat?
    {' '}
    <Checkbox
      onChange={e => onChange(e.target.checked)}
      checked={checked || value}
    />
  </div>
);

const PaymentType = ({
  rateType, onChange, value, checked,
}) => (
  <p>
    {rateType === 'HOURLY' ? <Hourly onChange={onChange} value={value} /> : <Flat onChange={onChange} value={value} checked={checked} />}
  </p>
);

PaymentType.propTypes = {
  rateType: propTypes.oneOf(['FLAT', 'HOURLY']).isRequired,
  onChange: propTypes.func.isRequired,
};

Hourly.propTypes = {
  onChange: propTypes.func.isRequired,
};

Flat.propTypes = {
  onChange: propTypes.func.isRequired,
};

export default PaymentType;
